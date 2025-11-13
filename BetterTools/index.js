const { colorTerminal } = require("./tools/colorTerminal.js");
const { seededRandom } = require("./tools/seededRandom.js");
const { betterUUID } = require("./tools/betterUUID.js");
const { Randcolor } = require("./tools/Randcolor.js");
const { rgbToHex } = require("./tools/rgbtohex.js");
const { sleep } = require("./tools/sleep.js");

const { cylinderVolume } = require("./math/cylinderVolume.js");
const { multiplyPoly } = require("./math/multiplyPoly.js");
const { pointSlope } = require("./math/pointSlope.js");
const { circleArea } = require("./math/circleArea.js");
const { randomInt } = require("./math/randomInt.js");
const { quadratic } = require("./math/quadratic.js");
const { triangle } = require("./math/triangle.js");
const { average } = require("./math/average.js");
const { inRange } = require("./math/inRange.js");
const { percent } = require("./math/percent.js");
const { median } = require("./math/median.js");
const { pointY } = require("./math/pointY.js");
const { pointX } = require("./math/pointX.js");

const { textToBinary } = require("./text/binary.js");
const { morseCode } = require("./text/morseCode.js");
const { truncate } = require("./text/truncate.js");

const { FtM } = require("./useless/FtM.js");
const { cat } = require("./useless/cat.js");

module.exports = {
  cylinderVolume,
  colorTerminal,
  multiplyPoly,
  seededRandom,
  textToBinary,
  pointSlope,
  betterUUID,
  circleArea,
  quadratic,
  Randcolor,
  morseCode,
  randomInt,
  triangle,
  truncate,
  rgbToHex,
  average,
  inRange,
  percent,
  pointY,
  pointX,
  median,
  sleep,
  FtM,
  cat,
};

