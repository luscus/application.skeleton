var should = require('chai').should(),
    skeleton = require('../lib/application.skeleton');


describe('Applying application mixins:', function(){
  var application = {
    id: 'myApp',
    alias: 'oldApp',
    config: {
      version: '0.0.1'
    }
  };

  var finder = require('package.loader');
  finder.mock('application.mixin.config', require('./mocks/application.mixin.config'));
  finder.mock('application.module.crypto', require('./mocks/application.module.crypto'));

  skeleton(application);

  it('application is an Object', function(){
    application.should.be.a('object');
  });

  it('application has an "id" property', function(){
    application.should.have.property('id', 'myApp');
  });

  it('application has overwritten "alias" property', function(){
    application.should.have.property('alias', 'newApp');
  });

  it('application has an "crypto" property', function(){
    application.should.have.property('crypto');
  });

  it('application.config is an Object', function(){
    application.config.should.be.a('object');
  });

  it('application.config has overwritten deep property "version"', function(){
    application.config.should.have.property('version', '1.1.1');
  });
});
