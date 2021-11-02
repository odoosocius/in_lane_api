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
import {ApiClient} from '../ApiClient';

/**
 * The StartOperationResponse model module.
 * @module model/StartOperationResponse
 * @version v1
 */
export class StartOperationResponse {
  /**
   * Constructs a new <code>StartOperationResponse</code>.
   * @alias module:model/StartOperationResponse
   * @class
   * @param transactionId {Number} Transaction unique identifier
   */
  constructor(transactionId) {
    this.transactionId = transactionId;
  }

  /**
   * Constructs a <code>StartOperationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StartOperationResponse} obj Optional instance to populate.
   * @return {module:model/StartOperationResponse} The populated <code>StartOperationResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StartOperationResponse();
      if (data.hasOwnProperty('transactionId'))
        obj.transactionId = ApiClient.convertToType(data['transactionId'], 'Number');
    }
    return obj;
  }
}

/**
 * Transaction unique identifier
 * @member {Number} transactionId
 */
StartOperationResponse.prototype.transactionId = undefined;

