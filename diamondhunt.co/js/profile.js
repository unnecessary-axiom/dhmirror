var _$_d1a6=["profile-toggleTable","getElementById","tr","getElementsByTagName","length","img","id","src","images/icons/check.png","images/icons/x.png","display","style","profile-convert-hc-btn","","none","substr","guest","change-username-button","<b style=\'color:red;\'>Warning:<br /><br /></b>This button converts your hardcore account into a <b>regular one</b>.  If you do convert, you may not convert back into a hardcore account!","Convert me!","Cancel","CONVERT_ACC","<b style=\'color:red;\'>Warning:<br /><br /></b>This button converts your hardcore account into a <b>team hardcore account</b>.  If you do convert, <span style=\'color:red\'>you will be stuck in team mode forever and will be unlisted from the hiscores permanently!</span><br /><br /><u>Team Mode Account:</u><br /><br /><ul><li>Allows you to create or join a team.</li><li>You may only team up with players with this type of account</li><li>You may trade directly with your team members</li><li>ALT trading is permitted</li><li>No access to the player market</li><li>You lose your hardcore chat icon</li></ul>","CONVERT_ACC_TEAM","warningLabel-","value","warningLabel-value","dialogue-warningLabel","default","change-current-password","change-new-password","change-new-password2","CHANGE_PASSWORD=","~","You already have an email set.","Close","dialogue-setEmail","Are you sure you wish to set the email address to: <b>","</b>","Confirm Email","SET_EMAIL=","dialogue-requestPin","Would you like to remove your pin?  This takes 7 days for it to take effect.","Request Removal","REMOVE_PIN","Your pin was requested to be removed in ",".<br /><br />Would you like to keep this pin","Keep Pin","LEAVE_PIN","dialogue-confirmRequestPin","pin-textbox-stars","innerHTML","dialogue-enterAccountPin-title","Create PIN","accountPinMode","settingNewPin","disabled","submit-pin-button","dialogue-enterAccountPin","confirmNewPin","*","Confirm PIN","close","dialog",".ui-dialog-content","closest","Your pins did not match.","SET_PIN=","enterPin","ENTER_PIN=","dialogue-request-removal","block","Enter Account PIN"];var pinArray=[-1,-1,-1,-1];var confirmPinArray=[-1,-1,-1,-1];function processProfile(){var _0xB398=document[_$_d1a6[1]](_$_d1a6[0]);var _0xB3BA=_0xB398[_$_d1a6[3]](_$_d1a6[2]);for(var _0x5BCE=1;_0x5BCE< _0xB3BA[_$_d1a6[4]];_0x5BCE++){var _0x8B16=_0xB3BA[_0x5BCE][_$_d1a6[3]](_$_d1a6[5])[0];if(_0x8B16== null){continue};var _0xB376=_0x8B16[_$_d1a6[6]];if(window[_0xB376]== 1){_0x8B16[_$_d1a6[7]]= _$_d1a6[8]}else {_0x8B16[_$_d1a6[7]]= _$_d1a6[9]}};if(isHardcore== 1&& teams== 0){document[_$_d1a6[1]](_$_d1a6[12])[_$_d1a6[11]][_$_d1a6[10]]= _$_d1a6[13]};if(teams== 1){document[_$_d1a6[1]](_$_d1a6[12])[_$_d1a6[11]][_$_d1a6[10]]= _$_d1a6[14]};if(username[_$_d1a6[15]](0,5)== _$_d1a6[16]){document[_$_d1a6[1]](_$_d1a6[17])[_$_d1a6[11]][_$_d1a6[10]]= _$_d1a6[13]}else {document[_$_d1a6[1]](_$_d1a6[17])[_$_d1a6[11]][_$_d1a6[10]]= _$_d1a6[14]}}function convertAccountDialogue(){confirmDialogue(400,_$_d1a6[18],_$_d1a6[19],_$_d1a6[20],_$_d1a6[21])}function convertAccountTeamDialogue(){confirmDialogue(400,_$_d1a6[22],_$_d1a6[19],_$_d1a6[20],_$_d1a6[23])}function closeWarningLabel(_0x7F66){document[_$_d1a6[1]](_$_d1a6[24]+ _0x7F66)[_$_d1a6[11]][_$_d1a6[10]]= _$_d1a6[14];document[_$_d1a6[1]](_$_d1a6[26])[_$_d1a6[25]]= _0x7F66;openDialogue(_$_d1a6[27],_$_d1a6[28],_$_d1a6[28])}function changePassword(){var _0x774C=document[_$_d1a6[1]](_$_d1a6[29])[_$_d1a6[25]];var _0x776E=document[_$_d1a6[1]](_$_d1a6[30])[_$_d1a6[25]];var _0x7790=document[_$_d1a6[1]](_$_d1a6[31])[_$_d1a6[25]];document[_$_d1a6[1]](_$_d1a6[29])[_$_d1a6[25]]= _$_d1a6[13];document[_$_d1a6[1]](_$_d1a6[30])[_$_d1a6[25]]= _$_d1a6[13];document[_$_d1a6[1]](_$_d1a6[31])[_$_d1a6[25]]= _$_d1a6[13];cBytes(_$_d1a6[32]+ _0x774C+ _$_d1a6[33]+ _0x776E+ _$_d1a6[33]+ _0x7790)}function openSetEmailDialogue(){if(emailOn== 1){confirmDialogue(400,_$_d1a6[34],_$_d1a6[35],_$_d1a6[13],_$_d1a6[13])}else {openDialogue(_$_d1a6[36],_$_d1a6[28],_$_d1a6[28])}}function confirmSetEmail(_0x8230){confirmDialogue(400,_$_d1a6[37]+ _0x8230+ _$_d1a6[38],_$_d1a6[39],_$_d1a6[20],_$_d1a6[40]+ _0x8230)}function accountPINSettings(){resetPinArraysSet();if(pinOn== 0){openDialogue(_$_d1a6[41],_$_d1a6[28],_$_d1a6[28])}else {if(pinOn== 1&& pinRequestOff== 0){confirmDialogue(400,_$_d1a6[42],_$_d1a6[43],_$_d1a6[20],_$_d1a6[44])}else {if(pinOn== 1&& pinRequestOff> 0){confirmDialogue(400,_$_d1a6[45]+ formatTime(pinRequestOff)+ _$_d1a6[46],_$_d1a6[47],_$_d1a6[20],_$_d1a6[48])}}}}function confirmToSetPin(){openDialogue(_$_d1a6[49],_$_d1a6[28],_$_d1a6[28])}function setAccountPinDialogue(){if(pinOn== 0){document[_$_d1a6[1]](_$_d1a6[50])[_$_d1a6[25]]= _$_d1a6[13];document[_$_d1a6[1]](_$_d1a6[52])[_$_d1a6[51]]= _$_d1a6[53];document[_$_d1a6[1]](_$_d1a6[54])[_$_d1a6[25]]= _$_d1a6[55];document[_$_d1a6[1]](_$_d1a6[57])[_$_d1a6[56]]= true;openDialogue(_$_d1a6[58],_$_d1a6[28],_$_d1a6[28])}}function enterPinNumber(_0x8C48){var _0x8C26=pinArray;if(document[_$_d1a6[1]](_$_d1a6[54])[_$_d1a6[25]]== _$_d1a6[59]){_0x8C26= confirmPinArray};var _0x68B0=-1;for(var _0x5BCE=0;_0x5BCE< _0x8C26[_$_d1a6[4]];_0x5BCE++){if(_0x8C26[_0x5BCE]==  -1){_0x68B0= _0x5BCE;break}};if(_0x68B0!=  -1){document[_$_d1a6[1]](_$_d1a6[50])[_$_d1a6[25]]= document[_$_d1a6[1]](_$_d1a6[50])[_$_d1a6[25]]+ _$_d1a6[60];_0x8C26[_0x68B0]= _0x8C48;if(_0x68B0== 3){document[_$_d1a6[1]](_$_d1a6[57])[_$_d1a6[56]]= false}}}function submitPIN(_0xC3AA){var _0xC3CC=document[_$_d1a6[1]](_$_d1a6[54])[_$_d1a6[25]];if(_0xC3CC== _$_d1a6[55]){document[_$_d1a6[1]](_$_d1a6[54])[_$_d1a6[25]]= _$_d1a6[59];document[_$_d1a6[1]](_$_d1a6[50])[_$_d1a6[25]]= _$_d1a6[13];document[_$_d1a6[1]](_$_d1a6[52])[_$_d1a6[51]]= _$_d1a6[61];document[_$_d1a6[1]](_$_d1a6[57])[_$_d1a6[56]]= true;openDialogue(_$_d1a6[58],_$_d1a6[28],_$_d1a6[28])};if(_0xC3CC== _$_d1a6[59]){$(_0xC3AA)[_$_d1a6[65]](_$_d1a6[64])[_$_d1a6[63]](_$_d1a6[62]);for(var _0x5BCE=0;_0x5BCE< pinArray[_$_d1a6[4]];_0x5BCE++){if(pinArray[_0x5BCE]!= confirmPinArray[_0x5BCE]){confirmDialogue(400,_$_d1a6[66],_$_d1a6[35],_$_d1a6[13],_$_d1a6[13]);resetPinArraysSet();return}};var _0xC3EE=_$_d1a6[67];for(var _0x5BCE=0;_0x5BCE< pinArray[_$_d1a6[4]];_0x5BCE++){_0xC3EE+= pinArray[_0x5BCE]};cBytes(_0xC3EE)};if(_0xC3CC== _$_d1a6[68]){$(_0xC3AA)[_$_d1a6[65]](_$_d1a6[64])[_$_d1a6[63]](_$_d1a6[62]);var _0xC3EE=_$_d1a6[69];for(var _0x5BCE=0;_0x5BCE< pinArray[_$_d1a6[4]];_0x5BCE++){_0xC3EE+= pinArray[_0x5BCE]};cBytes(_0xC3EE)}}function promptAccountPin(){resetPinArraysSet();if(pinRequestOff> 0){document[_$_d1a6[1]](_$_d1a6[70])[_$_d1a6[11]][_$_d1a6[10]]= _$_d1a6[71]};document[_$_d1a6[1]](_$_d1a6[54])[_$_d1a6[25]]= _$_d1a6[68];document[_$_d1a6[1]](_$_d1a6[50])[_$_d1a6[25]]= _$_d1a6[13];document[_$_d1a6[1]](_$_d1a6[52])[_$_d1a6[51]]= _$_d1a6[72];document[_$_d1a6[1]](_$_d1a6[57])[_$_d1a6[56]]= true;openDialogue(_$_d1a6[58],_$_d1a6[28],_$_d1a6[28])}function resetPinArraysSet(){pinArray[0]=  -1;pinArray[1]=  -1;pinArray[2]=  -1;pinArray[3]=  -1;confirmPinArray[0]=  -1;confirmPinArray[1]=  -1;confirmPinArray[2]=  -1;confirmPinArray[3]=  -1}function getNumberOfPinArraySet(){var _0x9286=0;for(var _0x5BCE=0;_0x5BCE< pinArray[_$_d1a6[4]];_0x5BCE++){if(pinArray[_0x5BCE]!=  -1){_0x9286++}};return _0x9286}