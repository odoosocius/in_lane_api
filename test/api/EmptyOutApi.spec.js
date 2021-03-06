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
    instance = new InLaneApi.EmptyOutApi();
  });

  describe('(package)', function() {
    describe('EmptyOutApi', function() {
      describe('apiV1OperationEmptyOutStartPost', function() {
        it('should call apiV1OperationEmptyOutStartPost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1OperationEmptyOutStartPost call and complete the assertions
          /*
          var opts = {};

          instance.apiV1OperationEmptyOutStartPost(body, opts, function(error, data, response) {
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
      describe('apiV1OperationEmptyOutStatusGet', function() {
        it('should call apiV1OperationEmptyOutStatusGet successfully', function(done) {
          // TODO: uncomment apiV1OperationEmptyOutStatusGet call and complete the assertions
          /*

          instance.apiV1OperationEmptyOutStatusGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(InLaneApi.EmptyOutOperationStatus);

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
