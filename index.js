'use strict';

const FS = require('fs');
const PATH = require('path');
const SVGO = require('svgo');
const TPL = require('./template/component_native.js');
const services = require('./lib/services/services.js');
const transformSvgToReactNative = require('./svgo-plugin/transformSvgToReactNative.js');

const config = {
  full: true,
  plugins: [
    { removeDimensions: true },
    { removeXMLNS: true },
    { collapseGroups: true },
    { removeTitle: true },
    { removeEmptyContainers: true },
    { removeAttrs: { attrs: 'version' } },
    { transformSvgToReactNative },
  ],
  js2svg: { pretty: true, indent: 2 },
};

const svgo = new SVGO(config);


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
  FS.readFile(services.getSvgFile(services.getFilePath(), PATH), 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    svgo.optimize(data).then((result) => {
      svgToReactNativeComponent(result.data, services.getComponentName());
    });
  });
}


optimizeFile();
