'use strict';

const services = require('../lib/services/services.js');

exports.type = 'perItem';

exports.active = false;

exports.description = 'convert result item to React Native SVG component';


/**
 * Replace the element name by its equivalent in react native SVG
 *
 * @example
 * <svg width="100 height="100"> <path d="..."/></svg>
 * ↓
 * <Svg width="100 height="100"> <Path d="..."/></Svg>
 */
exports.fn = (item) => {
  if (item.length > 1) {
    return services.stringToPascalCase(item);
  }
  return item;
};
