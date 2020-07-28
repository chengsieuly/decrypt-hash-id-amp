const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const emoji = require('node-emoji');
const cliProgress = require('cli-progress');
const XLSX = require('xlsx');
const getIdFromHash = require('./utils/get-id-from-hash');

// Get the first sheet in workbook
const workbook = XLSX.readFile('input.xlsx');
const first_sheet_name = workbook.SheetNames[0];
const worksheet = workbook.Sheets[first_sheet_name];

// Get the first two columns
const json_sheet = XLSX.utils.sheet_to_json(worksheet, { header: ['amplitude_id', 'hashed_user_id'] });

// Add unhashed user ids
console.log(chalk.blue(`Unhashing... ${emoji.get('computer')}`));
const conversion_progress = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
conversion_progress.start(json_sheet.length - 1, 0);

const new_json_sheet = json_sheet.slice(1).map((cell, i) => {
  cell.unhashed_user_id = getIdFromHash(cell.hashed_user_id);
  conversion_progress.increment();
  return cell;
});

conversion_progress.stop();

// Create new csv with unhashed user ids
console.log(`${chalk.blue('Creating csv...')} ${emoji.get('newspaper')}`);

const out_name = 'out.csv';
const worksheet_from_json = XLSX.utils.json_to_sheet(new_json_sheet);
const stream = XLSX.stream.to_csv(worksheet_from_json);
stream.pipe(fs.createWriteStream(out_name));

console.log(`${chalk.green('Done')} ${path.resolve(out_name)}`);
