const PATH = require('path');

/**
 * getArgv - return the array of argument without "node" and the current file path inside
 *
 * @return {?Array}  array of arguments or null if it's empty
 */
function getArgv() {
  const argv = process.argv ? process.argv.slice(2) : null;
  return argv;
}

/**
 * getPath - Return the file path in the arguments array
 *
 * @return {type}  description
 */
function getFilePath() {
  return getArgv()[0];
}

/**
 * getComponentName - Return the component name from the arguments array
 *
 * @return {?String}  component name
 */
function getComponentName() {
  return getArgv()[1];
}


/**
 * @param  {String} filePath path of the wanted file
 * @return {String} Entire path file if founded
 */
function getFullPath(filePath) {
  const path = PATH.resolve(__dirname, filePath);
  if (path) {
    return path;
  }
  throw new Error('File not found');
}


/**
 * Return a string with the first letter to uppercase
 *
 * @param  {String} string string to modify
 * @return {String} string that has been modified
 */
function firstCharToUpperCase(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}


/**
 * Change simple strings or string that are separated with dashes to pascal case
 *
 * @param  {String} string string to modify
 * @return {String} string that has been modified
 */
function stringToPascalCase(string) {
  if (string.indexOf('-') >= 0) {
    return string.split('-').map(str => firstCharToUpperCase(str)).join('');
  }
  return firstCharToUpperCase(string);
}

module.exports = {
  getArgv,
  getFilePath,
  getComponentName,
  getFullPath,
  stringToPascalCase,
};
