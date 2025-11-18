const { colorTerminal } = require("./tools/colorTerminal.js");
const { seededRandom } = require("./tools/seededRandom.js");
const { betterUUID } = require("./tools/betterUUID.js");
const { Randcolor } = require("./tools/Randcolor.js");
const { RandSeed } = require("./tools/RandSeed.js");
const { rgbToHex } = require("./tools/rgbtohex.js");
const { scope } = require("./tools/scope.js");
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
const { temp } = require("./math/temp.js");

const { textToBinary } = require("./text/binary.js");
const { morseCode } = require("./text/morseCode.js");
const { truncate } = require("./text/truncate.js");

const { load } = require("./useless/load.js");
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
  RandSeed,
  average,
  inRange,
  percent,
  pointY,
  scope,
  pointX,
  median,
  sleep,
  load,
  temp,
  cat,
};

