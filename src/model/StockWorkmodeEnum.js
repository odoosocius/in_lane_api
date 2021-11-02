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
 * Enum class StockWorkmodeEnum.
 * @enum {String}
 * @readonly
 */
const StockWorkmodeEnum = {
  /**
   * value: "disabled"
   * @const
   */
  disabled: "disabled",

  /**
   * value: "cashIn"
   * @const
   */
  cashIn: "cashIn",

  /**
   * value: "recycle"
   * @const
   */
  recycle: "recycle",

  /**
   * value: "escrow"
   * @const
   */
  escrow: "escrow",

  /**
   * value: "counterfeit"
   * @const
   */
  counterfeit: "counterfeit",

  /**
   * value: "suspect"
   * @const
   */
  suspect: "suspect",

  /**
   * value: "unfit"
   * @const
   */
  unfit: "unfit",

  /**
   * Returns a <code>StockWorkmodeEnum</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/StockWorkmodeEnum} The enum <code>StockWorkmodeEnum</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {StockWorkmodeEnum};