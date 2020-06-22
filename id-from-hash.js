const CryptoJS = require('crypto-js');
const config = require('./config.json');

let i = 0;

const args = process.argv.slice(2);

const portal = args.length === 1 ? config.portal : args[0];
const hash_arg = args[1] || args[0];

while (i >= 0) {
  const hash = CryptoJS.SHA256(`${portal}${i}`);
  const formatted = hash.toString().toUpperCase();

  if (formatted === hash_arg) {
    console.log(i);
    return;
  }

  i++;
}
