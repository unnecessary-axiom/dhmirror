var _$_f749=["src","default-item-img-tag-","boundEmptyAxe","getElementById","images/emptyAxeBlue.png","boundSapphireAxe","images/sapphireAxeBlue.png","boundEmeraldAxe","images/emeraldAxeBlue.png","boundRubyAxe","images/rubyAxeBlue.png","boundDiamondAxe","images/diamondAxeBlue.png","images/emptyAxeRed.png","images/sapphireAxeRed.png","images/emeraldAxeRed.png","images/rubyAxeRed.png","images/diamondAxeRed.png","images/emptyAxeBlueRed.png","images/sapphireAxeBlueRed.png","images/emeraldAxeBlueRed.png","images/rubyAxeBlueRed.png","images/diamondAxeBlueRed.png","<img src=\'images/lumberjack.png\' /><br /><br />Hello!  I see you\'ve been cutting a lot of trees. Would you like me to help you?  I can cut down all your trees in a single click!  I\'ll do it for a one time payement of <img src=\'images/coins.png\' class=\'image-icon-20\' /> 1\'000\'000 coins! After that I\'ll cut down all your trees when asked. What do you say?","You\'re hired!","No thanks.","BUY_LUMBERJACK","CHOP_ALL","dialogue-lumberjack-choose","default","lumberjackIgnoreTree","lumberjackIgnoreOakTree","lumberjackIgnoreWillowTree","lumberjackIgnoreMapleTree","lumberjackIgnoreStardustTree","lumberjackIgnoreStrangeLeafTree","lumberjackIgnoreAncientTree","dialogue-lumberjack-choose-table","innerHTML","","<tr><td style=\'cursor:pointer;border:1px solid silver;padding:5px;\' onclick=\'cBytes(\"IGNORE_TREE=","\")\'><img src=\'images/woodcutting/tree4.png\' width=\'50%\' /><img src=\'images/icons/check.png\' style=\'margin-top:-50px\' class=\'image-icon-30\' /></td>","\")\'><img src=\'images/woodcutting/tree4.png\' width=\'50%\' /><img src=\'images/icons/x.png\' style=\'margin-top:-50px\' class=\'image-icon-30\' /></td>","<td style=\'cursor:pointer;border:1px solid silver;padding:5px;\' onclick=\'cBytes(\"IGNORE_TREE=","\")\'><img src=\'images/woodcutting/oakTree4.png\' width=\'50%\' /><img src=\'images/icons/check.png\' style=\'margin-top:-50px\' class=\'image-icon-30\' /></td>","\")\'><img src=\'images/woodcutting/oakTree4.png\' width=\'50%\' /><img src=\'images/icons/x.png\' style=\'margin-top:-50px\' class=\'image-icon-30\' /></td>","\")\'><img src=\'images/woodcutting/willowTree4.png\' width=\'50%\' /><img src=\'images/icons/check.png\' style=\'margin-top:-50px\' class=\'image-icon-30\' /></td>","\")\'><img src=\'images/woodcutting/willowTree4.png\' width=\'50%\' /><img src=\'images/icons/x.png\' style=\'margin-top:-50px\' class=\'image-icon-30\' /></td>","\")\'><img src=\'images/woodcutting/mapleTree4.png\' width=\'50%\' /><img src=\'images/icons/check.png\' style=\'margin-top:-50px\' class=\'image-icon-30\' /></td></tr>","\")\'><img src=\'images/woodcutting/mapleTree4.png\' width=\'50%\' /><img src=\'images/icons/x.png\' style=\'margin-top:-50px\' class=\'image-icon-30\' /></td>","\")\'><img src=\'images/woodcutting/stardustTree4.png\' width=\'50%\' /><img src=\'images/icons/check.png\' style=\'margin-top:-50px\' class=\'image-icon-30\' /></td>","\")\'><img src=\'images/woodcutting/stardustTree4.png\' width=\'50%\' /><img src=\'images/icons/x.png\' style=\'margin-top:-50px\' class=\'image-icon-30\' /></td>","\")\'><img src=\'images/woodcutting/strangeLeafTree4.png\' width=\'50%\' /><img src=\'images/icons/check.png\' style=\'margin-top:-50px\' class=\'image-icon-30\' /></td>","\")\'><img src=\'images/woodcutting/strangeLeafTree4.png\' width=\'50%\' /><img src=\'images/icons/x.png\' style=\'margin-top:-50px\' class=\'image-icon-30\' /></td>","\")\'><img src=\'images/woodcutting/ancientTree4.png\' width=\'50%\' /><img src=\'images/icons/check.png\' style=\'margin-top:-50px\' class=\'image-icon-30\' /></td></tr>","\")\'><img src=\'images/woodcutting/ancientTree4.png\' width=\'50%\' /><img src=\'images/icons/x.png\' style=\'margin-top:-50px\' class=\'image-icon-30\' /></td>","dialogue-axe-chance","dialogue-axe-gem-img","images/emerald.png","images/ruby.png","images/diamond.png","display","style","dialgoue-axe-upgrade-with","none","dialogue-axe-upgrade-btn","dialogue-id-axe","treeId","treeStage","treeGrowTimer","treeUnlocked","wc-img-tree-","wc-div-tree-","wc-div-tree-lbl-","images/woodcutting/none.png","border","1px solid red","Nothing is growing here.","onclick","confirmDialogue(400,\'A random type of tree (depending on your woodcutting level) will naturally start growing here.\',\'Close\',\'\',\'\');","setAttribute","Click to chop down ",".","cBytes(\'CHOP_TREE=","\')","(ready)","There is a tree growing here.","(",")","shiny","startsWith","images/woodcutting/",".gif",".png","tree","oakTree","willowTree","mapleTree","stardustTree","strangeLeafTree","shinyTree","shinyOakTree","shinyWillowTree","shinyMapleTree","shinyStardustTree","shinyStrangeLeafTree","ancientTree","shinyAncientTree","brewingScroll","tree-tooltip-"];var TREE_GROW_TIME=[10800,21600,28800,43200,57600,72000,10800,21600,28800,43200,57600,72000,144000,144000,5];function processWoodcuttingTab(){processTrees(true);if(boundBlueAxeOrb== 1&& boundRedAxeOrb== 0){if(boundEmptyAxe== 1){document[_$_f749[3]](_$_f749[1]+ _$_f749[2])[_$_f749[0]]= _$_f749[4]};if(boundSapphireAxe== 1){document[_$_f749[3]](_$_f749[1]+ _$_f749[5])[_$_f749[0]]= _$_f749[6]};if(boundEmeraldAxe== 1){document[_$_f749[3]](_$_f749[1]+ _$_f749[7])[_$_f749[0]]= _$_f749[8]};if(boundRubyAxe== 1){document[_$_f749[3]](_$_f749[1]+ _$_f749[9])[_$_f749[0]]= _$_f749[10]};if(boundDiamondAxe== 1){document[_$_f749[3]](_$_f749[1]+ _$_f749[11])[_$_f749[0]]= _$_f749[12]}};if(boundBlueAxeOrb== 0&& boundRedAxeOrb== 1){if(boundEmptyAxe== 1){document[_$_f749[3]](_$_f749[1]+ _$_f749[2])[_$_f749[0]]= _$_f749[13]};if(boundSapphireAxe== 1){document[_$_f749[3]](_$_f749[1]+ _$_f749[5])[_$_f749[0]]= _$_f749[14]};if(boundEmeraldAxe== 1){document[_$_f749[3]](_$_f749[1]+ _$_f749[7])[_$_f749[0]]= _$_f749[15]};if(boundRubyAxe== 1){document[_$_f749[3]](_$_f749[1]+ _$_f749[9])[_$_f749[0]]= _$_f749[16]};if(boundDiamondAxe== 1){document[_$_f749[3]](_$_f749[1]+ _$_f749[11])[_$_f749[0]]= _$_f749[17]}};if(boundBlueAxeOrb== 1&& boundRedAxeOrb== 1){if(boundEmptyAxe== 1){document[_$_f749[3]](_$_f749[1]+ _$_f749[2])[_$_f749[0]]= _$_f749[18]};if(boundSapphireAxe== 1){document[_$_f749[3]](_$_f749[1]+ _$_f749[5])[_$_f749[0]]= _$_f749[19]};if(boundEmeraldAxe== 1){document[_$_f749[3]](_$_f749[1]+ _$_f749[7])[_$_f749[0]]= _$_f749[20]};if(boundRubyAxe== 1){document[_$_f749[3]](_$_f749[1]+ _$_f749[9])[_$_f749[0]]= _$_f749[21]};if(boundDiamondAxe== 1){document[_$_f749[3]](_$_f749[1]+ _$_f749[11])[_$_f749[0]]= _$_f749[22]}}}function clicksLumberjack(){if(lumberjackPayed== 0){confirmDialogue(400,_$_f749[23],_$_f749[24],_$_f749[25],_$_f749[26])}else {cBytes(_$_f749[27])}}function processTrees(_0x1274E){processTree(1,_0x1274E);processTree(2,_0x1274E);processTree(3,_0x1274E);processTree(4,_0x1274E);processTree(5,_0x1274E);processTree(6,_0x1274E)}function rightClicksLumberJack(){rightClicksLumberJackRefreshTable();openDialogue(_$_f749[28],_$_f749[29],_$_f749[29])}function rightClicksLumberJackRefreshTable(){var _0x131DD=[_$_f749[30],_$_f749[31],_$_f749[32],_$_f749[33],_$_f749[34],_$_f749[35],_$_f749[36]];var _0x131AA=document[_$_f749[3]](_$_f749[37]);_0x131AA[_$_f749[38]]= _$_f749[39];var _0x13177=_$_f749[39];var _0xA36C=0;if(window[_0x131DD[_0xA36C]]== 0){_0x13177+= _$_f749[40]+ _0x131DD[_0xA36C]+ _$_f749[41]}else {_0x13177+= _$_f749[40]+ _0x131DD[_0xA36C]+ _$_f749[42]};_0xA36C++;if(window[_0x131DD[_0xA36C]]== 0){_0x13177+= _$_f749[43]+ _0x131DD[_0xA36C]+ _$_f749[44]}else {_0x13177+= _$_f749[43]+ _0x131DD[_0xA36C]+ _$_f749[45]};_0xA36C++;if(window[_0x131DD[_0xA36C]]== 0){_0x13177+= _$_f749[43]+ _0x131DD[_0xA36C]+ _$_f749[46]}else {_0x13177+= _$_f749[43]+ _0x131DD[_0xA36C]+ _$_f749[47]};_0xA36C++;if(window[_0x131DD[_0xA36C]]== 0){_0x13177+= _$_f749[43]+ _0x131DD[_0xA36C]+ _$_f749[48]}else {_0x13177+= _$_f749[43]+ _0x131DD[_0xA36C]+ _$_f749[49]};_0xA36C++;if(window[_0x131DD[_0xA36C]]== 0){_0x13177+= _$_f749[40]+ _0x131DD[_0xA36C]+ _$_f749[50]}else {_0x13177+= _$_f749[40]+ _0x131DD[_0xA36C]+ _$_f749[51]};_0xA36C++;if(window[_0x131DD[_0xA36C]]== 0){_0x13177+= _$_f749[43]+ _0x131DD[_0xA36C]+ _$_f749[52]}else {_0x13177+= _$_f749[43]+ _0x131DD[_0xA36C]+ _$_f749[53]};_0xA36C++;if(window[_0x131DD[_0xA36C]]== 0){_0x13177+= _$_f749[43]+ _0x131DD[_0xA36C]+ _$_f749[54]}else {_0x13177+= _$_f749[43]+ _0x131DD[_0xA36C]+ _$_f749[55]};_0x131AA[_$_f749[38]]= _0x13177}function clicksAxe(){var _0xD00C=document[_$_f749[3]](_$_f749[56]);_0xD00C[_$_f749[38]]= getChanceGrowTree()- 15;var _0xD03F=document[_$_f749[3]](_$_f749[57]);if(boundSapphireAxe== 1){_0xD03F[_$_f749[0]]= _$_f749[58]}else {if(boundEmeraldAxe== 1){_0xD03F[_$_f749[0]]= _$_f749[59]}else {if(boundRubyAxe== 1){_0xD03F[_$_f749[0]]= _$_f749[60]}else {if(boundDiamondAxe== 1){document[_$_f749[3]](_$_f749[63])[_$_f749[62]][_$_f749[61]]= _$_f749[64];document[_$_f749[3]](_$_f749[65])[_$_f749[62]][_$_f749[61]]= _$_f749[64]}}}};openDialogue(_$_f749[66],_$_f749[29],_$_f749[29])}function getChanceGrowTree(){var _0xEF53=-1;if(boundEmptyAxe== 1){_0xEF53= 15};if(boundSapphireAxe== 1){_0xEF53= 20};if(boundEmeraldAxe== 1){_0xEF53= 25};if(boundRubyAxe== 1){_0xEF53= 30};if(boundDiamondAxe== 1){_0xEF53= 35};if(achWoodcuttingMediumCompleted== 1){_0xEF53+= 5};if(achWoodcuttingEliteCompleted== 1){_0xEF53+= 10};return _0xEF53}function processTree(_0xF9E2,_0x1274E){var _0x127B4=window[_$_f749[67]+ _0xF9E2];var _0xFA48=window[_$_f749[68]+ _0xF9E2];var _0x12781=window[_$_f749[69]+ _0xF9E2];var _0x127E7=window[_$_f749[70]+ _0xF9E2];var _0xD03F=document[_$_f749[3]](_$_f749[71]+ _0xF9E2);var _0x1271B=document[_$_f749[3]](_$_f749[72]+ _0xF9E2);var _0x126E8=document[_$_f749[3]](_$_f749[73]+ _0xF9E2);if(_0xF9E2== 5|| _0xF9E2== 6){if(donorWoodcuttingPatch< currentTimeMillis&& window[_$_f749[68]+ _0xF9E2]== 0){if(_0xD03F[_$_f749[0]]!= _$_f749[74]){_0xD03F[_$_f749[0]]= _$_f749[74];_0x126E8[_$_f749[38]]= _$_f749[39]};_0x1271B[_$_f749[62]][_$_f749[75]]= _$_f749[76];return}};_0x1271B[_$_f749[62]][_$_f749[75]]= _$_f749[64];if(_0xFA48== 0){if(_0x1274E){_0xD03F[_$_f749[0]]= _$_f749[74]};modifyTooltip(_0xF9E2,_$_f749[77]);_0x126E8[_$_f749[38]]= _$_f749[39];_0x1271B[_$_f749[80]](_$_f749[78],_$_f749[79]);return}else {if(_0xFA48== 4){var _0xFA15=getTreeName(_0x127B4);modifyTooltip(_0xF9E2,_$_f749[81]+ _0xFA15+ _$_f749[82]);if(_0x1274E){_0xD03F[_$_f749[0]]= getTreeImages(_0x127B4,_0xFA15,_0xFA48)};_0x1271B[_$_f749[80]](_$_f749[78],_$_f749[83]+ _0xF9E2+ _$_f749[84]);_0x126E8[_$_f749[38]]= _$_f749[85]}else {var _0xFA15=getTreeName(_0x127B4);modifyTooltip(_0xF9E2,_$_f749[86]);_0x126E8[_$_f749[38]]= _$_f749[87]+ formatTime(TREE_GROW_TIME[_0x127B4- 1]- _0x12781)+ _$_f749[88];if(_0x1274E){_0xD03F[_$_f749[0]]= getTreeImages(_0x127B4,_0xFA15,_0xFA48)};_0x1271B[_$_f749[80]](_$_f749[78],_$_f749[83]+ _0xF9E2+ _$_f749[84])}}}function getTreeImages(_0xF9E2,_0xFA15,_0xFA48){if(_0xFA15[_$_f749[90]](_$_f749[89])){return _$_f749[91]+ _0xFA15+ _0xFA48+ _$_f749[92]}else {return _$_f749[91]+ _0xFA15+ _0xFA48+ _$_f749[93]}}function getTreeName(_0xFA7B){switch(parseInt(_0xFA7B)){case 1:return _$_f749[94];case 2:return _$_f749[95];case 3:return _$_f749[96];case 4:return _$_f749[97];case 5:return _$_f749[98];case 6:return _$_f749[99];case 7:return _$_f749[100];case 8:return _$_f749[101];case 9:return _$_f749[102];case 10:return _$_f749[103];case 11:return _$_f749[104];case 12:return _$_f749[105];case 13:return _$_f749[106];case 14:return _$_f749[107];case 15:return _$_f749[108]}}function modifyTooltip(_0xF9E2,_0xC2B3){document[_$_f749[3]](_$_f749[109]+ _0xF9E2)[_$_f749[38]]= _0xC2B3}