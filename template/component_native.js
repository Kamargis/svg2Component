
/**
 * tpl - Returns the template string filled with component name and return value
 *
 * @param  {type} name description
 * @param  {type} body description
 * @return {type}      description
 */
function tpl(name, body) {
  return (
`
import React from 'react';
import { Svg, Path } from 'react-native-svg';

export function ${name}() {
  return (
    ${body}
  )
}
`
  );
}

module.exports = {
  tpl,
};
