const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }
    return this.code(str, key, 'encrypt');
  }
  decrypt(encryptedStr, key) {
    if (!encryptedStr || !key) {
      throw new Error('Incorrect arguments!');
    }
    return this.code(encryptedStr, key, 'decrypt');
  }
  code(enter, key, type) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const enterUp = enter.toUpperCase();
    const keyUp = key.toUpperCase();
    const resArray = [];
    let count = 0;
    for(let i = 0;  i < enterUp.length; i += 1) {
      const letter = enterUp[i];
      if (letters.includes(letter)) {
        const letterIndex = letters.indexOf(letter);
        const keyLetter = keyUp[count % keyUp.length];
        const valueKey = letters.indexOf(keyLetter);

      let index;
      if (type === 'encrypt') {
        index = (letterIndex + valueKey) % letters.length;
      } else if (type === 'decrypt') {
        index = (letterIndex - valueKey + letters.length) % letters.length;
      }
      resArray.push(letters[index]);
      count += 1;
      } else {
        resArray.push(letter);
      }
    }
    return this.isDirect ? resArray.join('') : resArray.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
