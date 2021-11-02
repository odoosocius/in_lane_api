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
import {CashMediaType} from './CashMediaType';
import {DenominationConfig} from './DenominationConfig';
import {StockTypeEnum} from './StockTypeEnum';
import {StockWorkmodeEnum} from './StockWorkmodeEnum';

/**
 * The StockConfiguration model module.
 * @module model/StockConfiguration
 * @version v1
 */
export class StockConfiguration {
  /**
   * Constructs a new <code>StockConfiguration</code>.
   * @alias module:model/StockConfiguration
   * @class
   * @param index {Number} Stock index (the first has index 0, not 1)
   * @param cashMediaType {module:model/CashMediaType} 
   * @param stockType {module:model/StockTypeEnum} 
   * @param workmode {module:model/StockWorkmodeEnum} 
   * @param acceptedDenominations {Array.<module:model/DenominationConfig>} List of denominations configured
   */
  constructor(index, cashMediaType, stockType, workmode, acceptedDenominations) {
    this.index = index;
    this.cashMediaType = cashMediaType;
    this.stockType = stockType;
    this.workmode = workmode;
    this.acceptedDenominations = acceptedDenominations;
  }

  /**
   * Constructs a <code>StockConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StockConfiguration} obj Optional instance to populate.
   * @return {module:model/StockConfiguration} The populated <code>StockConfiguration</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StockConfiguration();
      if (data.hasOwnProperty('index'))
        obj.index = ApiClient.convertToType(data['index'], 'Number');
      if (data.hasOwnProperty('cashMediaType'))
        obj.cashMediaType = CashMediaType.constructFromObject(data['cashMediaType']);
      if (data.hasOwnProperty('stockType'))
        obj.stockType = StockTypeEnum.constructFromObject(data['stockType']);
      if (data.hasOwnProperty('workmode'))
        obj.workmode = StockWorkmodeEnum.constructFromObject(data['workmode']);
      if (data.hasOwnProperty('acceptedDenominations'))
        obj.acceptedDenominations = ApiClient.convertToType(data['acceptedDenominations'], [DenominationConfig]);
    }
    return obj;
  }
}

/**
 * Stock index (the first has index 0, not 1)
 * @member {Number} index
 */
StockConfiguration.prototype.index = undefined;

/**
 * @member {module:model/CashMediaType} cashMediaType
 */
StockConfiguration.prototype.cashMediaType = undefined;

/**
 * @member {module:model/StockTypeEnum} stockType
 */
StockConfiguration.prototype.stockType = undefined;

/**
 * @member {module:model/StockWorkmodeEnum} workmode
 */
StockConfiguration.prototype.workmode = undefined;

/**
 * List of denominations configured
 * @member {Array.<module:model/DenominationConfig>} acceptedDenominations
 */
StockConfiguration.prototype.acceptedDenominations = undefined;
