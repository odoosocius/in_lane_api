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
    describe('TrayStatusEnum', function() {
      beforeEach(function() {
        instance = InLaneApi.TrayStatusEnum;
      });

      it('should create an instance of TrayStatusEnum', function() {
        // TODO: update the code to test TrayStatusEnum
        expect(instance).to.be.a('object');
      });

      it('should have the property unknown', function() {
        expect(instance).to.have.property('unknown');
        expect(instance.unknown).to.be("unknown");
      });

      it('should have the property empty', function() {
        expect(instance).to.have.property('empty');
        expect(instance.empty).to.be("empty");
      });

      it('should have the property full', function() {
        expect(instance).to.have.property('full');
        expect(instance.full).to.be("full");
      });

    });
  });

}));
