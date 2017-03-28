'use strict';

const FS = require('fs');
const PATH = require('path');
const SVGO = require('svgo');
const TPL = require('./template/component_native.js');

const config = {
  full: true,
  plugins: [
    { removeDimensions: true },
    { removeXMLNS: true },
    { collapseGroups: true },
    { removeTitle: true },
    { removeEmptyContainers: true },
    { removeAttrs: { attrs: 'version' } },
    { transformToReactNative: true },
  ],
  js2svg: { pretty: true, indent: 2 },
};

const svgo = new SVGO(config);

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
 * getSvgFile - Get svg file
 *
 * @return {?Object}  svg file | error
 */
function getSvgFile(filePath) {
  const path = PATH.resolve(__dirname, filePath);
  if (path) {
    return path;
  }
  throw new Error('File not found');
}

function svgToReactNativeComponent(formattedSvg, componentName) {
  if (!componentName || !formattedSvg) {
    console.log('An error as occured, the path or the component name is incorrect !');
  }
  const file = TPL.tpl(componentName, formattedSvg);

  FS.writeFile('./component.native.js', file, (err) => {
    if (err) {
      throw new Error(err);
    }
    console.log('The file was created !');
  });
}

/**
 * optimizeFile - Return the optimized svg file with React native structure
 *
 * @return {type}  description
 */
function optimizeFile() {
  FS.readFile(getSvgFile(getFilePath()), 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    svgo.optimize(data).then((result) => {
      svgToReactNativeComponent(result.data, getComponentName());
    });
  });
}


optimizeFile();
