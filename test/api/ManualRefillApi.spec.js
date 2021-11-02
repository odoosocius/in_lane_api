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

  beforeEach(function() {
    instance = new InLaneApi.ManualRefillApi();
  });

  describe('(package)', function() {
    describe('ManualRefillApi', function() {
      describe('apiV1OperationManualRefillNewContentPost', function() {
        it('should call apiV1OperationManualRefillNewContentPost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1OperationManualRefillNewContentPost call
          /*
          var opts = {};

          instance.apiV1OperationManualRefillNewContentPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1OperationManualRefillStartPost', function() {
        it('should call apiV1OperationManualRefillStartPost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1OperationManualRefillStartPost call and complete the assertions
          /*
          var opts = {};

          instance.apiV1OperationManualRefillStartPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(InLaneApi.StartOperationResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1OperationManualRefillStatusGet', function() {
        it('should call apiV1OperationManualRefillStatusGet successfully', function(done) {
          // TODO: uncomment apiV1OperationManualRefillStatusGet call and complete the assertions
          /*

          instance.apiV1OperationManualRefillStatusGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(InLaneApi.ManualRefillOperationStatus);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));