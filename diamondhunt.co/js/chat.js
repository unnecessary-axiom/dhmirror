var _$_e466=["","length","indexOf","div-chat-area","getElementById"," WiKi"," <a href=\"http://diamondhuntonline.wikia.com/wiki/Diamond_Hunt_Online_Wiki\" target=\"_blank\">WiKi</a>","replace"," WIKI"," <a href=\"http://diamondhuntonline.wikia.com/wiki/Diamond_Hunt_Online_Wiki\" target=\"_blank\">WIKI</a>"," FAQ"," <a href=\"http://diamondhuntonline.wikia.com/wiki/Guides/Simple_Game_FAQ\" target=\"_blank\">FAQ</a>"," ABOUT"," <a href=\"http://diamondhunt.co/about\" target=\"_blank\">ABOUT</a>","append"," ","<br />","slow","animate","stop","LOAD_MUTE_LIST","dialogue-mutelist","default","innerHTML","muteListTable","<tr><th>You do not have anyone muted.</th></tr>","<tr><th width=\'200px\'>Name</th><th>IP Muted</th><th>Remove</th></tr>","~","split","<img src=\'images/icons/check.png\' class=\'image-icon-20\' />","<tr><td>","</td><td>","</td><td><img src=\'images/icons/x.png\' onclick=\'unMute(\"","\",\"","\")\' class=\'image-icon-20\' style=\'cursor:pointer;\' /></td></tr>","UNMUTE=","value","dialogue-muteUser-input","checked","dialogue-muteUser-ip","log","ADD_MUTE_USER=","http","www.",".com",".ca",".co",".net",".us","%22","%27","%3E","%3C","&#62;","&#60;",";","\"","<",">","javascript:","window","document","cookie","startsWith","http://","<a href=\'","\' target=\'_blank\'>","</a>","getHours","0","getMinutes","[",":","] ","CHAT_ICON=","dialogue-chat-icons","none","red","Disabled","lime","Enabled","<img src=\'images/","\' class=\'img-medium\' /> ","body","appendTo","<div class=\"scroller\" style=\"color:","\">","</div>","absolute","css","-=50px","remove","fadeOut","<img src=\'images/chat-icons/",".png\' style=\'vertical-align:middle;margin-right:1px;\' />",".png\' class=\'image-icon-20\' />","keyCode","chat-input-text","/pm ","preventDefault","CHAT=","&amp;","&lt;","&gt;","&quot;","&#39;","&#x2F;","&#x60;","&#x3D;","mute-player-select-option-title","Mute ","?","dialogue-mute-attempt","REFRESH_MOD_MUTE_LIST","/","substr","pm","join","_","sexy_squid","PM=","[Sent to ","]: ","clear","smute","dialogue-smute-username","dialogue-smute","mute","dialogue-muteUser","list","mutelist","whois","WHO_IS=","yell","YELL=","update","UPDATE_IN=","tick","TICK=","FULL_EASTER_BASKET_2018","Delete this mute from the database?","Unmute","Cancel","MOD_UNMUTE=","mod-mutelist-table","<tr style=\'background-color:silver;\'><th width=\'5%\'>ID</th><th width=\'10%\'>Username</th><th width=\'10%\'>Mod</th><th width=\'8%\'>Date Muted</th><th width=\'8%\'>Mute Length</th><th width=\'8%\'>Remaining Time</th><th width=\'50%\'>Reason</th><th width=\'5%\'>IP Muted</th></tr>","<tr onclick=\'removeMute(",")\'>","<td>","</td>","No","1","Yes","dialogue-smute-hours","dialogue-smute-reason","dialogue-smute-ipmuted","SMUTE=","images/chat-icons/1.png","pumpkinSigil","images/chat-icons/2.png","santaHatSigil","images/chat-icons/3.png","easterEggSigil","images/chat-icons/4.png","ghostSigil","images/chat-icons/5.png","treeSigil","images/chat-icons/27.png","bunnySigil","images/chat-icons/28.png","goldEventSigil","images/chat-icons/29.png","silverEventSigil","images/chat-icons/30.png","bronzeEventSigil","images/chat-icons/31.png","eventSigil","images/chat-icons/32.png","robotSigil","images/chat-icons/34.png","catSigil","images/goldEventSigil2.png","goldEventSigil2","images/silverEventSigil2.png","silverEventSigil2","images/bronzeEventSigil2.png","bronzeEventSigil2","images/eventSigil2.png","eventSigil2","images/lumpOfCoalSigil.png","lumpOfCoalSigil","images/snowmanSigil.png","snowmanSigil","images/carrotSigil.png","carrotSigil","images/candyCaneSigil.png","candyCaneSigil","height","#div-chat-area","style","px","chat-send-button","Sending...","disabled","Send","focus","<span class=\'chat-tag-yell\'>Server Message</span>","<span class=\'chat-tag-dev\'>Dev</span>","<span class=\'chat-tag-mod\'>Moderator</span>","<span class=\'chat-tag-contributor\'>Contributor</span>","<img src=\'images/chat-icons/donor.png\' class=\'image-icon-20\' />","<span class=\'chat-area-username\' oncontextmenu=\'lookup(\"","\");return false;\' onclick=\'leftClicksUsernameInChat(\"","\")\'>","<span style=\'color:purple\'>","</span>","<span style=\'color:green\'>","<span style=\'color:grey\'>","<span style=\'color:#808000\'>","<span style=\'color:blue\'>","<span>","display","div-chat"];var isAutoScrolling=true;var lastPmUser=_$_e466[0];var mutedPeople=[];function addToChatBox(_0xC37F,_0xC24D,_0xC34C,_0xC2B3,_0xC280){for(var _0xA36C=0;_0xA36C< mutedPeople[_$_e466[1]];_0xA36C++){if(_0xC37F[_$_e466[2]](mutedPeople[_0xA36C])>  -1){return}};var _0xC1E7=document[_$_e466[4]](_$_e466[3]);if(_0xC280== 0){var _0xC21A=getChatIcon(_0xC24D);var _0xC319=getChatTag(_0xC34C)};_0xC2B3= _0xC2B3[_$_e466[7]](_$_e466[5],_$_e466[6]);_0xC2B3= _0xC2B3[_$_e466[7]](_$_e466[8],_$_e466[9]);_0xC2B3= _0xC2B3[_$_e466[7]](_$_e466[10],_$_e466[11]);_0xC2B3= _0xC2B3[_$_e466[7]](_$_e466[12],_$_e466[13]);var _0xC2E6=getMessageElement(_0xC34C,_0xC2B3,_0xC37F,_0xC280);$(_0xC1E7)[_$_e466[14]](getTimeFetch());$(_0xC1E7)[_$_e466[14]](_0xC21A);$(_0xC1E7)[_$_e466[14]](_0xC319);$(_0xC1E7)[_$_e466[14]](_$_e466[15]+ removeChars(_0xC2E6));$(_0xC1E7)[_$_e466[14]](_$_e466[16]);if(isAutoScrolling){$(_0xC1E7)[_$_e466[19]]()[_$_e466[18]]({scrollTop:55555555},_$_e466[17])}}function removeChars(_0x12F13){return _0x12F13[_$_e466[7]](/[^\x00-\x7F]/g,_$_e466[0])}function openMuteListDialogue(){cBytes(_$_e466[20]);openDialogue(_$_e466[21],_$_e466[22],_$_e466[22])}function loadMuteList(_0xE7C1){if(_0xE7C1== _$_e466[0]){document[_$_e466[4]](_$_e466[24])[_$_e466[23]]= _$_e466[25]}else {var _0x10F99=_$_e466[26];var _0xD0A5=_0xE7C1[_$_e466[28]](_$_e466[27]);for(var _0xA36C=0;_0xA36C< _0xD0A5[_$_e466[1]];_0xA36C++){var _0x11032=_0xD0A5[_0xA36C];_0xA36C++;var _0x10FCC=_0xD0A5[_0xA36C];var _0x10FFF=_$_e466[0];if(_0x10FCC== 1){_0x10FFF= _$_e466[29]};_0x10F99+= _$_e466[30]+ _0x11032+ _$_e466[31]+ _0x10FFF+ _$_e466[32]+ _0x11032+ _$_e466[33]+ _0x10FCC+ _$_e466[34]};document[_$_e466[4]](_$_e466[24])[_$_e466[23]]= _0x10F99}}function unMute(_0x11032,_0x10FCC){cBytes(_$_e466[35]+ _0x11032+ _$_e466[27]+ _0x10FCC)}function muteUser(){var _0xBE1E=document[_$_e466[4]](_$_e466[37])[_$_e466[36]];var _0x119C2=document[_$_e466[4]](_$_e466[39])[_$_e466[38]];if(_0x119C2){_0x119C2= 1}else {_0x119C2= 0};console[_$_e466[40]](_0xBE1E+ _$_e466[15]+ _0x119C2);cBytes(_$_e466[41]+ _0xBE1E+ _$_e466[27]+ _0x119C2)}function isValidURL(_0x10075){if(_0x10075[_$_e466[2]](_$_e466[42])>= 0|| _0x10075[_$_e466[2]](_$_e466[43])>= 0|| _0x10075[_$_e466[2]](_$_e466[44])>= 0|| _0x10075[_$_e466[2]](_$_e466[45])>= 0|| _0x10075[_$_e466[2]](_$_e466[46])>= 0|| _0x10075[_$_e466[2]](_$_e466[47])>= 0|| _0x10075[_$_e466[2]](_$_e466[48])>= 0){if(_0x10075[_$_e466[2]](_$_e466[49])>= 0|| _0x10075[_$_e466[2]](_$_e466[50])>= 0|| _0x10075[_$_e466[2]](_$_e466[51])>= 0|| _0x10075[_$_e466[2]](_$_e466[52])>= 0|| _0x10075[_$_e466[2]](_$_e466[53])>= 0|| _0x10075[_$_e466[2]](_$_e466[54])>= 0|| _0x10075[_$_e466[2]](_$_e466[55])>= 0|| _0x10075[_$_e466[2]](_$_e466[27])>= 0|| _0x10075[_$_e466[2]](_$_e466[56])>= 0|| _0x10075[_$_e466[2]](_$_e466[57])>= 0|| _0x10075[_$_e466[2]](_$_e466[58])>= 0|| _0x10075[_$_e466[2]](_$_e466[59])>= 0|| _0x10075[_$_e466[2]](_$_e466[60])>= 0|| _0x10075[_$_e466[2]](_$_e466[61])>= 0|| _0x10075[_$_e466[2]](_$_e466[62])>= 0){return false};return true}else {return false}}function convertStringToURL(_0xB5F3){if(!_0xB5F3[_$_e466[63]](_$_e466[42])){_0xB5F3= _$_e466[64]+ _0xB5F3};var _0xDDFE=_$_e466[65]+ _0xB5F3+ _$_e466[66]+ _0xB5F3+ _$_e466[67];return _0xDDFE}function getTimeFetch(){var _0xA834= new Date();if(_0xA834[_$_e466[68]]()< 10){var _0xF949=_$_e466[69]+ _0xA834[_$_e466[68]]()}else {var _0xF949=_0xA834[_$_e466[68]]()};if(_0xA834[_$_e466[70]]()< 10){var _0xF97C=_$_e466[69]+ _0xA834[_$_e466[70]]()}else {var _0xF97C=_0xA834[_$_e466[70]]()};var _0xF916=_$_e466[71]+ _0xF949+ _$_e466[72]+ _0xF97C+ _$_e466[73];return _0xF916}function changeIcon(_0xCB44){cBytes(_$_e466[74]+ _0xCB44)}function openIconsDialogue(){openDialogue(_$_e466[75],_$_e466[22],_$_e466[22])}function toggleAutoScroll(){if(isAutoScrolling){scrollText(_$_e466[76],_$_e466[77],_$_e466[78]);isAutoScrolling= false}else {scrollText(_$_e466[76],_$_e466[79],_$_e466[80]);isAutoScrolling= true}}function scrollText(_0x13243,_0x130AB,_0xDB9A){var _0xD03F=_$_e466[0];if(_0x13243!= _$_e466[76]){_0xD03F= _$_e466[81]+ _0x13243+ _$_e466[82]};var _0x13210=$(_$_e466[85]+ _0x130AB+ _$_e466[86]+ _0xD03F+ _0xDB9A+ _$_e466[87])[_$_e466[84]](_$_e466[83]);$(_0x13210)[_$_e466[89]]({position:_$_e466[88],left:mouseX- 50,top:mouseY- 50});$(_0x13210)[_$_e466[18]]({top:_$_e466[90]},function(){$(_0x13210)[_$_e466[92]](1000,function(){$(this)[_$_e466[91]]()})})}function getChatIcon(_0xC24D){if(parseInt(_0xC24D)> 0){if(_0xC24D== 6){return _$_e466[93]+ _0xC24D+ _$_e466[94]}else {return _$_e466[93]+ _0xC24D+ _$_e466[95]}}else {return _$_e466[0]}}function onKeyUpListenerChatInput(_0x11A8E,_0xD903){if(_0x11A8E[_$_e466[96]]== 13){sendChat(_0xD903)};if(_0x11A8E[_$_e466[96]]== 9){if(lastPmUser!= _$_e466[0]){document[_$_e466[4]](_$_e466[97])[_$_e466[36]]= _$_e466[98]+ lastPmUser+ _$_e466[15]};if(_0x11A8E[_$_e466[99]]){_0x11A8E[_$_e466[99]]()};return false}}function sendChat(_0xD903){var _0xC8AD=_0xD903[_$_e466[36]];if(_0xC8AD[_$_e466[1]]> 0){if(!doChatCommand(_0xC8AD)){cBytes(_$_e466[100]+ _0xC8AD)};document[_$_e466[4]](_$_e466[97])[_$_e466[36]]= _$_e466[0];disableChattingInput();setTimeout(enableChattingInput,100)}}var entityMap={'&':_$_e466[101],'<':_$_e466[102],'>':_$_e466[103],'\"':_$_e466[104],"\'":_$_e466[105],'/':_$_e466[106],'`':_$_e466[107],'=':_$_e466[108]};function escapeHtml(_0xEC23){return String(_0xEC23)[_$_e466[7]](/[&<>"'`=\/]/g,function(_0xA438){return entityMap[_0xA438]})}function showMuteAttemptDialogue(_0x13C6C){document[_$_e466[4]](_$_e466[109])[_$_e466[23]]= _$_e466[110]+ _0x13C6C+ _$_e466[111];openDialogue(_$_e466[112],_$_e466[22],_$_e466[22])}function refreshMuteList(){cBytes(_$_e466[113])}function doChatCommand(_0xC8AD){if(_0xC8AD[_$_e466[63]](_$_e466[114])){_0xC8AD= _0xC8AD[_$_e466[115]](1);if(_0xC8AD[_$_e466[63]](_$_e466[116])){var _0xE728=_0xC8AD[_$_e466[28]](_$_e466[15]);var _0xE5F6=_$_e466[0];for(var _0xA36C=2;_0xA36C< _0xE728[_$_e466[1]];_0xA36C++){_0xE5F6+= _0xE728[_0xA36C]+ _$_e466[15]};var _0xE6C2=_0xE728[1][_$_e466[28]](_$_e466[118])[_$_e466[117]](_$_e466[15]);if(_0xE728[1]== _$_e466[119]){var _0xE6C2=_0xE728[1]};cBytes(_$_e466[120]+ _0xE6C2+ _$_e466[27]+ _0xE5F6);lastPmUser= _0xE728[1];addToChatBox(username,0,0,_$_e466[121]+ htmlDecode(_0xE6C2)+ _$_e466[122]+ htmlDecode(_0xE5F6),1)}else {if(_0xC8AD[_$_e466[63]](_$_e466[123])){document[_$_e466[4]](_$_e466[3])[_$_e466[23]]= _$_e466[0]}else {if(_0xC8AD[_$_e466[63]](_$_e466[124])){if(chatTag== 3|| chatTag== 4){var _0xE6F5=_0xC8AD[_$_e466[115]](6);document[_$_e466[4]](_$_e466[125])[_$_e466[36]]= _0xE6F5;openDialogue(_$_e466[126],_$_e466[22],_$_e466[22])}}else {if(_0xC8AD[_$_e466[63]](_$_e466[127])){document[_$_e466[4]](_$_e466[37])[_$_e466[36]]= _0xC8AD[_$_e466[115]](5);openDialogue(_$_e466[128],_$_e466[22],_$_e466[22])}else {if(_0xC8AD[_$_e466[63]](_$_e466[129])){if(chatTag== 3|| chatTag== 4){openTab(_$_e466[130]);refreshMuteList()}}else {if(_0xC8AD[_$_e466[63]](_$_e466[131])){var _0xE68F=_0xC8AD[_$_e466[115]](6);cBytes(_$_e466[132]+ _0xE68F)}else {if(_0xC8AD[_$_e466[63]](_$_e466[133])){var _0xE75B=_0xC8AD[_$_e466[115]](5);cBytes(_$_e466[134]+ _0xE75B)}else {if(_0xC8AD[_$_e466[63]](_$_e466[135])){var _0xE65C=_0xC8AD[_$_e466[115]](7);cBytes(_$_e466[136]+ _0xE65C)}else {if(_0xC8AD[_$_e466[63]](_$_e466[137])){var _0xE629=_0xC8AD[_$_e466[115]](5);cBytes(_$_e466[138]+ _0xE629)}}}}}}}}};return true}else {return false}}function clicksFullEasterBasket(){cBytes(_$_e466[139])}function removeMute(_0x10F66){if(chatTag== 3|| chatTag== 4){confirmDialogue(400,_$_e466[140],_$_e466[141],_$_e466[142],_$_e466[143]+ _0x10F66)}}function loadModMuteList(_0xE98C){var _0xC57D=document[_$_e466[4]](_$_e466[144]);var _0xC814=_$_e466[145];var _0x10E9A=_0xE98C[_$_e466[28]](_$_e466[27]);for(var _0xA36C=0;_0xA36C< _0x10E9A[_$_e466[1]];_0xA36C+= 0){var _0x10F66=_0x10E9A[_0xA36C+ 1];_0xC814+= _$_e466[146]+ _0x10F66+ _$_e466[147];_0xC814+= _$_e466[148];_0xC814+= _0x10E9A[_0xA36C];_0xC814+= _$_e466[149];_0xA36C++;_0xA36C++;_0xC814+= _$_e466[148];_0xC814+= _0x10E9A[_0xA36C];_0xC814+= _$_e466[149];_0xA36C++;_0xC814+= _$_e466[148];_0xC814+= _0x10E9A[_0xA36C];_0xC814+= _$_e466[149];_0xA36C++;var _0x10ECD=_0x10E9A[_0xA36C];_0xC814+= _$_e466[148];_0xC814+= formatUnixToDate(_0x10ECD);_0xC814+= _$_e466[149];_0xA36C++;var _0x10F00=_0x10E9A[_0xA36C];_0xC814+= _$_e466[148];_0xC814+= formatTimeGetHours((parseInt(_0x10F00)- 1)/ 1000);_0xC814+= _$_e466[149];_0xC814+= _$_e466[148];_0xC814+= formatTimeGetHours(((((parseInt(_0x10ECD)+ parseInt(_0x10F00)))- parseInt(currentTimeMillis))- 1)/ 1000);_0xC814+= _$_e466[149];_0xA36C++;_0xC814+= _$_e466[148];_0xC814+= _0x10E9A[_0xA36C];_0xC814+= _$_e466[149];_0xA36C++;var _0x10F33=_$_e466[150];if(_0x10E9A[_0xA36C]== _$_e466[151]){_0x10F33= _$_e466[152]};_0xC814+= _$_e466[148];_0xC814+= _0x10F33;_0xC814+= _$_e466[149];_0xA36C++};console[_$_e466[40]](_0xE98C);_0xC57D[_$_e466[23]]= _0xC814}function sMute(){var _0xBE1E=document[_$_e466[4]](_$_e466[125]);var _0xECBC=document[_$_e466[4]](_$_e466[153]);var _0x13CD2=document[_$_e466[4]](_$_e466[154]);var _0x10F33=0;if(document[_$_e466[4]](_$_e466[155])[_$_e466[38]]){_0x10F33= 1};cBytes(_$_e466[156]+ _0xBE1E[_$_e466[36]]+ _$_e466[27]+ _0xECBC[_$_e466[36]]+ _$_e466[27]+ _0x13CD2[_$_e466[36]]+ _$_e466[27]+ _0x10F33)}function getSigilPicture(_0xF817){switch(_0xF817){case _$_e466[158]:return _$_e466[157];case _$_e466[160]:return _$_e466[159];case _$_e466[162]:return _$_e466[161];case _$_e466[164]:return _$_e466[163];case _$_e466[166]:return _$_e466[165];case _$_e466[168]:return _$_e466[167];case _$_e466[170]:return _$_e466[169];case _$_e466[172]:return _$_e466[171];case _$_e466[174]:return _$_e466[173];case _$_e466[176]:return _$_e466[175];case _$_e466[178]:return _$_e466[177];case _$_e466[180]:return _$_e466[179];case _$_e466[182]:return _$_e466[181];case _$_e466[184]:return _$_e466[183];case _$_e466[186]:return _$_e466[185];case _$_e466[188]:return _$_e466[187];case _$_e466[190]:return _$_e466[189];case _$_e466[192]:return _$_e466[191];case _$_e466[194]:return _$_e466[193];case _$_e466[196]:return _$_e466[195];default:return _$_e466[0]}}function enlargeChat(_0xEB8A){var _0xEB57=$(_$_e466[198])[_$_e466[197]]();if(_0xEB8A){if(_0xEB57< 1000){document[_$_e466[4]](_$_e466[3])[_$_e466[199]][_$_e466[197]]= (_0xEB57+ 100)+ _$_e466[200]}}else {if(_0xEB57> 50){document[_$_e466[4]](_$_e466[3])[_$_e466[199]][_$_e466[197]]= (_0xEB57- 100)+ _$_e466[200]}}}function disableChattingInput(){document[_$_e466[4]](_$_e466[201])[_$_e466[36]]= _$_e466[202];document[_$_e466[4]](_$_e466[97])[_$_e466[203]]= true;document[_$_e466[4]](_$_e466[201])[_$_e466[203]]= true}function enableChattingInput(){document[_$_e466[4]](_$_e466[201])[_$_e466[36]]= _$_e466[204];document[_$_e466[4]](_$_e466[97])[_$_e466[203]]= false;document[_$_e466[4]](_$_e466[201])[_$_e466[203]]= false;document[_$_e466[4]](_$_e466[97])[_$_e466[205]]()}function getChatTag(_0xC34C){if(parseInt(_0xC34C)== 5){return _$_e466[206]}else {if(parseInt(_0xC34C)== 4){return _$_e466[207]}else {if(parseInt(_0xC34C)== 3){return _$_e466[208]}else {if(parseInt(_0xC34C)== 2){return _$_e466[209]}else {if(parseInt(_0xC34C)== 1){return _$_e466[210]}else {return _$_e466[0]}}}}}}function getMessageElement(_0xC34C,_0xC2B3,_0xC37F,_0xC280){var _0xF4E7=_$_e466[211]+ _0xC37F+ _$_e466[212]+ _0xC37F+ _$_e466[213];if(profileChatLinks== 1){var _0xF4B4=_0xC2B3[_$_e466[28]](_$_e466[15]);_0xC2B3= _$_e466[0];for(var _0xA36C=0;_0xA36C< _0xF4B4[_$_e466[1]];_0xA36C++){if(isValidURL(_0xF4B4[_0xA36C])){_0xC2B3+= convertStringToURL(_0xF4B4[_0xA36C])+ _$_e466[15]}else {_0xC2B3+= _0xF4B4[_0xA36C]+ _$_e466[15]}}};if(_0xC280== 1){return _$_e466[214]+ _0xC2B3+ _$_e466[215]}else {if(_0xC34C== 2){return _$_e466[216]+ _0xF4E7+ _0xC37F+ _$_e466[215]+ _0xC2B3+ _$_e466[215]}else {if(_0xC34C== 3){return _$_e466[217]+ _0xF4E7+ _0xC37F+ _$_e466[215]+ _0xC2B3+ _$_e466[215]}else {if(_0xC34C== 4){return _$_e466[218]+ _0xF4E7+ _0xC37F+ _$_e466[215]+ _0xC2B3+ _$_e466[215]}else {if(_0xC34C== 5){return _$_e466[219]+ _0xC2B3+ _$_e466[215]}else {return _$_e466[220]+ _0xF4E7+ _0xC37F+ _$_e466[215]+ _0xC2B3+ _$_e466[215]}}}}}}function leftClicksUsernameInChat(_0x100A8){document[_$_e466[4]](_$_e466[97])[_$_e466[36]]= _$_e466[98]+ _0x100A8+ _$_e466[15];document[_$_e466[4]](_$_e466[97])[_$_e466[205]]()}function refreshChatBoxOnOff(){if(profileChatBoxOff== 0&& document[_$_e466[4]](_$_e466[222])[_$_e466[199]][_$_e466[221]]== _$_e466[76]){document[_$_e466[4]](_$_e466[222])[_$_e466[199]][_$_e466[221]]= _$_e466[0]};if(profileChatBoxOff== 1&& document[_$_e466[4]](_$_e466[222])[_$_e466[199]][_$_e466[221]]!= _$_e466[76]){document[_$_e466[4]](_$_e466[222])[_$_e466[199]][_$_e466[221]]= _$_e466[76]}}