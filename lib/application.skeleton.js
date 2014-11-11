var mixins  = require('./loader/mixins'),
    modules = require('./loader/modules');

module.exports = function applyApplicationSkeleton (_app, config) {
  config = config || {};

  mixins.apply(_app);
  modules.apply(_app);
};
