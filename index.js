'use strict';

const FS = require('fs');
const SVGO = require('svgo');
const TPL = require('./template/component_native.js');
const services = require('./lib/services/services.js');
const transformSvgToReactNative = require('./svgo-plugin/transformSvgToReactNative.js');
const CONFIG = require('./lib/config/config.js');

const config = conf => Object.assign(
  {},
  conf,
  { plugins: conf.plugins.slice().push({ transformSvgToReactNative }) }
);

const svgo = new SVGO(config(CONFIG));


function svgToReactNativeComponent(formattedSvg, componentName) {
  const file = TPL.tpl(componentName, formattedSvg);

  FS.writeFile('./component.native.js', file, (err) => {
    if (err) {
      throw new Error(err);
    }
    global.console.log('The file was created !');
  });
}

/**
 * Return the file if founded
 *
 * @param  {String} filePath location of the file
 * @return {String} Return the raw file
 */
function getFile(filePath) {
  return FS.readFileSync(filePath, 'utf8', (err) => {
    if (err) {
      throw err;
    }
    global.console.log('data has been successfuly read');
  });
}


/**
 * Optimize the given svg file using svgo
 *
 * @param  {String} file raw svg file
 * @return {String} optimized svg file
 */
function optimizeFile(file) {
  let result = null;
  svgo.optimize(file)
  .then((data) => { result = data; })
  .catch((e) => { throw e; });
  return result;
}


/**
 * Main function
 */
function init() {
  const filePath = services.getFullPath(services.getFilePath());
  const componentName = services.getComponentName();
  const optimizedSvg = optimizeFile(getFile(filePath));

  if (!componentName || !filePath || !optimizedSvg) {
    global.console.log(filePath);
    global.console.log(componentName);
    global.console.log(!!optimizedSvg);
    throw new Error('An error as occured: ');
  }

  svgToReactNativeComponent(optimizedSvg, componentName);
}

init();
