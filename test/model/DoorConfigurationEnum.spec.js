/*
 * InLane API
 * InLane communication Web Api
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.29
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.InLaneApi);
  }
}(this, function(expect, InLaneApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('DoorConfigurationEnum', function() {
      beforeEach(function() {
        instance = InLaneApi.DoorConfigurationEnum;
      });

      it('should create an instance of DoorConfigurationEnum', function() {
        // TODO: update the code to test DoorConfigurationEnum
        expect(instance).to.be.a('object');
      });

      it('should have the property none', function() {
        expect(instance).to.have.property('none');
        expect(instance.none).to.be("none");
      });

      it('should have the property onePerModule', function() {
        expect(instance).to.have.property('onePerModule');
        expect(instance.onePerModule).to.be("onePerModule");
      });

      it('should have the property unique', function() {
        expect(instance).to.have.property('unique');
        expect(instance.unique).to.be("unique");
      });

    });
  });

}));
