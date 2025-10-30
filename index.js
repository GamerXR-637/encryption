const BetterTools = require("./BetterTools");

let array = [0, 2, 35, 54, 21, 100, 293, 637];

console.log("Testing Functions ----");
console.log(BetterTools.Randcolor(3, true));
console.log(BetterTools.betterUUID(4));
console.log(BetterTools.randomInt(109));
console.log(BetterTools.inRange(10, 20, 3));
console.log(BetterTools.average([2, 3, 45, 4, 2]));
console.log(BetterTools.rgbToHex(23, 34, 56));
async function main() {
  console.log("apple");
  await BetterTools.sleep(2); // Wait for 2 seconds
  console.log("pie");
}
main();
BetterTools.colorTerminal(BetterTools.triangle(), "red");
console.log(BetterTools.truncate("", 20));
console.log(BetterTools.circleArea(4, true));
console.log("array " + BetterTools.median(array));
