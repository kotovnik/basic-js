const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  console.log(`email: ${email}`);
  const arrayFromEmail = email.split('@');
  const result = arrayFromEmail[arrayFromEmail.length - 1];
  return result;
}

module.exports = {
  getEmailDomain
};
