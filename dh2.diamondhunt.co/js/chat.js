var _$_26f8=["","length","indexOf","div-chat-area","getElementById"," WiKi"," <a href=\"http://diamondhuntonline.wikia.com/wiki/Diamond_Hunt_Online_Wiki\" target=\"_blank\">WiKi</a>","replace"," WIKI"," <a href=\"http://diamondhuntonline.wikia.com/wiki/Diamond_Hunt_Online_Wiki\" target=\"_blank\">WIKI</a>"," FAQ"," <a href=\"http://diamondhuntonline.wikia.com/wiki/Guides/Simple_Game_FAQ\" target=\"_blank\">FAQ</a>"," ABOUT"," <a href=\"http://diamondhunt.co/about\" target=\"_blank\">ABOUT</a>","append"," ","<br />","slow","animate","stop","LOAD_MUTE_LIST","dialogue-mutelist","default","innerHTML","muteListTable","<tr><th>You do not have anyone muted.</th></tr>","<tr><th width=\'200px\'>Name</th><th>IP Muted</th><th>Remove</th></tr>","~","split","<img src=\'images/icons/check.png\' class=\'image-icon-20\' />","<tr><td>","</td><td>","</td><td><img src=\'images/icons/x.png\' onclick=\'unMute(\"","\",\"","\")\' class=\'image-icon-20\' style=\'cursor:pointer;\' /></td></tr>","UNMUTE=","value","dialogue-muteUser-input","checked","dialogue-muteUser-ip","log","ADD_MUTE_USER=","http","www.",".com",".ca",".co",".net",".us","%22","%27","%3E","%3C","&#62;","&#60;",";","\"","<",">","javascript:","window","document","cookie","startsWith","http://","<a href=\'","\' target=\'_blank\'>","</a>","getHours","0","getMinutes","[",":","] ","CHAT_ICON=","dialogue-chat-icons","none","red","Disabled","lime","Enabled","<img src=\'images/","\' class=\'img-medium\' /> ","body","appendTo","<div class=\"scroller\" style=\"color:","\">","</div>","absolute","css","-=50px","remove","fadeOut","<img src=\'images/chat-icons/",".png\' style=\'vertical-align:middle;margin-right:1px;\' />",".png\' class=\'image-icon-20\' />","keyCode","chat-input-text","/pm ","preventDefault","CHAT=","&amp;","&lt;","&gt;","&quot;","&#39;","&#x2F;","&#x60;","&#x3D;","mute-player-select-option-title","Mute ","?","dialogue-mute-attempt","REFRESH_MOD_MUTE_LIST","/","substr","pm","join","_","sexy_squid","PM=","[Sent to ","]: ","clear","smute","dialogue-smute-username","dialogue-smute","mute","dialogue-muteUser","list","mutelist","whois","WHO_IS=","yell","YELL=","update","UPDATE_IN=","tick","TICK=","FULL_EASTER_BASKET_2018","Delete this mute from the database?","Unmute","Cancel","MOD_UNMUTE=","mod-mutelist-table","<tr style=\'background-color:silver;\'><th width=\'5%\'>ID</th><th width=\'10%\'>Username</th><th width=\'10%\'>Mod</th><th width=\'8%\'>Date Muted</th><th width=\'8%\'>Mute Length</th><th width=\'8%\'>Remaining Time</th><th width=\'50%\'>Reason</th><th width=\'5%\'>IP Muted</th></tr>","<tr onclick=\'removeMute(",")\'>","<td>","</td>","No","1","Yes","dialogue-smute-hours","dialogue-smute-reason","dialogue-smute-ipmuted","SMUTE=","images/chat-icons/1.png","pumpkinSigil","images/chat-icons/2.png","santaHatSigil","images/chat-icons/3.png","easterEggSigil","images/chat-icons/4.png","ghostSigil","images/chat-icons/5.png","treeSigil","images/chat-icons/27.png","bunnySigil","images/chat-icons/28.png","goldEventSigil","images/chat-icons/29.png","silverEventSigil","images/chat-icons/30.png","bronzeEventSigil","images/chat-icons/31.png","eventSigil","images/chat-icons/32.png","robotSigil","images/chat-icons/34.png","catSigil","images/goldEventSigil2.png","goldEventSigil2","images/silverEventSigil2.png","silverEventSigil2","images/bronzeEventSigil2.png","bronzeEventSigil2","images/eventSigil2.png","eventSigil2","images/lumpOfCoalSigil.png","lumpOfCoalSigil","images/snowmanSigil.png","snowmanSigil","images/carrotSigil.png","carrotSigil","images/candyCaneSigil.png","candyCaneSigil","images/chat-icons/53.png","spiderSigil","images/chat-icons/41.png","images/chat-icons/57.png","sapphireSigil","height","#div-chat-area","style","px","chat-send-button","Sending...","disabled","Send","focus","<span class=\'chat-tag-yell\'>Server Message</span>","<span class=\'chat-tag-dev\'>Dev</span>","<span class=\'chat-tag-mod\'>Moderator</span>","<span class=\'chat-tag-contributor\'>Contributor</span>","<img src=\'images/chat-icons/donor.png\' class=\'image-icon-20\' />","<span class=\'chat-area-username\' oncontextmenu=\'lookup(\"","\");return false;\' onclick=\'leftClicksUsernameInChat(\"","\")\'>","<span style=\'color:purple\'>","</span>","<span style=\'color:green\'>","<span style=\'color:grey\'>","<span style=\'color:#808000\'>","<span style=\'color:blue\'>","<span>","display","div-chat"];var isAutoScrolling=true;var lastPmUser=_$_26f8[0];var mutedPeople=[];function addToChatBox(_0x7130,_0x7064,_0x710E,_0x70A8,_0x7086){for(var _0x5BCE=0;_0x5BCE< mutedPeople[_$_26f8[1]];_0x5BCE++){if(_0x7130[_$_26f8[2]](mutedPeople[_0x5BCE])>  -1){return}};var _0x7020=document[_$_26f8[4]](_$_26f8[3]);if(_0x7086== 0){var _0x7042=getChatIcon(_0x7064);var _0x70EC=getChatTag(_0x710E)};_0x70A8= _0x70A8[_$_26f8[7]](_$_26f8[5],_$_26f8[6]);_0x70A8= _0x70A8[_$_26f8[7]](_$_26f8[8],_$_26f8[9]);_0x70A8= _0x70A8[_$_26f8[7]](_$_26f8[10],_$_26f8[11]);_0x70A8= _0x70A8[_$_26f8[7]](_$_26f8[12],_$_26f8[13]);var _0x70CA=getMessageElement(_0x710E,_0x70A8,_0x7130,_0x7086);$(_0x7020)[_$_26f8[14]](getTimeFetch());$(_0x7020)[_$_26f8[14]](_0x7042);$(_0x7020)[_$_26f8[14]](_0x70EC);$(_0x7020)[_$_26f8[14]](_$_26f8[15]+ removeChars(_0x70CA));$(_0x7020)[_$_26f8[14]](_$_26f8[16]);if(isAutoScrolling){$(_0x7020)[_$_26f8[19]]()[_$_26f8[18]]({scrollTop:55555555},_$_26f8[17])}}function removeChars(_0xB970){return _0xB970[_$_26f8[7]](/[^\x00-\x7F]/g,_$_26f8[0])}function openMuteListDialogue(){cBytes(_$_26f8[20]);openDialogue(_$_26f8[21],_$_26f8[22],_$_26f8[22])}function loadMuteList(_0x897E){if(_0x897E== _$_26f8[0]){document[_$_26f8[4]](_$_26f8[24])[_$_26f8[23]]= _$_26f8[25]}else {var _0xA496=_$_26f8[26];var _0x79F4=_0x897E[_$_26f8[28]](_$_26f8[27]);for(var _0x5BCE=0;_0x5BCE< _0x79F4[_$_26f8[1]];_0x5BCE++){var _0xA4FC=_0x79F4[_0x5BCE];_0x5BCE++;var _0xA4B8=_0x79F4[_0x5BCE];var _0xA4DA=_$_26f8[0];if(_0xA4B8== 1){_0xA4DA= _$_26f8[29]};_0xA496+= _$_26f8[30]+ _0xA4FC+ _$_26f8[31]+ _0xA4DA+ _$_26f8[32]+ _0xA4FC+ _$_26f8[33]+ _0xA4B8+ _$_26f8[34]};document[_$_26f8[4]](_$_26f8[24])[_$_26f8[23]]= _0xA496}}function unMute(_0xA4FC,_0xA4B8){cBytes(_$_26f8[35]+ _0xA4FC+ _$_26f8[27]+ _0xA4B8)}function muteUser(){var _0x6D9A=document[_$_26f8[4]](_$_26f8[37])[_$_26f8[36]];var _0xAB5C=document[_$_26f8[4]](_$_26f8[39])[_$_26f8[38]];if(_0xAB5C){_0xAB5C= 1}else {_0xAB5C= 0};console[_$_26f8[40]](_0x6D9A+ _$_26f8[15]+ _0xAB5C);cBytes(_$_26f8[41]+ _0x6D9A+ _$_26f8[27]+ _0xAB5C)}function isValidURL(_0x99F6){if(_0x99F6[_$_26f8[2]](_$_26f8[42])>= 0|| _0x99F6[_$_26f8[2]](_$_26f8[43])>= 0|| _0x99F6[_$_26f8[2]](_$_26f8[44])>= 0|| _0x99F6[_$_26f8[2]](_$_26f8[45])>= 0|| _0x99F6[_$_26f8[2]](_$_26f8[46])>= 0|| _0x99F6[_$_26f8[2]](_$_26f8[47])>= 0|| _0x99F6[_$_26f8[2]](_$_26f8[48])>= 0){if(_0x99F6[_$_26f8[2]](_$_26f8[49])>= 0|| _0x99F6[_$_26f8[2]](_$_26f8[50])>= 0|| _0x99F6[_$_26f8[2]](_$_26f8[51])>= 0|| _0x99F6[_$_26f8[2]](_$_26f8[52])>= 0|| _0x99F6[_$_26f8[2]](_$_26f8[53])>= 0|| _0x99F6[_$_26f8[2]](_$_26f8[54])>= 0|| _0x99F6[_$_26f8[2]](_$_26f8[55])>= 0|| _0x99F6[_$_26f8[2]](_$_26f8[27])>= 0|| _0x99F6[_$_26f8[2]](_$_26f8[56])>= 0|| _0x99F6[_$_26f8[2]](_$_26f8[57])>= 0|| _0x99F6[_$_26f8[2]](_$_26f8[58])>= 0|| _0x99F6[_$_26f8[2]](_$_26f8[59])>= 0|| _0x99F6[_$_26f8[2]](_$_26f8[60])>= 0|| _0x99F6[_$_26f8[2]](_$_26f8[61])>= 0|| _0x99F6[_$_26f8[2]](_$_26f8[62])>= 0){return false};return true}else {return false}}function convertStringToURL(_0x6828){if(!_0x6828[_$_26f8[63]](_$_26f8[42])){_0x6828= _$_26f8[64]+ _0x6828};var _0x82FC=_$_26f8[65]+ _0x6828+ _$_26f8[66]+ _0x6828+ _$_26f8[67];return _0x82FC}function getTimeFetch(){var _0x5EFE= new Date();if(_0x5EFE[_$_26f8[68]]()< 10){var _0x952E=_$_26f8[69]+ _0x5EFE[_$_26f8[68]]()}else {var _0x952E=_0x5EFE[_$_26f8[68]]()};if(_0x5EFE[_$_26f8[70]]()< 10){var _0x9550=_$_26f8[69]+ _0x5EFE[_$_26f8[70]]()}else {var _0x9550=_0x5EFE[_$_26f8[70]]()};var _0x950C=_$_26f8[71]+ _0x952E+ _$_26f8[72]+ _0x9550+ _$_26f8[73];return _0x950C}function changeIcon(_0x765E){cBytes(_$_26f8[74]+ _0x765E)}function openIconsDialogue(){openDialogue(_$_26f8[75],_$_26f8[22],_$_26f8[22])}function toggleAutoScroll(){if(isAutoScrolling){scrollText(_$_26f8[76],_$_26f8[77],_$_26f8[78]);isAutoScrolling= false}else {scrollText(_$_26f8[76],_$_26f8[79],_$_26f8[80]);isAutoScrolling= true}}function scrollText(_0xBB90,_0xBA80,_0x8164){var _0x79B0=_$_26f8[0];if(_0xBB90!= _$_26f8[76]){_0x79B0= _$_26f8[81]+ _0xBB90+ _$_26f8[82]};var _0xBB6E=$(_$_26f8[85]+ _0xBA80+ _$_26f8[86]+ _0x79B0+ _0x8164+ _$_26f8[87])[_$_26f8[84]](_$_26f8[83]);$(_0xBB6E)[_$_26f8[89]]({position:_$_26f8[88],left:mouseX- 50,top:mouseY- 50});$(_0xBB6E)[_$_26f8[18]]({top:_$_26f8[90]},function(){$(_0xBB6E)[_$_26f8[92]](1000,function(){$(this)[_$_26f8[91]]()})})}function getChatIcon(_0x7064){if(parseInt(_0x7064)> 0){if(_0x7064== 6){return _$_26f8[93]+ _0x7064+ _$_26f8[94]}else {return _$_26f8[93]+ _0x7064+ _$_26f8[95]}}else {return _$_26f8[0]}}function onKeyUpListenerChatInput(_0xABE4,_0x7FAA){if(_0xABE4[_$_26f8[96]]== 13){sendChat(_0x7FAA)};if(_0xABE4[_$_26f8[96]]== 9){if(lastPmUser!= _$_26f8[0]){document[_$_26f8[4]](_$_26f8[97])[_$_26f8[36]]= _$_26f8[98]+ lastPmUser+ _$_26f8[15]};if(_0xABE4[_$_26f8[99]]){_0xABE4[_$_26f8[99]]()};return false}}function sendChat(_0x7FAA){var _0x74A4=_0x7FAA[_$_26f8[36]];if(_0x74A4[_$_26f8[1]]> 0){if(!doChatCommand(_0x74A4)){cBytes(_$_26f8[100]+ _0x74A4)};document[_$_26f8[4]](_$_26f8[97])[_$_26f8[36]]= _$_26f8[0];disableChattingInput();setTimeout(enableChattingInput,100)}}var entityMap={'&':_$_26f8[101],'<':_$_26f8[102],'>':_$_26f8[103],'\"':_$_26f8[104],"\'":_$_26f8[105],'/':_$_26f8[106],'`':_$_26f8[107],'=':_$_26f8[108]};function escapeHtml(_0x8C6A){return String(_0x8C6A)[_$_26f8[7]](/[&<>"'`=\/]/g,function(_0x5C56){return entityMap[_0x5C56]})}function showMuteAttemptDialogue(_0xC256){document[_$_26f8[4]](_$_26f8[109])[_$_26f8[23]]= _$_26f8[110]+ _0xC256+ _$_26f8[111];openDialogue(_$_26f8[112],_$_26f8[22],_$_26f8[22])}function refreshMuteList(){cBytes(_$_26f8[113])}function doChatCommand(_0x74A4){if(_0x74A4[_$_26f8[63]](_$_26f8[114])){_0x74A4= _0x74A4[_$_26f8[115]](1);if(_0x74A4[_$_26f8[63]](_$_26f8[116])){var _0x8918=_0x74A4[_$_26f8[28]](_$_26f8[15]);var _0x884C=_$_26f8[0];for(var _0x5BCE=2;_0x5BCE< _0x8918[_$_26f8[1]];_0x5BCE++){_0x884C+= _0x8918[_0x5BCE]+ _$_26f8[15]};var _0x88D4=_0x8918[1][_$_26f8[28]](_$_26f8[118])[_$_26f8[117]](_$_26f8[15]);if(_0x8918[1]== _$_26f8[119]){var _0x88D4=_0x8918[1]};cBytes(_$_26f8[120]+ _0x88D4+ _$_26f8[27]+ _0x884C);lastPmUser= _0x8918[1];addToChatBox(username,0,0,_$_26f8[121]+ htmlDecode(_0x88D4)+ _$_26f8[122]+ htmlDecode(_0x884C),1)}else {if(_0x74A4[_$_26f8[63]](_$_26f8[123])){document[_$_26f8[4]](_$_26f8[3])[_$_26f8[23]]= _$_26f8[0]}else {if(_0x74A4[_$_26f8[63]](_$_26f8[124])){if(chatTag== 3|| chatTag== 4){var _0x88F6=_0x74A4[_$_26f8[115]](6);document[_$_26f8[4]](_$_26f8[125])[_$_26f8[36]]= _0x88F6;openDialogue(_$_26f8[126],_$_26f8[22],_$_26f8[22])}}else {if(_0x74A4[_$_26f8[63]](_$_26f8[127])){document[_$_26f8[4]](_$_26f8[37])[_$_26f8[36]]= _0x74A4[_$_26f8[115]](5);openDialogue(_$_26f8[128],_$_26f8[22],_$_26f8[22])}else {if(_0x74A4[_$_26f8[63]](_$_26f8[129])){if(chatTag== 3|| chatTag== 4){openTab(_$_26f8[130]);refreshMuteList()}}else {if(_0x74A4[_$_26f8[63]](_$_26f8[131])){var _0x88B2=_0x74A4[_$_26f8[115]](6);cBytes(_$_26f8[132]+ _0x88B2)}else {if(_0x74A4[_$_26f8[63]](_$_26f8[133])){var _0x893A=_0x74A4[_$_26f8[115]](5);cBytes(_$_26f8[134]+ _0x893A)}else {if(_0x74A4[_$_26f8[63]](_$_26f8[135])){var _0x8890=_0x74A4[_$_26f8[115]](7);cBytes(_$_26f8[136]+ _0x8890)}else {if(_0x74A4[_$_26f8[63]](_$_26f8[137])){var _0x886E=_0x74A4[_$_26f8[115]](5);cBytes(_$_26f8[138]+ _0x886E)}}}}}}}}};return true}else {return false}}function clicksFullEasterBasket(){cBytes(_$_26f8[139])}function removeMute(_0xA474){if(chatTag== 3|| chatTag== 4){confirmDialogue(400,_$_26f8[140],_$_26f8[141],_$_26f8[142],_$_26f8[143]+ _0xA474)}}function loadModMuteList(_0x8AB0){var _0x7284=document[_$_26f8[4]](_$_26f8[144]);var _0x743E=_$_26f8[145];var _0xA3EC=_0x8AB0[_$_26f8[28]](_$_26f8[27]);for(var _0x5BCE=0;_0x5BCE< _0xA3EC[_$_26f8[1]];_0x5BCE+= 0){var _0xA474=_0xA3EC[_0x5BCE+ 1];_0x743E+= _$_26f8[146]+ _0xA474+ _$_26f8[147];_0x743E+= _$_26f8[148];_0x743E+= _0xA3EC[_0x5BCE];_0x743E+= _$_26f8[149];_0x5BCE++;_0x5BCE++;_0x743E+= _$_26f8[148];_0x743E+= _0xA3EC[_0x5BCE];_0x743E+= _$_26f8[149];_0x5BCE++;_0x743E+= _$_26f8[148];_0x743E+= _0xA3EC[_0x5BCE];_0x743E+= _$_26f8[149];_0x5BCE++;var _0xA40E=_0xA3EC[_0x5BCE];_0x743E+= _$_26f8[148];_0x743E+= formatUnixToDate(_0xA40E);_0x743E+= _$_26f8[149];_0x5BCE++;var _0xA430=_0xA3EC[_0x5BCE];_0x743E+= _$_26f8[148];_0x743E+= formatTimeGetHours((parseInt(_0xA430)- 1)/ 1000);_0x743E+= _$_26f8[149];_0x743E+= _$_26f8[148];_0x743E+= formatTimeGetHours(((((parseInt(_0xA40E)+ parseInt(_0xA430)))- parseInt(currentTimeMillis))- 1)/ 1000);_0x743E+= _$_26f8[149];_0x5BCE++;_0x743E+= _$_26f8[148];_0x743E+= _0xA3EC[_0x5BCE];_0x743E+= _$_26f8[149];_0x5BCE++;var _0xA452=_$_26f8[150];if(_0xA3EC[_0x5BCE]== _$_26f8[151]){_0xA452= _$_26f8[152]};_0x743E+= _$_26f8[148];_0x743E+= _0xA452;_0x743E+= _$_26f8[149];_0x5BCE++};console[_$_26f8[40]](_0x8AB0);_0x7284[_$_26f8[23]]= _0x743E}function sMute(){var _0x6D9A=document[_$_26f8[4]](_$_26f8[125]);var _0x8CD0=document[_$_26f8[4]](_$_26f8[153]);var _0xC2BC=document[_$_26f8[4]](_$_26f8[154]);var _0xA452=0;if(document[_$_26f8[4]](_$_26f8[155])[_$_26f8[38]]){_0xA452= 1};cBytes(_$_26f8[156]+ _0x6D9A[_$_26f8[36]]+ _$_26f8[27]+ _0x8CD0[_$_26f8[36]]+ _$_26f8[27]+ _0xC2BC[_$_26f8[36]]+ _$_26f8[27]+ _0xA452)}function getSigilPicture(_0x9462){switch(_0x9462){case _$_26f8[158]:return _$_26f8[157];case _$_26f8[160]:return _$_26f8[159];case _$_26f8[162]:return _$_26f8[161];case _$_26f8[164]:return _$_26f8[163];case _$_26f8[166]:return _$_26f8[165];case _$_26f8[168]:return _$_26f8[167];case _$_26f8[170]:return _$_26f8[169];case _$_26f8[172]:return _$_26f8[171];case _$_26f8[174]:return _$_26f8[173];case _$_26f8[176]:return _$_26f8[175];case _$_26f8[178]:return _$_26f8[177];case _$_26f8[180]:return _$_26f8[179];case _$_26f8[182]:return _$_26f8[181];case _$_26f8[184]:return _$_26f8[183];case _$_26f8[186]:return _$_26f8[185];case _$_26f8[188]:return _$_26f8[187];case _$_26f8[190]:return _$_26f8[189];case _$_26f8[192]:return _$_26f8[191];case _$_26f8[194]:return _$_26f8[193];case _$_26f8[196]:return _$_26f8[195];case _$_26f8[198]:return _$_26f8[197];case _$_26f8[196]:return _$_26f8[199];case _$_26f8[201]:return _$_26f8[200];default:return _$_26f8[0]}}function enlargeChat(_0x8C04){var _0x8BE2=$(_$_26f8[203])[_$_26f8[202]]();if(_0x8C04){if(_0x8BE2< 1000){document[_$_26f8[4]](_$_26f8[3])[_$_26f8[204]][_$_26f8[202]]= (_0x8BE2+ 100)+ _$_26f8[205]}}else {if(_0x8BE2> 50){document[_$_26f8[4]](_$_26f8[3])[_$_26f8[204]][_$_26f8[202]]= (_0x8BE2- 100)+ _$_26f8[205]}}}function disableChattingInput(){document[_$_26f8[4]](_$_26f8[206])[_$_26f8[36]]= _$_26f8[207];document[_$_26f8[4]](_$_26f8[97])[_$_26f8[208]]= true;document[_$_26f8[4]](_$_26f8[206])[_$_26f8[208]]= true}function enableChattingInput(){document[_$_26f8[4]](_$_26f8[206])[_$_26f8[36]]= _$_26f8[209];document[_$_26f8[4]](_$_26f8[97])[_$_26f8[208]]= false;document[_$_26f8[4]](_$_26f8[206])[_$_26f8[208]]= false;document[_$_26f8[4]](_$_26f8[97])[_$_26f8[210]]()}function getChatTag(_0x710E){if(parseInt(_0x710E)== 5){return _$_26f8[211]}else {if(parseInt(_0x710E)== 4){return _$_26f8[212]}else {if(parseInt(_0x710E)== 3){return _$_26f8[213]}else {if(parseInt(_0x710E)== 2){return _$_26f8[214]}else {if(parseInt(_0x710E)== 1){return _$_26f8[215]}else {return _$_26f8[0]}}}}}}function getMessageElement(_0x710E,_0x70A8,_0x7130,_0x7086){var _0x9242=_$_26f8[216]+ _0x7130+ _$_26f8[217]+ _0x7130+ _$_26f8[218];if(profileChatLinks== 1){var _0x9220=_0x70A8[_$_26f8[28]](_$_26f8[15]);_0x70A8= _$_26f8[0];for(var _0x5BCE=0;_0x5BCE< _0x9220[_$_26f8[1]];_0x5BCE++){if(isValidURL(_0x9220[_0x5BCE])){_0x70A8+= convertStringToURL(_0x9220[_0x5BCE])+ _$_26f8[15]}else {_0x70A8+= _0x9220[_0x5BCE]+ _$_26f8[15]}}};if(_0x7086== 1){return _$_26f8[219]+ _0x70A8+ _$_26f8[220]}else {if(_0x710E== 2){return _$_26f8[221]+ _0x9242+ _0x7130+ _$_26f8[220]+ _0x70A8+ _$_26f8[220]}else {if(_0x710E== 3){return _$_26f8[222]+ _0x9242+ _0x7130+ _$_26f8[220]+ _0x70A8+ _$_26f8[220]}else {if(_0x710E== 4){return _$_26f8[223]+ _0x9242+ _0x7130+ _$_26f8[220]+ _0x70A8+ _$_26f8[220]}else {if(_0x710E== 5){return _$_26f8[224]+ _0x70A8+ _$_26f8[220]}else {return _$_26f8[225]+ _0x9242+ _0x7130+ _$_26f8[220]+ _0x70A8+ _$_26f8[220]}}}}}}function leftClicksUsernameInChat(_0x9A18){document[_$_26f8[4]](_$_26f8[97])[_$_26f8[36]]= _$_26f8[98]+ _0x9A18+ _$_26f8[15];document[_$_26f8[4]](_$_26f8[97])[_$_26f8[210]]()}function refreshChatBoxOnOff(){if(profileChatBoxOff== 0&& document[_$_26f8[4]](_$_26f8[227])[_$_26f8[204]][_$_26f8[226]]== _$_26f8[76]){document[_$_26f8[4]](_$_26f8[227])[_$_26f8[204]][_$_26f8[226]]= _$_26f8[0]};if(profileChatBoxOff== 1&& document[_$_26f8[4]](_$_26f8[227])[_$_26f8[204]][_$_26f8[226]]!= _$_26f8[76]){document[_$_26f8[4]](_$_26f8[227])[_$_26f8[204]][_$_26f8[226]]= _$_26f8[76]}}