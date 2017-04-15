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
 * @param  {Object} PATH     description
 * @param  {String} filePath path of the wanted file
 * @return {String} Entire path file if founded
 */
function getSvgFile(PATH, filePath) {
  const path = PATH.resolve(__dirname, filePath);
  if (path) {
    return path;
  }
  throw new Error('File not found');
}


module.exports = {
  getArgv,
  getFilePath,
  getComponentName,
  getSvgFile,
};
