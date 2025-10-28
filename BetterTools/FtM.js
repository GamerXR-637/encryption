/**
 * Turn feet to meters
 *
 * @param {number} foots How many foots to turn to meters
 */
function FtM(foots) {
  let meters = 0.3048;
  return parseFloat((foots * meters).toFixed(4));
}

module.exports = { FtM };
