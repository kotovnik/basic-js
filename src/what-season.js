const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  const summer = 'summer';
  const winter = 'winter';
  const spring = 'spring';
  const autumn = 'autumn';
  const message = 'Unable to determine the time of year!';
  if (!date) {
    return message;
  }
  if (
    Object.getOwnPropertyNames(date).length != 0 ||
    date instanceof Date === false
  ) {
    throw Error("Invalid date!");
  }
  const month = date.getMonth();
  if (month >= 2 && month <= 4) {
    return spring;
  } else if (month >= 5 && month <= 7) {
    return summer;
  } else if (month >= 8 && month <= 10) {
    return autumn;
  } else {
    return winter;
  }
}

module.exports = {
  getSeason,
};
