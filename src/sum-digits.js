const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let nStr = `${n}`;
  console.log(`число, которое нужно сложить: ${n}`);
  let resultDigit = 0;
  console.log(`resultDigit: ${resultDigit}`);
  while (nStr.length > 1) {
    resultDigit = 0;
    for (let i = 0; i < nStr.length; i += 1) {
      resultDigit += +nStr[i];
    }
    nStr = `${resultDigit}`;
  }
  return resultDigit;
}

module.exports = {
  getSumOfDigits
};
