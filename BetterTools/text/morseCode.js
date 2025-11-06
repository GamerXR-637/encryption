/**
 * Converts a string to its Morse Code.
 *
 * @param {string} text The input string to convert.
 * @returns {string} The Morse Code representation of the string.
 */

// This object maps characters to their Morse code equivalent.
const chars_to_morse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
  " ": "/",
};

function morseCode(text) {
  if (typeof text !== "string") {
    return "[Error]: Input must be a string.";
  }

  const upperText = text.toUpperCase().trim();
  let morseOutput = "";

  for (let i = 0; i < upperText.length; i++) {
    const char = upperText[i];
    const morseChar = chars_to_morse[char];
    if (morseChar) {
      morseOutput += morseChar + " ";
    }
  }
  return morseOutput.trim();
}

module.exports = { morseCode };
