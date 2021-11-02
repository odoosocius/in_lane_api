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
    describe('CountingType', function() {
      beforeEach(function() {
        instance = InLaneApi.CountingType;
      });

      it('should create an instance of CountingType', function() {
        // TODO: update the code to test CountingType
        expect(instance).to.be.a('object');
      });

      it('should have the property content', function() {
        expect(instance).to.have.property('content');
        expect(instance.content).to.be("content");
      });

      it('should have the property available', function() {
        expect(instance).to.have.property('available');
        expect(instance.available).to.be("available");
      });

      it('should have the property unfit', function() {
        expect(instance).to.have.property('unfit');
        expect(instance.unfit).to.be("unfit");
      });

      it('should have the property counterfeit', function() {
        expect(instance).to.have.property('counterfeit');
        expect(instance.counterfeit).to.be("counterfeit");
      });

      it('should have the property suspect', function() {
        expect(instance).to.have.property('suspect');
        expect(instance.suspect).to.be("suspect");
      });

    });
  });

}));