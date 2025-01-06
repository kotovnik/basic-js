const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const decayRate = 15;
  const halfLife = 5730;
  if (!(typeof sampleActivity === 'string') || isNaN(parseFloat(sampleActivity))||
  parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) > decayRate) {
    return false;
  }
  const activ = parseFloat(sampleActivity);
  const log2 = Math.log(2);
  const k = log2 / halfLife;
  const time = Math.log(decayRate / activ) / k;
  const result = Math.ceil(time);
  return result;
}

module.exports = {
  dateSample
};
