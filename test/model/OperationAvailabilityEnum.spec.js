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
    describe('OperationAvailabilityEnum', function() {
      beforeEach(function() {
        instance = InLaneApi.OperationAvailabilityEnum;
      });

      it('should create an instance of OperationAvailabilityEnum', function() {
        // TODO: update the code to test OperationAvailabilityEnum
        expect(instance).to.be.a('object');
      });

      it('should have the property notExecutable', function() {
        expect(instance).to.have.property('notExecutable');
        expect(instance.notExecutable).to.be("notExecutable");
      });

      it('should have the property executable', function() {
        expect(instance).to.have.property('executable');
        expect(instance.executable).to.be("executable");
      });

    });
  });

}));
