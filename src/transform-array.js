const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr.length === 0) {
    return arr;
  }
  const disPrev = '--discard-prev';
  const disNext = '--discard-next';
  const doublePrev = '--double-prev';
  const doubleNext = '--double-next';
  // const arrayTwin = arr.slice();
  const resultArray = [];
  for(let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== disPrev && arr[i] !== disNext && arr[i] !== doublePrev && arr[i] !== doubleNext) {
      resultArray.push(arr[i]);
    }
    if (arr[i] === disNext) {
      i += 1;
      continue;
    }
    if (arr[i] === disPrev && resultArray.length > 0 && arr[i - 2] !== disNext) {
      resultArray.pop();
    }
    if (arr[i] === doublePrev && resultArray.length > 0 && arr[i - 2] !== disNext) {
      resultArray.push(arr[i - 1]);
    }
    if (arr[i] === doubleNext && (i + 1) < arr.length) {
      resultArray.push(arr[i + 1]);
    }
  }
  return resultArray;
}

module.exports = {
  transform
};
