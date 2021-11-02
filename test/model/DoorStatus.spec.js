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
    describe('DoorStatus', function() {
      beforeEach(function() {
        instance = new InLaneApi.DoorStatus();
      });

      it('should create an instance of DoorStatus', function() {
        // TODO: update the code to test DoorStatus
        expect(instance).to.be.a(InLaneApi.DoorStatus);
      });

      it('should have the property doorType (base name: "doorType")', function() {
        // TODO: update the code to test the property doorType
        expect(instance).to.have.property('doorType');
        // expect(instance.doorType).to.be(expectedValueLiteral);
      });

      it('should have the property opened (base name: "opened")', function() {
        // TODO: update the code to test the property opened
        expect(instance).to.have.property('opened');
        // expect(instance.opened).to.be(expectedValueLiteral);
      });

      it('should have the property shutterOpened (base name: "shutterOpened")', function() {
        // TODO: update the code to test the property shutterOpened
        expect(instance).to.have.property('shutterOpened');
        // expect(instance.shutterOpened).to.be(expectedValueLiteral);
      });

      it('should have the property shaftOpened (base name: "shaftOpened")', function() {
        // TODO: update the code to test the property shaftOpened
        expect(instance).to.have.property('shaftOpened');
        // expect(instance.shaftOpened).to.be(expectedValueLiteral);
      });

    });
  });

}));