var inflect = require('i')();

exports.getPropertyName = function getPropertyName (pluginName, prefix) {
  return inflect.camelize(pluginName.replace(prefix, ''), false);
};
