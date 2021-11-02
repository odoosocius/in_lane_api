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
 * The StopPaymentReqData model module.
 * @module model/StopPaymentReqData
 * @version v1
 */
export class StopPaymentReqData {
  /**
   * Constructs a new <code>StopPaymentReqData</code>.
   * Object containing the parameter to enable the rollback of the deposited amount
   * @alias module:model/StopPaymentReqData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>StopPaymentReqData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StopPaymentReqData} obj Optional instance to populate.
   * @return {module:model/StopPaymentReqData} The populated <code>StopPaymentReqData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StopPaymentReqData();
      if (data.hasOwnProperty('rollback'))
        obj.rollback = ApiClient.convertToType(data['rollback'], 'Boolean');
    }
    return obj;
  }
}

/**
 * If true, the InLane will try to dispense back the deposited amount to the user
 * @member {Boolean} rollback
 */
StopPaymentReqData.prototype.rollback = undefined;

