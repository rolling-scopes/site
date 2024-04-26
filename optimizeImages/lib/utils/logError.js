import chalk from 'chalk';

/**
 * Logs painted error into the console
 * @param {string} fullname - The name of the file that was processed while error occurred
 * @param {Error} error - The error object
 * @return {void} - Returns nothing
 */
const logError = (fullname, error) => {
  console.log(chalk.red.italic(`Something went really wrong! ${fullname} (${error}) skipping...`));
};

export default logError;
