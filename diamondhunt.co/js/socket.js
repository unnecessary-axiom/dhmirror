var _$_ccb4=["P2P=","~","length","now","send","onerror","Server is offline<br /> Try again in 1 minute.","disabled","loginSubmitButton","getElementById","onopen","onclose","onmessage","data","BTFG","message"];var webSocket;var websocketReady=false;function initWebsocket(){if(!websocketReady){webSocket=  new WebSocket(SSL_ENABLED);initWebSocketFunctions()}}function p2p(_0x12220,_0xC2B3){cBytes(_$_ccb4[0]+ _0x12220+ _$_ccb4[1]+ _0xC2B3)}function cBytes(_0xCA78){if(!websocketReady){setTimeout(function(){cBytes(_0xCA78)},1000);return};var _0xCAAB=parseInt(_0xCA78[_$_ccb4[2]]);if(_0xCAAB> 0&& _0xCAAB< 2000){if(_0xCAAB> 2000){var _0xCADE=Date[_$_ccb4[3]]();if((_0xCADE- ignoreBytesTracker)< 10000){return};ignoreBytesTracker= _0xCADE};webSocket[_$_ccb4[4]](_0xCA78)}}function initWebSocketFunctions(){try{var _0xFE44=Date[_$_ccb4[3]]();webSocket[_$_ccb4[5]]= function(_0xB55A){manageLoginReturnMessage(_$_ccb4[6]);document[_$_ccb4[9]](_$_ccb4[8])[_$_ccb4[7]]= false};webSocket[_$_ccb4[10]]= function(_0xB55A){_0xFF10(_0xB55A)};webSocket[_$_ccb4[11]]= function(_0xB55A){_0xFE77(_0xB55A)};webSocket[_$_ccb4[12]]= function(_0xB55A){_0xFEDD(_0xB55A)};function _0xFEDD(_0xB55A){doCommand(_0xB55A[_$_ccb4[13]])}function _0xFF10(_0xB55A){websocketReady= true}function _0xFE77(_0xB55A){}function _0xFEAA(_0xB55A){}function _0xFF43(_0xCA78){cBytes(_$_ccb4[14]);cBytes(_0xCA78)}}catch(err){alert(err[_$_ccb4[15]])}}