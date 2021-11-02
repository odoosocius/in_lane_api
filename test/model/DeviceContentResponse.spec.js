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
    describe('DeviceContentResponse', function() {
      beforeEach(function() {
        instance = new InLaneApi.DeviceContentResponse();
      });

      it('should create an instance of DeviceContentResponse', function() {
        // TODO: update the code to test DeviceContentResponse
        expect(instance).to.be.a(InLaneApi.DeviceContentResponse);
      });

      it('should have the property deviceContent (base name: "deviceContent")', function() {
        // TODO: update the code to test the property deviceContent
        expect(instance).to.have.property('deviceContent');
        // expect(instance.deviceContent).to.be(expectedValueLiteral);
      });

      it('should have the property isPartial (base name: "isPartial")', function() {
        // TODO: update the code to test the property isPartial
        expect(instance).to.have.property('isPartial');
        // expect(instance.isPartial).to.be(expectedValueLiteral);
      });

    });
  });

}));