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
    instance = new InLaneApi.ContentApi();
  });

  describe('(package)', function() {
    describe('ContentApi', function() {
      describe('apiV1ContentAlertsGet', function() {
        it('should call apiV1ContentAlertsGet successfully', function(done) {
          // TODO: uncomment apiV1ContentAlertsGet call and complete the assertions
          /*

          instance.apiV1ContentAlertsGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(InLaneApi.ContentAlert);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1ContentCountingGet', function() {
        it('should call apiV1ContentCountingGet successfully', function(done) {
          // TODO: uncomment apiV1ContentCountingGet call and complete the assertions
          /*

          instance.apiV1ContentCountingGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(InLaneApi.DeviceCountingResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1ContentGet', function() {
        it('should call apiV1ContentGet successfully', function(done) {
          // TODO: uncomment apiV1ContentGet call and complete the assertions
          /*

          instance.apiV1ContentGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(InLaneApi.DeviceContentResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1ContentResetCountingPost', function() {
        it('should call apiV1ContentResetCountingPost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1ContentResetCountingPost call
          /*

          instance.apiV1ContentResetCountingPost(body, function(error, data, response) {
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
    });
  });

}));
