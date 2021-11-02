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
    describe('StockStatusEnum', function() {
      beforeEach(function() {
        instance = InLaneApi.StockStatusEnum;
      });

      it('should create an instance of StockStatusEnum', function() {
        // TODO: update the code to test StockStatusEnum
        expect(instance).to.be.a('object');
      });

      it('should have the property disabled', function() {
        expect(instance).to.have.property('disabled');
        expect(instance.disabled).to.be("disabled");
      });

      it('should have the property ok', function() {
        expect(instance).to.have.property('ok');
        expect(instance.ok).to.be("ok");
      });

      it('should have the property nearEmpty', function() {
        expect(instance).to.have.property('nearEmpty');
        expect(instance.nearEmpty).to.be("nearEmpty");
      });

      it('should have the property empty', function() {
        expect(instance).to.have.property('empty');
        expect(instance.empty).to.be("empty");
      });

      it('should have the property nearFull', function() {
        expect(instance).to.have.property('nearFull');
        expect(instance.nearFull).to.be("nearFull");
      });

      it('should have the property full', function() {
        expect(instance).to.have.property('full');
        expect(instance.full).to.be("full");
      });

      it('should have the property possibleMiscount', function() {
        expect(instance).to.have.property('possibleMiscount');
        expect(instance.possibleMiscount).to.be("possibleMiscount");
      });

      it('should have the property blocked', function() {
        expect(instance).to.have.property('blocked');
        expect(instance.blocked).to.be("blocked");
      });

      it('should have the property unlocked', function() {
        expect(instance).to.have.property('unlocked');
        expect(instance.unlocked).to.be("unlocked");
      });

      it('should have the property removed', function() {
        expect(instance).to.have.property('removed');
        expect(instance.removed).to.be("removed");
      });

    });
  });

}));
