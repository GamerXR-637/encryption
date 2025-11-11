const { betterUUID } = require("./tools/betterUUID.js");
const { colorTerminal } = require("./tools/colorTerminal.js");
const { FtM } = require("./useless/FtM.js");
const { Randcolor } = require("./tools/Randcolor.js");
const { rgbToHex } = require("./tools/rgbtohex.js");
const { sleep } = require("./tools/sleep.js");
const { truncate } = require("./text/truncate.js");

const { average } = require("./math/average.js");
const { circleArea } = require("./math/circleArea.js");
const { cylinderVolume } = require("./math/cylinderVolume.js");
const { inRange } = require("./math/inRange.js");
const { median } = require("./math/median.js");
const { randomInt } = require("./math/randomInt.js");
const { triangle } = require("./math/triangle.js");
const { pointY } = require("./math/pointY.js");
const { pointX } = require("./math/pointX.js");
const { multiplyPoly } = require("./math/multiplyPoly.js");
const { seededRandom } = require("./math/seededRandom.js");
const { percent } = require("./math/percent.js");
const { pointSlope } = require("./math/pointSlope.js");
const { quadratic } = require("./math/quadratic.js");

const { textToBinary } = require("./text/binary.js");
const { morseCode } = require("./text/morseCode.js");

const { cat } = require("./useless/cat.js");

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
  textToBinary,
  morseCode,
  cat,
  pointX,
  pointY,
  multiplyPoly,
  seededRandom,
  percent,
  pointSlope,
  quadratic,
};
