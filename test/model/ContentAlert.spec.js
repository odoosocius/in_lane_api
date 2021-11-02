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
    describe('ContentAlert', function() {
      beforeEach(function() {
        instance = new InLaneApi.ContentAlert();
      });

      it('should create an instance of ContentAlert', function() {
        // TODO: update the code to test ContentAlert
        expect(instance).to.be.a(InLaneApi.ContentAlert);
      });

      it('should have the property machineId (base name: "machineId")', function() {
        // TODO: update the code to test the property machineId
        expect(instance).to.have.property('machineId');
        // expect(instance.machineId).to.be(expectedValueLiteral);
      });

      it('should have the property denomination (base name: "denomination")', function() {
        // TODO: update the code to test the property denomination
        expect(instance).to.have.property('denomination');
        // expect(instance.denomination).to.be(expectedValueLiteral);
      });

      it('should have the property quantity (base name: "quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

    });
  });

}));
