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
 * The StartTransferAllButKitClientReqData model module.
 * @module model/StartTransferAllButKitClientReqData
 * @version v1
 */
export class StartTransferAllButKitClientReqData {
  /**
   * Constructs a new <code>StartTransferAllButKitClientReqData</code>.
   * @alias module:model/StartTransferAllButKitClientReqData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>StartTransferAllButKitClientReqData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StartTransferAllButKitClientReqData} obj Optional instance to populate.
   * @return {module:model/StartTransferAllButKitClientReqData} The populated <code>StartTransferAllButKitClientReqData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StartTransferAllButKitClientReqData();
      if (data.hasOwnProperty('banknoteDestinationStockIndex'))
        obj.banknoteDestinationStockIndex = ApiClient.convertToType(data['banknoteDestinationStockIndex'], 'Number');
    }
    return obj;
  }
}

/**
 * Banknotes destination stock index
 * @member {Number} banknoteDestinationStockIndex
 */
StartTransferAllButKitClientReqData.prototype.banknoteDestinationStockIndex = undefined;
