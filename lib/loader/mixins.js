var finder = require('package.module.finder');


exports.apply = function applyMixins (_app) {
  var mixinNames = finder.match(/^application\.mixin\..*/),
      mixin;

  mixinNames.forEach(function mixinNameIterator (mixinName) {

    // load the mixin
    mixin = finder.require(mixinName);

    // apply the mixin
    mixin.apply(_app);
  });
};
