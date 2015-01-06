var finder = require('package.loader'),
    tools  = require('../tools');


exports.apply = function applyModules (_app) {
  var moduleNames = finder.match(/^application\.module\..*/),
      modProperty,
      mod;


  moduleNames.forEach(function moduleNameIterator (moduleName) {

    // load the module
    mod = finder.require(moduleName);
    modProperty = tools.getPropertyName(moduleName, 'application.module.');

    // apply the mixin
    _app[modProperty] = mod(_app);
  });
};
