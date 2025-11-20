const BetterTools = require("./BetterTools");

console.log("Testing Functions ----");

console.log(BetterTools.Randcolor(3, true));
// Will generate 3 random color with the #

console.log(BetterTools.betterUUID(4));
// Will get a UUID that is 4 part long

console.log(BetterTools.randomInt(109));
// Will get a random integer from 0 to 109

console.log(BetterTools.temp(37,"c","f"))
// Will get 98 back

console.log(BetterTools.seededRandom(37))
// 0.0002615799930373639