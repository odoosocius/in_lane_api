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
    describe('DeviceGlobalStatusEnum', function() {
      beforeEach(function() {
        instance = InLaneApi.DeviceGlobalStatusEnum;
      });

      it('should create an instance of DeviceGlobalStatusEnum', function() {
        // TODO: update the code to test DeviceGlobalStatusEnum
        expect(instance).to.be.a('object');
      });

      it('should have the property ok', function() {
        expect(instance).to.have.property('ok');
        expect(instance.ok).to.be("ok");
      });

      it('should have the property ko', function() {
        expect(instance).to.have.property('ko');
        expect(instance.ko).to.be("ko");
      });

      it('should have the property partiallyWorking', function() {
        expect(instance).to.have.property('partiallyWorking');
        expect(instance.partiallyWorking).to.be("partiallyWorking");
      });

      it('should have the property busy', function() {
        expect(instance).to.have.property('busy');
        expect(instance.busy).to.be("busy");
      });

      it('should have the property offline', function() {
        expect(instance).to.have.property('offline');
        expect(instance.offline).to.be("offline");
      });

      it('should have the property warning', function() {
        expect(instance).to.have.property('warning');
        expect(instance.warning).to.be("warning");
      });

      it('should have the property warningCIT', function() {
        expect(instance).to.have.property('warningCIT');
        expect(instance.warningCIT).to.be("warningCIT");
      });

      it('should have the property technicalInterventionRequired', function() {
        expect(instance).to.have.property('technicalInterventionRequired');
        expect(instance.technicalInterventionRequired).to.be("technicalInterventionRequired");
      });

      it('should have the property notConfigured', function() {
        expect(instance).to.have.property('notConfigured');
        expect(instance.notConfigured).to.be("notConfigured");
      });

    });
  });

}));
