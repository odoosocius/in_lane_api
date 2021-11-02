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
import {CashCount} from './CashCount';
import {DepositStatus} from './DepositStatus';
import {ErrorCode} from './ErrorCode';
import {OperationStatusEnum} from './OperationStatusEnum';

/**
 * The RefillOperationStatus model module.
 * @module model/RefillOperationStatus
 * @version v1
 */
export class RefillOperationStatus {
  /**
   * Constructs a new <code>RefillOperationStatus</code>.
   * @alias module:model/RefillOperationStatus
   * @class
   * @param counting {Array.<module:model/CashCount>} Refill countings
   * @param status {module:model/OperationStatusEnum} 
   * @param errorDescription {module:model/ErrorCode} 
   */
  constructor(counting, status, errorDescription) {
    this.counting = counting;
    this.status = status;
    this.errorDescription = errorDescription;
  }

  /**
   * Constructs a <code>RefillOperationStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RefillOperationStatus} obj Optional instance to populate.
   * @return {module:model/RefillOperationStatus} The populated <code>RefillOperationStatus</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RefillOperationStatus();
      if (data.hasOwnProperty('depositStatus'))
        obj.depositStatus = DepositStatus.constructFromObject(data['depositStatus']);
      if (data.hasOwnProperty('counting'))
        obj.counting = ApiClient.convertToType(data['counting'], [CashCount]);
      if (data.hasOwnProperty('status'))
        obj.status = OperationStatusEnum.constructFromObject(data['status']);
      if (data.hasOwnProperty('errorDescription'))
        obj.errorDescription = ErrorCode.constructFromObject(data['errorDescription']);
    }
    return obj;
  }
}

/**
 * @member {module:model/DepositStatus} depositStatus
 */
RefillOperationStatus.prototype.depositStatus = undefined;

/**
 * Refill countings
 * @member {Array.<module:model/CashCount>} counting
 */
RefillOperationStatus.prototype.counting = undefined;

/**
 * @member {module:model/OperationStatusEnum} status
 */
RefillOperationStatus.prototype.status = undefined;

/**
 * @member {module:model/ErrorCode} errorDescription
 */
RefillOperationStatus.prototype.errorDescription = undefined;
