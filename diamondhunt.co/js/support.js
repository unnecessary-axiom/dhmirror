var _$_e32f=["src","bug-submission-has-donated-check","getElementById","images/icons/check.png","bug-submission-has-terms-check","display","style","div-area-bug-submit-terms","none","div-area-bug","","SUPPORT_REFRESH","dialogue-support","default","<h2>Terms & Conditions:</h2>","By using the bug report function, you must follow these rules:","<ul>","<li>You may not post game content suggestions, post that on reddit for everyone to see.</li>","<li>Before submitting a bug, you must verify the <b>bug list</b> to see if it has already been submitted.</li>","<li>Do not submit a bug if it is already in the bug list.</li>","<li>You must set appropriate priorites. (Low, Medium, High)</li>","<li>No trolling and spamming.</li>","<li>No asking for unmutes, contact me on reddit if you feel your mute was unjust.</li>","</ul>","<h3>Bug Priorities:</h3>","<li><b>Low</b> - consists of bugs that are not game breaking. (Typos, interface formats, display errors, minor game content unplayable, etc.)</li>","<li><b>Medium</b> - consists of bugs that make content unplayable. (Rocket stuck, combat area not accesible, can\'t plant a seed, etc.)</li>","<li><b>High*</b> - consists of bugs that could damage the economy or can crash the server and is reproducable. (duping items, chest not consumed on open, free SD, security issues, etc)</li>","<br />*High priority bugs will not appear in the bug list.","I Accept","I Decline","BUG_TERMS","You must have donated to use this function.  This is to reduce spam from players trolling.","Close","value","length","innerHTML","support-maxchars","textarea-support","priority-support","You may only have 1000 characters in your description.","~","SUBMIT_BUG=","customer-support-messages-table","<tr style=\'background-color:silver;\'><th width=\'5%\'>Id</th><th>Description</th><th width=\'10%\'>Submitter</th><th width=\'10%\'>Date</th></tr>","split","#b3ffb3","#ffff99","#ffb3b3","smitty","<br /><br /><input id=\'bug-id-","\' onclick=\'closeBug(this);\' type=\'button\' value=\'Go\' />","<tr style=\'background-color:","\'><td>","</td><td style=\'word-wrap:break-word;text-align:left;\'>","</td><td>","</td></tr>","CLOSE_BUG=","-","id"];function processSupportTab(){if(donorHasDonated== 1|| getGlobalLevel()>= 600){document[_$_e32f[2]](_$_e32f[1])[_$_e32f[0]]= _$_e32f[3]};if(bugTerms== 1){document[_$_e32f[2]](_$_e32f[4])[_$_e32f[0]]= _$_e32f[3]};if(donorHasDonated== 1&& bugTerms== 1){document[_$_e32f[2]](_$_e32f[7])[_$_e32f[6]][_$_e32f[5]]= _$_e32f[8];document[_$_e32f[2]](_$_e32f[9])[_$_e32f[6]][_$_e32f[5]]= _$_e32f[10]};cBytes(_$_e32f[11])}function openBugDialogue(){openDialogue(_$_e32f[12],1000,_$_e32f[13])}function openBugTermsAndConditionsDialogue(){if(donorHasDonated){var _0x1020D=_$_e32f[14];_0x1020D+= _$_e32f[15];_0x1020D+= _$_e32f[16];_0x1020D+= _$_e32f[17];_0x1020D+= _$_e32f[18];_0x1020D+= _$_e32f[19];_0x1020D+= _$_e32f[20];_0x1020D+= _$_e32f[21];_0x1020D+= _$_e32f[22];_0x1020D+= _$_e32f[23];_0x1020D+= _$_e32f[24];_0x1020D+= _$_e32f[16];_0x1020D+= _$_e32f[25];_0x1020D+= _$_e32f[26];_0x1020D+= _$_e32f[27];_0x1020D+= _$_e32f[16];_0x1020D+= _$_e32f[28];confirmDialogue(600,_0x1020D,_$_e32f[29],_$_e32f[30],_$_e32f[31])}else {confirmDialogue(600,_$_e32f[32],_$_e32f[33],_$_e32f[10],_$_e32f[10])}}function supportTextareaKeyup(_0x13F03){var _0x13ED0=_0x13F03[_$_e32f[34]];var _0xA7CE=1000- parseInt(_0x13ED0[_$_e32f[35]]);document[_$_e32f[2]](_$_e32f[37])[_$_e32f[36]]= parseInt(_0xA7CE)+ _$_e32f[10]}function submitBug(){var _0x13E04=document[_$_e32f[2]](_$_e32f[38]);var _0x13DD1=document[_$_e32f[2]](_$_e32f[39]);if(_0x13E04[_$_e32f[34]][_$_e32f[35]]> 1000|| _0x13E04[_$_e32f[34]][_$_e32f[35]]== 0){errorDialogue(_$_e32f[40]);return};var _0x13D9E=_0x13E04[_$_e32f[34]]+ _$_e32f[41]+ _0x13DD1[_$_e32f[34]];;;_0x13E04[_$_e32f[34]]= _$_e32f[10];cBytes(_$_e32f[42]+ _0x13D9E)}function loadBugList(_0x101DA){var _0xC57D=document[_$_e32f[2]](_$_e32f[43]);var _0x1020D=_$_e32f[44];var _0xFFA9=_0x101DA[_$_e32f[45]](_$_e32f[41]);for(var _0xA36C=0;_0xA36C< _0xFFA9[_$_e32f[35]];_0xA36C++){var _0x10174=_0xFFA9[_0xA36C];_0xA36C++;var _0x101A7=_0xFFA9[_0xA36C];_0xA36C++;var _0xC082=_0xFFA9[_0xA36C];_0xA36C++;var _0x10240=_0xFFA9[_0xA36C];_0xA36C++;var _0xA59D=_0xFFA9[_0xA36C];var _0x10141=_$_e32f[46];if(_0x10240== 2){_0x10141= _$_e32f[47]};if(_0x10240== 3){_0x10141= _$_e32f[48]};var _0x10273=_$_e32f[10];if(username== _$_e32f[49]){_0x10273+= _$_e32f[50]+ _0x10174+ _$_e32f[51]};_0x1020D+= _$_e32f[52]+ _0x10141+ _$_e32f[53]+ _0x10174+ _$_e32f[54]+ _0xC082+ _$_e32f[55]+ _0x101A7+ _$_e32f[55]+ formatUnixToDate(_0xA59D)+ _0x10273+ _$_e32f[56]};_0xC57D[_$_e32f[36]]= _0x1020D}function closeBug(_0xD86A){cBytes(_$_e32f[57]+ _0xD86A[_$_e32f[59]][_$_e32f[45]](_$_e32f[58])[2])}