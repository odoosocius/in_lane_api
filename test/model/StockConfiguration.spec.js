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
    describe('StockConfiguration', function() {
      beforeEach(function() {
        instance = new InLaneApi.StockConfiguration();
      });

      it('should create an instance of StockConfiguration', function() {
        // TODO: update the code to test StockConfiguration
        expect(instance).to.be.a(InLaneApi.StockConfiguration);
      });

      it('should have the property index (base name: "index")', function() {
        // TODO: update the code to test the property index
        expect(instance).to.have.property('index');
        // expect(instance.index).to.be(expectedValueLiteral);
      });

      it('should have the property cashMediaType (base name: "cashMediaType")', function() {
        // TODO: update the code to test the property cashMediaType
        expect(instance).to.have.property('cashMediaType');
        // expect(instance.cashMediaType).to.be(expectedValueLiteral);
      });

      it('should have the property stockType (base name: "stockType")', function() {
        // TODO: update the code to test the property stockType
        expect(instance).to.have.property('stockType');
        // expect(instance.stockType).to.be(expectedValueLiteral);
      });

      it('should have the property workmode (base name: "workmode")', function() {
        // TODO: update the code to test the property workmode
        expect(instance).to.have.property('workmode');
        // expect(instance.workmode).to.be(expectedValueLiteral);
      });

      it('should have the property acceptedDenominations (base name: "acceptedDenominations")', function() {
        // TODO: update the code to test the property acceptedDenominations
        expect(instance).to.have.property('acceptedDenominations');
        // expect(instance.acceptedDenominations).to.be(expectedValueLiteral);
      });

    });
  });

}));
