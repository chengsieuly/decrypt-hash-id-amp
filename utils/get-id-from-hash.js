const CryptoJS = require('crypto-js');
const config = require('../config.json');

const getIdFromHash = hash_input => {
  let i = 0;

  while (i >= 0) {
    if (i === 1000000) {
      return null;
    }

    const hash = CryptoJS.SHA256(`${config.portal}${i}`);
    const formatted = hash.toString().toUpperCase();

    if (formatted === hash_input.trim()) {
      return i;
    }

    i++;
  }
};

module.exports = getIdFromHash;
