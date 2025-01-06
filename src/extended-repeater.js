const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str !== 'string') {
    str = String(str);
  }
  options = options || {};
  const additionStr = options.addition !== undefined ? String(options.addition) : '';
  const repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  const separator = options.separator ? options.separator : '+';
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  const additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  let resultString = '';
  let additionString = '';
  const additionArray = new Array(additionRepeatTimes);
  additionArray.fill(additionStr);
  additionString = additionArray.join(additionSeparator);
  const resultArray = new Array(repeatTimes);
  resultArray.fill(str + additionString);
  resultString = resultArray.join(separator);
  return resultString;
}

module.exports = {
  repeater
};
//   if (typeof str !== 'string') {
//   str = String(str);
// }
// if (typeof options.addition !== 'string') {
//   options.addition = String(options.addition);
// }