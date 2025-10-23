const crypto = require("crypto");

function encrypt(key, message, seed) {
  let keyb = btoa(key);
  return keyb;
}
console.log(encrypt("hello", "apple", 2));
