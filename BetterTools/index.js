const { betterUUID } = require("./tools/betterUUID.js");
const { colorTerminal } = require("./tools/colorTerminal.js");
const { FtM } = require("./tools/FtM.js");
const { Randcolor } = require("./tools/Randcolor.js");
const { rgbToHex } = require("./tools/rgbtohex.js");
const { sleep } = require("./tools/sleep.js");
const { truncate } = require("./tools/truncate.js");

const { average } = require("./math/average.js");
const { circleArea } = require("./math/circleArea.js");
const { cylinderVolume } = require("./math/cylinderVolume.js");
const { inRange } = require("./math/inRange.js");
const { median } = require("./math/median.js");
const { randomInt } = require("./math/randomInt.js");
const { triangle } = require("./math/triangle.js");

module.exports = {
  average,
  betterUUID,
  circleArea,
  cylinderVolume,
  colorTerminal,
  FtM,
  inRange,
  Randcolor,
  randomInt,
  rgbToHex,
  sleep,
  triangle,
  truncate,
  median,
};
