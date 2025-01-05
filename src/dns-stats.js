const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const resultObjectOfDNS = {};
  for (let element of domains) {
    const arrayFromElem = element.split('.');
    arrayFromElem.reverse();
    let keyOfObject = '';
    for (let elem of arrayFromElem) {
      keyOfObject += `.${elem}`;
      resultObjectOfDNS[keyOfObject] += 1;
      if (!resultObjectOfDNS[keyOfObject]) {
        resultObjectOfDNS[keyOfObject] = 1;
      }
    }
  }
  return resultObjectOfDNS;
}

module.exports = {
  getDNSStats
};
