/**
 * Converts a string to its binary representation.
 *
 * @param {string} text The input string to convert.
 * @returns {string} The binary representation of the string.
 */
function textToBinary(text) {
  if (typeof text !== "string" && text !== "") {
    return "[Error]: Input must be a string. Or must input a string";
  }

  let binaryOutput = "";
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    const binaryChar = charCode.toString(2);
    binaryOutput += binaryChar.padStart(8, "0") + " ";
  }
  return binaryOutput.trim();
}

module.exports = { textToBinary };
