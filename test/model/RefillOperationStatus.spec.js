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
    describe('RefillOperationStatus', function() {
      beforeEach(function() {
        instance = new InLaneApi.RefillOperationStatus();
      });

      it('should create an instance of RefillOperationStatus', function() {
        // TODO: update the code to test RefillOperationStatus
        expect(instance).to.be.a(InLaneApi.RefillOperationStatus);
      });

      it('should have the property depositStatus (base name: "depositStatus")', function() {
        // TODO: update the code to test the property depositStatus
        expect(instance).to.have.property('depositStatus');
        // expect(instance.depositStatus).to.be(expectedValueLiteral);
      });

      it('should have the property counting (base name: "counting")', function() {
        // TODO: update the code to test the property counting
        expect(instance).to.have.property('counting');
        // expect(instance.counting).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property errorDescription (base name: "errorDescription")', function() {
        // TODO: update the code to test the property errorDescription
        expect(instance).to.have.property('errorDescription');
        // expect(instance.errorDescription).to.be(expectedValueLiteral);
      });

    });
  });

}));
