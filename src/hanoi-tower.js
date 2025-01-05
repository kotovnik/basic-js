const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  console.log(disksNumber); // 5
  console.log(turnsSpeed); // 4074
  const convertToSec = turnsSpeed / (60 * 60);
  const numberTurns = 2 ** disksNumber - 1;
  const timeInSeconds = Math.floor(numberTurns / convertToSec);
  let resultObject = {};
  resultObject.turns = numberTurns;
  resultObject.seconds = timeInSeconds;
  return resultObject;
}

module.exports = {
  calculateHanoi
};
