module.exports = {
  full: true,
  plugins: [
    { removeDimensions: true },
    { removeXMLNS: true },
    { collapseGroups: true },
    { removeTitle: true },
    { removeEmptyContainers: true },
    { removeAttrs: { attrs: 'version' } },
  ],
  js2svg: { pretty: true, indent: 2 },
};
