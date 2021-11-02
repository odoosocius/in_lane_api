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
    describe('ManualRefillOperationStatus', function() {
      beforeEach(function() {
        instance = new InLaneApi.ManualRefillOperationStatus();
      });

      it('should create an instance of ManualRefillOperationStatus', function() {
        // TODO: update the code to test ManualRefillOperationStatus
        expect(instance).to.be.a(InLaneApi.ManualRefillOperationStatus);
      });

      it('should have the property manualRefillStatus (base name: "manualRefillStatus")', function() {
        // TODO: update the code to test the property manualRefillStatus
        expect(instance).to.have.property('manualRefillStatus');
        // expect(instance.manualRefillStatus).to.be(expectedValueLiteral);
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
