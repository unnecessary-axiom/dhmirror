var _$_8c33=["updateInTimer","rowBoatTimer","canoeTimer","sailBoatTimer","steamBoatTimer","stardustPotionTimer","superStardustPotionTimer","greaterStardustPotionTimer","ultraStardustPotionTimer","treePotionTimer","seedPotionTimer","smeltingPotionTimer","oilPotionTimer","barPotionTimer","essencePotionTimer","superEssencePotionTimer","woodcuttingSpeedPotionTimer","farmingSpeedPotionTimer","superOilPotionTimer","fishingPotionTimer","superTreePotionTimer","criticalStrikePotionTimer","bobLightMushroomSeedsTimer","starseedPotionTimer","longerStardustPotionTimer","farmingTreeSpeedPotionTimer","greatSmeltingPotionTimer","manaPotionTimer","superManaPotionTimer","fireChickenPotionTimer","reproductionPotionTimer","iceChickenPotionTimer","lavaCowPotionTimer","repairSpinningWheelTimer","meditationTimer","longerOilPotionTimer","smeltingSpeedPotionTimer","redAxeOrbTimer","redCombatLootOrbTimer","eventToComeTimer","trawlerTimer","stoneFurnace","notif-smelting","smeltingPerc","%","charcoalFoundry","notif-charcoalFoundry","charcoalFoundryPerc","length","substr","notif-","","farming","woodcutting","combatGlobalCooldown","treasureMap","greenTreasureMap","redTreasureMap","rocketLanded","rocketReady","mixingStand","darkPotionMiners","darkPotionLumberjack","darkPotionBob","antiDragonFirePotionCharge","trawlerReady","workers","vendor","animalSick","farmingCrateFull","display","style","notification-static-","getElementById","none","value","bindDonorCoinsGift-input","To avoid spam chat, you must gift at least 15 donor coins to broadcast a message in the chat.","Close","checked","bindDonorCoinsGift-yell","innerHTML","-text","Mixture Ready"," damage","treeStage","treeId","farmingPatchStage","notifaction-area","span","createElement","updateIn","class","notif-box-update","setAttribute","notif-box","id","img","src","images/",".png","image-icon-50","-img","marginRight","10px","appendChild","data-item-display","bobLightMushroomSeeds","onclick","confirmDialogue(400,\'Cancel and bring Bob back?\',\'Bring Bob Back\',\'Do nothing\',\'CANCEL_BOB_WHITE_SEEDS\')","cursor","pointer","notif-smelting-img"];var potionNotificationTimers=[_$_8c33[0],_$_8c33[1],_$_8c33[2],_$_8c33[3],_$_8c33[4],_$_8c33[5],_$_8c33[6],_$_8c33[7],_$_8c33[8],_$_8c33[9],_$_8c33[10],_$_8c33[11],_$_8c33[12],_$_8c33[13],_$_8c33[14],_$_8c33[15],_$_8c33[16],_$_8c33[17],_$_8c33[18],_$_8c33[19],_$_8c33[20],_$_8c33[21],_$_8c33[22],_$_8c33[23],_$_8c33[24],_$_8c33[25],_$_8c33[26],_$_8c33[27],_$_8c33[28],_$_8c33[29],_$_8c33[30],_$_8c33[31],_$_8c33[32],_$_8c33[33],_$_8c33[34],_$_8c33[35],_$_8c33[36],_$_8c33[37],_$_8c33[38],_$_8c33[39],_$_8c33[40]];function loadNotificationElements(){createNotification(_$_8c33[41],_$_8c33[42],_$_8c33[43],_$_8c33[44]);createNotification(_$_8c33[45],_$_8c33[46],_$_8c33[47],_$_8c33[44]);for(var _0xB1FE=0;_0xB1FE< potionNotificationTimers[_$_8c33[48]];_0xB1FE++){createNotification(potionNotificationTimers[_0xB1FE][_$_8c33[49]](0,potionNotificationTimers[_0xB1FE][_$_8c33[48]]- 5),_$_8c33[50]+ potionNotificationTimers[_0xB1FE],potionNotificationTimers[_0xB1FE],_$_8c33[51])}}function processStaticNotifictions(){processStaticNotificationFarming(profileNotifFarming,_$_8c33[52]);processStaticNotificationWoodcutting(profileNotifWoodcutting,_$_8c33[53]);processDefaultStaticNotificationCombat(profileNotifCombat,_$_8c33[54]);processDefaultStaticNotification(treasureMap,_$_8c33[55]);processDefaultStaticNotification(greenTreasureMap,_$_8c33[56]);processDefaultStaticNotification(redTreasureMap,_$_8c33[57]);processDefaultStaticNotification(rocketMoonId,_$_8c33[58]);processDefaultStaticNotificationRocketReady(rocketKm,_$_8c33[59]);processDefaultStaticNotificationMixingStand(mixingStandTimer,_$_8c33[60]);processDefaultStaticNotificationDarkPotion(darkPotionMiners,_$_8c33[61]);processDefaultStaticNotificationDarkPotion(darkPotionLumberjack,_$_8c33[62]);processDefaultStaticNotificationDarkPotion(darkPotionBob,_$_8c33[63]);processDefaultStaticNotificationAntiDragonFire(antiDragonFirePotionCharge,_$_8c33[64]);processDefaultStaticNotification(trawlerReady,_$_8c33[65]);processDefaultStaticNotificationWorkers(workersTimer,_$_8c33[66]);if(quest18==  -1){processDefaultStaticNotification(vendorNotification,_$_8c33[67])};if(quest24==  -1){processDefaultStaticNotification(animalSick,_$_8c33[68]);if(farmingCrate> 0){processDefaultStaticNotificationGreaterOne(farmingCrateFull,_$_8c33[69])}}}function processDefaultStaticNotificationWorkers(_0x15D96,_0x15DDA){if(_0x15D96== 1){if(document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]== _$_8c33[74]){document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]= _$_8c33[51]}}else {if(document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]!= _$_8c33[74]){document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]= _$_8c33[74]}}}function processDefaultStaticNotificationGreaterOne(_0x15D96,_0x15DDA){if(_0x15D96>= 1){if(document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]== _$_8c33[74]){document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]= _$_8c33[51]}}else {if(document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]!= _$_8c33[74]){document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]= _$_8c33[74]}}}function processDefaultStaticNotification(_0x15D96,_0x15DDA){if(_0x15D96>= 1){if(document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]== _$_8c33[74]){document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]= _$_8c33[51]}}else {if(document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]!= _$_8c33[74]){document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]= _$_8c33[74]}}}function selectsBroadcastMessageGiftdonor(){if(parseInt(document[_$_8c33[73]](_$_8c33[76])[_$_8c33[75]])< 15|| document[_$_8c33[73]](_$_8c33[76])[_$_8c33[75]][_$_8c33[48]]< 2|| isNaN(document[_$_8c33[73]](_$_8c33[76])[_$_8c33[75]])){confirmDialogue(400,_$_8c33[77],_$_8c33[78],_$_8c33[51],_$_8c33[51]);document[_$_8c33[73]](_$_8c33[80])[_$_8c33[79]]= false;return false}else {return true}}function processDefaultStaticNotificationRocketReady(_0x15D96,_0x15DDA){if(boundRocket== 0){return};if(_0x15D96== 0){document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]= _$_8c33[51]}else {document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]= _$_8c33[74]}}function processDefaultStaticNotificationMixingStand(_0x15D96,_0x15DDA){if(_0x15D96> 0){document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]= _$_8c33[51]}else {document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]= _$_8c33[74]};if(_0x15D96> 1){document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA+ _$_8c33[82])[_$_8c33[81]]= formatTime(_0x15D96)}else {if(_0x15D96== 1){document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA+ _$_8c33[82])[_$_8c33[81]]= _$_8c33[83]}}}function processDefaultStaticNotificationDarkPotion(_0x15D96,_0x15DDA){if(_0x15D96> 0){document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]= _$_8c33[51]}else {document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]= _$_8c33[74]};if(_0x15D96> 1){document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA+ _$_8c33[82])[_$_8c33[81]]= formatTime(_0x15D96)}}function processDefaultStaticNotificationAntiDragonFire(_0x15D96,_0x15DDA){if(_0x15D96> 0){document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]= _$_8c33[51]}else {document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]= _$_8c33[74]};if(_0x15D96> 1){document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA+ _$_8c33[82])[_$_8c33[81]]= _0x15D96+ _$_8c33[84]}}function processDefaultStaticNotificationCombat(_0x15D96,_0x15DDA){if(_0x15D96== 1){if(window[_0x15DDA]> 0|| heroIsOnRocket== 1){document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]= _$_8c33[74]}else {document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]= _$_8c33[51]}}}function processStaticNotificationWoodcutting(_0x15D96,_0x15DDA){if(_0x15D96== 1){for(var _0xB1FE=1;_0xB1FE<= 6;_0xB1FE++){if(window[_$_8c33[85]+ _0xB1FE]== 4){var _0x1610A=window[_$_8c33[86]+ _0xB1FE];if(lumberjackIgnoreTree== 1){if(_0x1610A== 1|| _0x1610A== 7){continue}};if(lumberjackIgnoreOakTree== 1){if(_0x1610A== 2|| _0x1610A== 8){continue}};if(lumberjackIgnoreWillowTree== 1){if(_0x1610A== 3|| _0x1610A== 9){continue}};if(lumberjackIgnoreMapleTree== 1){if(_0x1610A== 4|| _0x1610A== 10){continue}};if(lumberjackIgnoreStardustTree== 1){if(_0x1610A== 5|| _0x1610A== 11){continue}};if(lumberjackIgnoreStrangeLeafTree== 1){if(_0x1610A== 6|| _0x1610A== 12){continue}};if(lumberjackIgnoreAncientTree== 1){if(_0x1610A== 13|| _0x1610A== 14){continue}};if(document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]== _$_8c33[74]){document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]= _$_8c33[51]};return}};if(document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]!= _$_8c33[74]){document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]= _$_8c33[74]}}else {if(document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]!= _$_8c33[74]){document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]= _$_8c33[74]}}}function processStaticNotificationFarming(_0x15D96,_0x15DDA){if(_0x15D96== 1){for(var _0xB1FE=1;_0xB1FE<= 7;_0xB1FE++){if(window[_$_8c33[87]+ _0xB1FE]!= 0&& window[_$_8c33[87]+ _0xB1FE]!= 1&& window[_$_8c33[87]+ _0xB1FE]!= 2&& window[_$_8c33[87]+ _0xB1FE]!= 3){if(document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]== _$_8c33[74]){document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]= _$_8c33[51]};return}};if(document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]!= _$_8c33[74]){document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]= _$_8c33[74]}}else {if(document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]!= _$_8c33[74]){document[_$_8c33[73]](_$_8c33[72]+ _0x15DDA)[_$_8c33[71]][_$_8c33[70]]= _$_8c33[74]}}}function createNotification(_0x107CA,_0x10742,_0x1091E,_0x108DA){var _0x106FE=document[_$_8c33[73]](_$_8c33[88]);var _0x1080E=document[_$_8c33[90]](_$_8c33[89]);if(_0x107CA== _$_8c33[91]){_0x1080E[_$_8c33[94]](_$_8c33[92],_$_8c33[93])}else {_0x1080E[_$_8c33[94]](_$_8c33[92],_$_8c33[95])};_0x1080E[_$_8c33[94]](_$_8c33[96],_0x10742);_0x1080E[_$_8c33[71]][_$_8c33[70]]= _$_8c33[74];var _0x10786=document[_$_8c33[90]](_$_8c33[97]);_0x10786[_$_8c33[94]](_$_8c33[98],_$_8c33[99]+ _0x107CA+ _$_8c33[100]);_0x10786[_$_8c33[94]](_$_8c33[92],_$_8c33[101]);_0x10786[_$_8c33[94]](_$_8c33[96],_0x10742+ _$_8c33[102]);_0x10786[_$_8c33[71]][_$_8c33[103]]= _$_8c33[104];_0x1080E[_$_8c33[105]](_0x10786);var _0x10852=document[_$_8c33[90]](_$_8c33[89]);_0x10852[_$_8c33[94]](_$_8c33[106],_0x1091E);_0x1080E[_$_8c33[105]](_0x10852);var _0x10896=document[_$_8c33[90]](_$_8c33[89]);_0x10896[_$_8c33[81]]= _0x108DA;_0x1080E[_$_8c33[105]](_0x10896);if(_0x107CA== _$_8c33[107]){_0x1080E[_$_8c33[94]](_$_8c33[108],_$_8c33[109]);_0x1080E[_$_8c33[71]][_$_8c33[110]]= _$_8c33[111]};_0x106FE[_$_8c33[105]](_0x1080E)}function refreshNotifications(){if(smeltingPerc> 0){document[_$_8c33[73]](_$_8c33[42])[_$_8c33[71]][_$_8c33[70]]= _$_8c33[51];document[_$_8c33[73]](_$_8c33[112])[_$_8c33[98]]= _$_8c33[99]+ getBarFromId(smeltingBarType)+ _$_8c33[100]}else {document[_$_8c33[73]](_$_8c33[42])[_$_8c33[71]][_$_8c33[70]]= _$_8c33[74]};if(charcoalFoundryPerc> 0){document[_$_8c33[73]](_$_8c33[46])[_$_8c33[71]][_$_8c33[70]]= _$_8c33[51]}else {document[_$_8c33[73]](_$_8c33[46])[_$_8c33[71]][_$_8c33[70]]= _$_8c33[74]};for(var _0xB1FE=0;_0xB1FE< potionNotificationTimers[_$_8c33[48]];_0xB1FE++){if(window[potionNotificationTimers[_0xB1FE]]> 0){document[_$_8c33[73]](_$_8c33[50]+ potionNotificationTimers[_0xB1FE])[_$_8c33[71]][_$_8c33[70]]= _$_8c33[51]}else {document[_$_8c33[73]](_$_8c33[50]+ potionNotificationTimers[_0xB1FE])[_$_8c33[71]][_$_8c33[70]]= _$_8c33[74]}}}