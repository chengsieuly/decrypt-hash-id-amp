const CryptoJS = require('crypto-js');
const config = require('./config.json');

const args = process.argv.slice(2);

const portal = args.length === 1 ? config.portal : args[0];
const id_arg = args[1] || args[0];

console.log(CryptoJS.SHA256(`${portal}${id_arg}`).toString().toUpperCase());
