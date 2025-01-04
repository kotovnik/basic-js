const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  console.log(str);
  let resStr = '';
  for (let i = 0; i < str.length; i += 1) {
    let count = 1;
    while (str[i] === str[i + 1]) {
      count += 1;
      i += 1;
    }
    if (count === 1) {
      count = '';
    }
    resStr += `${count}${str[i]}`
  }
  return resStr;
}

module.exports = {
  encodeLine
};
