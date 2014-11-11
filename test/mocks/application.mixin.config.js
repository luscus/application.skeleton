var pless = require('prototype-less'),
    template = {
      alias: 'newApp',
      config: {
        version: '1.1.1'
      }
    };



exports.apply = function apply (_app) {
  pless.mixin(_app, template);
};

