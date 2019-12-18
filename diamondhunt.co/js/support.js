var _$_6e0d=["src","bug-submission-has-donated-check","getElementById","images/icons/check.png","bug-submission-has-terms-check","display","style","div-area-bug-submit-terms","none","div-area-bug","","SUPPORT_REFRESH","dialogue-support","default","<h2>Terms & Conditions:</h2>","By using the bug report function, you must follow these rules:","<ul>","<li>You may not post game content suggestions, post that on reddit for everyone to see.</li>","<li>Before submitting a bug, you must verify the <b>bug list</b> to see if it has already been submitted.</li>","<li>Do not submit a bug if it is already in the bug list.</li>","<li>You must set appropriate priorites. (Low, Medium, High)</li>","<li>No trolling and spamming.</li>","<li>No asking for unmutes, contact me on reddit if you feel your mute was unjust.</li>","</ul>","<h3>Bug Priorities:</h3>","<li><b>Low</b> - consists of bugs that are not game breaking. (Typos, interface formats, display errors, minor game content unplayable, etc.)</li>","<li><b>Medium</b> - consists of bugs that make content unplayable. (Rocket stuck, combat area not accesible, can\'t plant a seed, etc.)</li>","<li><b>High*</b> - consists of bugs that could damage the economy or can crash the server and is reproducable. (duping items, chest not consumed on open, free SD, security issues, etc)</li>","<br />*High priority bugs will not appear in the bug list.","I Accept","I Decline","BUG_TERMS","You must have donated to use this function.  This is to reduce spam from players trolling.","Close","value","length","innerHTML","support-maxchars","textarea-support","priority-support","You may only have 1000 characters in your description.","~","SUBMIT_BUG=","customer-support-messages-table","<tr style=\'background-color:silver;\'><th width=\'5%\'>Id</th><th>Description</th><th width=\'10%\'>Submitter</th><th width=\'10%\'>Date</th></tr>","split","#b3ffb3","#ffff99","#ffb3b3","smitty","<br /><br /><input id=\'bug-id-","\' onclick=\'closeBug(this);\' type=\'button\' value=\'Go\' />","<tr style=\'background-color:","\'><td>","</td><td style=\'word-wrap:break-word;text-align:left;\'>","</td><td>","</td></tr>","CLOSE_BUG=","-","id"];function processSupportTab(){if(donorHasDonated== 1|| getGlobalLevel()>= 600){document[_$_6e0d[2]](_$_6e0d[1])[_$_6e0d[0]]= _$_6e0d[3]};if(bugTerms== 1){document[_$_6e0d[2]](_$_6e0d[4])[_$_6e0d[0]]= _$_6e0d[3]};if(donorHasDonated== 1&& bugTerms== 1){document[_$_6e0d[2]](_$_6e0d[7])[_$_6e0d[6]][_$_6e0d[5]]= _$_6e0d[8];document[_$_6e0d[2]](_$_6e0d[9])[_$_6e0d[6]][_$_6e0d[5]]= _$_6e0d[10]};cBytes(_$_6e0d[11])}function openBugDialogue(){openDialogue(_$_6e0d[12],1000,_$_6e0d[13])}function openBugTermsAndConditionsDialogue(){if(donorHasDonated){var _0x9B06=_$_6e0d[14];_0x9B06+= _$_6e0d[15];_0x9B06+= _$_6e0d[16];_0x9B06+= _$_6e0d[17];_0x9B06+= _$_6e0d[18];_0x9B06+= _$_6e0d[19];_0x9B06+= _$_6e0d[20];_0x9B06+= _$_6e0d[21];_0x9B06+= _$_6e0d[22];_0x9B06+= _$_6e0d[23];_0x9B06+= _$_6e0d[24];_0x9B06+= _$_6e0d[16];_0x9B06+= _$_6e0d[25];_0x9B06+= _$_6e0d[26];_0x9B06+= _$_6e0d[27];_0x9B06+= _$_6e0d[16];_0x9B06+= _$_6e0d[28];confirmDialogue(600,_0x9B06,_$_6e0d[29],_$_6e0d[30],_$_6e0d[31])}else {confirmDialogue(600,_$_6e0d[32],_$_6e0d[33],_$_6e0d[10],_$_6e0d[10])}}function supportTextareaKeyup(_0xC432){var _0xC410=_0xC432[_$_6e0d[34]];var _0x5EBA=1000- parseInt(_0xC410[_$_6e0d[35]]);document[_$_6e0d[2]](_$_6e0d[37])[_$_6e0d[36]]= parseInt(_0x5EBA)+ _$_6e0d[10]}function submitBug(){var _0xC388=document[_$_6e0d[2]](_$_6e0d[38]);var _0xC366=document[_$_6e0d[2]](_$_6e0d[39]);if(_0xC388[_$_6e0d[34]][_$_6e0d[35]]> 1000|| _0xC388[_$_6e0d[34]][_$_6e0d[35]]== 0){errorDialogue(_$_6e0d[40]);return};var _0xC344=_0xC388[_$_6e0d[34]]+ _$_6e0d[41]+ _0xC366[_$_6e0d[34]];;;_0xC388[_$_6e0d[34]]= _$_6e0d[10];cBytes(_$_6e0d[42]+ _0xC344)}function loadBugList(_0x9AE4){var _0x7284=document[_$_6e0d[2]](_$_6e0d[43]);var _0x9B06=_$_6e0d[44];var _0x996E=_0x9AE4[_$_6e0d[45]](_$_6e0d[41]);for(var _0x5BCE=0;_0x5BCE< _0x996E[_$_6e0d[35]];_0x5BCE++){var _0x9AA0=_0x996E[_0x5BCE];_0x5BCE++;var _0x9AC2=_0x996E[_0x5BCE];_0x5BCE++;var _0x6F32=_0x996E[_0x5BCE];_0x5BCE++;var _0x9B28=_0x996E[_0x5BCE];_0x5BCE++;var _0x5D44=_0x996E[_0x5BCE];var _0x9A7E=_$_6e0d[46];if(_0x9B28== 2){_0x9A7E= _$_6e0d[47]};if(_0x9B28== 3){_0x9A7E= _$_6e0d[48]};var _0x9B4A=_$_6e0d[10];if(username== _$_6e0d[49]){_0x9B4A+= _$_6e0d[50]+ _0x9AA0+ _$_6e0d[51]};_0x9B06+= _$_6e0d[52]+ _0x9A7E+ _$_6e0d[53]+ _0x9AA0+ _$_6e0d[54]+ _0x6F32+ _$_6e0d[55]+ _0x9AC2+ _$_6e0d[55]+ formatUnixToDate(_0x5D44)+ _0x9B4A+ _$_6e0d[56]};_0x7284[_$_6e0d[36]]= _0x9B06}function closeBug(_0x7F44){cBytes(_$_6e0d[57]+ _0x7F44[_$_6e0d[59]][_$_6e0d[45]](_$_6e0d[58])[2])}