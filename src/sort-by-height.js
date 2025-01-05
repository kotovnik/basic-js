const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrForComparison = arr.filter((value) => value !== -1);
  arrForComparison.sort((a, b) => (a - b));
  let pos = 0;
  let resultArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === -1) {
      resultArr.push(-1);
    }
    if (arr[i] !== -1) {
      resultArr.push(arrForComparison[pos]);
      pos += 1;
    }
  }
  return resultArr;
}

module.exports = {
  sortByHeight
};
