var _$_256c=["startsWith","prototype","function","indexOf","length","call","value",",","replace","toString","floor","","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789","random","charAt","MM/dd/yy HH:mm:ss"," Billion ","M","B","Less than 1 hour"," hours"," s"," m"," h"," "," sec"," min"," mins"," hour","0",":"," day"," days","Locked"," seconds"," minute"," minutes","text","html","<div/>"];if( typeof String[_$_256c[1]][_$_256c[0]]!= _$_256c[2]){String[_$_256c[1]][_$_256c[0]]= function(_0x6828){return this[_$_256c[3]](_0x6828)== 0}};var contains=function(_0x688E){var _0x684A=_0x688E!== _0x688E;var _0x686C;if(!_0x684A&&  typeof Array[_$_256c[1]][_$_256c[3]]=== _$_256c[2]){_0x686C= Array[_$_256c[1]][_$_256c[3]]}else {_0x686C= function(_0x688E){var _0x5BCE=-1,_0x68B0=-1;for(_0x5BCE= 0;_0x5BCE< this[_$_256c[4]];_0x5BCE++){var _0x68D2=this[_0x5BCE];if((_0x684A&& _0x68D2!== _0x68D2)|| _0x68D2=== _0x688E){_0x68B0= _0x5BCE;break}};return _0x68B0}};return _0x686C[_$_256c[5]](this,_0x688E)>  -1};function isInputElementAPositiveInt(_0x97F8){var _0x9330=_0x97F8[_$_256c[6]];if(_0x9330[_$_256c[4]]== 0){return false};if(isNaN(parseInt(_0x9330))){return false};if(parseInt(_0x9330)<= 0){return false};return true}function simpleFormatNumber(_0x8D36){if(isNaN(_0x8D36)){return _0x8D36}else {return Math[_$_256c[10]](_0x8D36)[_$_256c[9]]()[_$_256c[8]](/\B(?=(\d{3})+(?!\d))/g,_$_256c[7])}}function getRandomHash(_0x93FC){var _0x9440=_$_256c[11];var _0x941E=_$_256c[12];for(var _0x5BCE=0;_0x5BCE< _0x93FC;_0x5BCE++){_0x9440+= _0x941E[_$_256c[14]](Math[_$_256c[10]](Math[_$_256c[13]]()* _0x941E[_$_256c[4]]))};return _0x9440}function formatUnixToDate(_0x8E24){var _0x5D44=_0x8E24;var _0x5EFE= new Date(parseInt(_0x5D44));var _0x8E46=_0x5EFE[_$_256c[9]](_$_256c[15]);return _0x8E46}function simpleFormatNumberRocket(_0x8D36){if(isNaN(_0x8D36)){return _0x8D36}else {if(_0x8D36>= 10000000000){return simpleFormatNumber(_0x8D36/ 1000000000)+ _$_256c[16]}else {return Math[_$_256c[10]](_0x8D36)[_$_256c[9]]()[_$_256c[8]](/\B(?=(\d{3})+(?!\d))/g,_$_256c[7])}}}function formatNumber(_0x8D36){var _0x8D14=_$_256c[11];if(_0x8D36>= 100000000&& _0x8D36< 10000000000){_0x8D36/= 1000000;_0x8D14= _$_256c[17]}else {if(_0x8D36>= 10000000000){_0x8D36/= 1000000000;_0x8D14= _$_256c[18]}};return Math[_$_256c[10]](_0x8D36)[_$_256c[9]]()[_$_256c[8]](/\B(?=(\d{3})+(?!\d))/g,_$_256c[7])+ _$_256c[11]+ _0x8D14}function formatTimeGetHours(_0x8CF2){var _0x8CD0=parseInt(_0x8CF2/ 60/ 60);if(_0x8CD0== 0){return _$_256c[19]}else {return _0x8CD0+ 1+ _$_256c[20]}}function formatTimeShort(_0x8CF2){if(_0x8CF2< 60){return _0x8CF2+ _$_256c[21]}else {if(_0x8CF2>= 60&& _0x8CF2< 3600){var _0x5E54=parseInt(_0x8CF2/ 60);if(_0x5E54== 1){return _0x5E54+ _$_256c[22]}else {return _0x5E54+ _$_256c[22]}}else {var _0x8CD0=parseInt(_0x8CF2/ 60/ 60);if(_0x8CD0== 1){var _0x8DE0=parseInt((_0x8CF2- (60* 60))/ 60);var _0x8E02=_0x8CD0+ _$_256c[23];if(_0x8DE0> 0){_0x8E02+= _$_256c[24]+ _0x8DE0+ _$_256c[22]};return _0x8E02}else {return _0x8CD0+ _$_256c[23]}}};return 0}function formatTimeShort2(_0x8CF2){if(_0x8CF2< 60){return _0x8CF2+ _$_256c[25]}else {if(_0x8CF2>= 60&& _0x8CF2< 3600){var _0x5E54=parseInt(_0x8CF2/ 60);if(_0x5E54== 1){return _0x5E54+ _$_256c[26]}else {return _0x5E54+ _$_256c[27]}}else {var _0x8CD0=parseInt(_0x8CF2/ 60/ 60);if(_0x8CD0== 1){var _0x8DE0=parseInt((_0x8CF2- (60* 60))/ 60);var _0x8E02=_0x8CD0+ _$_256c[28];if(_0x8DE0> 0){_0x8E02+= _$_256c[24]+ _0x8DE0+ _$_256c[27]};return _0x8E02}else {return _0x8CD0+ _$_256c[20]}}};return 0}function formatTime(_0x8CF2){if(_0x8CF2<= 0){return _$_256c[29]};if(_0x8CF2< 86400){var _0x72A6=_0x8CF2;var _0x8D58=~~(_0x72A6/ 3600);var _0x8D7A=~~((_0x72A6% 3600)/ 60);var _0x8DBE=_0x72A6% 60;var _0x8D9C=_$_256c[11];if(_0x8D58> 0){_0x8D9C+= _$_256c[11]+ _0x8D58+ _$_256c[30]+ (_0x8D7A< 10?_$_256c[29]:_$_256c[11])};_0x8D9C+= _$_256c[11]+ _0x8D7A+ _$_256c[30]+ (_0x8DBE< 10?_$_256c[29]:_$_256c[11]);_0x8D9C+= _$_256c[11]+ _0x8DBE;return _0x8D9C}else {var _0x8CAE=parseInt(_0x8CF2/ 60/ 60/ 24);if(_0x8CAE== 1){return _0x8CAE+ _$_256c[31]}else {return _0x8CAE+ _$_256c[32]}};return 0}function formatDonorTime(_0x8CF2){if(_0x8CF2<= 0){return _$_256c[33]};if(_0x8CF2< 60){return _0x8CF2+ _$_256c[34]}else {if(_0x8CF2>= 60&& _0x8CF2< 3600){var _0x5E54=parseInt(_0x8CF2/ 60);if(_0x5E54== 1){return _0x5E54+ _$_256c[35]}else {return _0x5E54+ _$_256c[36]}}else {if(_0x8CF2>= 3600&& _0x8CF2< 86400){var _0x8CD0=parseInt(_0x8CF2/ 60/ 60);if(_0x8CD0== 1){return _0x8CD0+ _$_256c[28]}else {return _0x8CD0+ _$_256c[20]}}else {var _0x8CAE=parseInt(_0x8CF2/ 60/ 60/ 24);if(_0x8CAE== 1){return _0x8CAE+ _$_256c[31]}else {return _0x8CAE+ _$_256c[32]}}}};return 0}function htmlDecode(_0x5DCC){return $(_$_256c[39])[_$_256c[38]](_0x5DCC)[_$_256c[37]]()}