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
 * Enum class DepositStatus.
 * @enum {String}
 * @readonly
 */
const DepositStatus = {
  /**
   * value: "running"
   * @const
   */
  running: "running",

  /**
   * value: "jammed"
   * @const
   */
  jammed: "jammed",

  /**
   * value: "done"
   * @const
   */
  done: "done",

  /**
   * value: "depositNotesIn"
   * @const
   */
  depositNotesIn: "depositNotesIn",

  /**
   * value: "removeNotesOut"
   * @const
   */
  removeNotesOut: "removeNotesOut",

  /**
   * Returns a <code>DepositStatus</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/DepositStatus} The enum <code>DepositStatus</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {DepositStatus};