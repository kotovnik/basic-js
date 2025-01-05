const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let result = true;
  console.log(`на входе n: ${n}`);
  const arrayN = n.split('-');
  if (arrayN.length !== 6) {
    result = false;
  }
  for (let elem of arrayN) {
    if (elem.length !== 2) {
      result = false;
    }
  }
  arrayN.map((item) => item.split(''));
  console.log(`arrayN: ${arrayN}`);
  for (let elem of arrayN) {
    for (let char of elem) {
      if (!('0' <= char && char <= '9' || 'A' <= char && char <= 'F')) {
        result = false;
      }
    }
  }
  return result;
}
module.exports = {
  isMAC48Address
};
