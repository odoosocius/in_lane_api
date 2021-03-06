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
import {ApiClient} from "../ApiClient";
import {CassetteCollectionOperationStatus} from '../model/CassetteCollectionOperationStatus';
import {CommandFailedResponse} from '../model/CommandFailedResponse';
import {ProblemDetails} from '../model/ProblemDetails';
import {StartOperationResponse} from '../model/StartOperationResponse';

/**
* CassetteCollection service.
* @module api/CassetteCollectionApi
* @version v1
*/
export class CassetteCollectionApi {

    /**
    * Constructs a new CassetteCollectionApi. 
    * @alias module:api/CassetteCollectionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the apiV1OperationCassetteCollectionReleaseCassettePost operation.
     * @callback moduleapi/CassetteCollectionApi~apiV1OperationCassetteCollectionReleaseCassettePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Command to release the hook of the cassette for 30 seconds
     * It is required to send this command when the cassetteCollectionStatus is askCassetteHookRelease  to release the hook used to lock the cassette for 30 seconds
     * @param {module:api/CassetteCollectionApi~apiV1OperationCassetteCollectionReleaseCassettePostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    apiV1OperationCassetteCollectionReleaseCassettePost(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/v1/operation/CassetteCollection/releaseCassette', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiV1OperationCassetteCollectionStartPost operation.
     * @callback moduleapi/CassetteCollectionApi~apiV1OperationCassetteCollectionStartPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StartOperationResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start a new banknotes cassette collection operation
     * Request to start a new banknotes cassette collection operation.  This flow allows to remove and empty the cassette.
     * @param {Object} opts Optional parameters
     * @param {String} opts.transactionRef Optional text to be linked to the transaction (for example it could be the transaction identifier in the client application or the POS transaction identifier or the ticket identifier)
     * @param {module:api/CassetteCollectionApi~apiV1OperationCassetteCollectionStartPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiV1OperationCassetteCollectionStartPost(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'transactionRef': opts['transactionRef']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = StartOperationResponse;

      return this.apiClient.callApi(
        '/api/v1/operation/CassetteCollection/start', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiV1OperationCassetteCollectionStatusGet operation.
     * @callback moduleapi/CassetteCollectionApi~apiV1OperationCassetteCollectionStatusGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CassetteCollectionOperationStatus{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the status of the cassette collection operation
     * Request to retrieve the status of the cassette collection operation, once the transfer is started - minimum time between 2 requests 300ms -  Once the cover has been opened the hook used to lock the cassette will be automatically released for 30 seconds.   If the cassette will not be removed in the 30 seconds, the cassetteCollectionStatus will became askCassetteHookRelease  and it is required to send a ReleaseCassette command to release the hook again for other 30 seconds.  Leaving the hook released for more than 30 seconds can damage the device hardware.
     * @param {module:api/CassetteCollectionApi~apiV1OperationCassetteCollectionStatusGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiV1OperationCassetteCollectionStatusGet(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CassetteCollectionOperationStatus;

      return this.apiClient.callApi(
        '/api/v1/operation/CassetteCollection/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}