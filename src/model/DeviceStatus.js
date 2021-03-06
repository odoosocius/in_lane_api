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
import {DeviceGlobalStatusEnum} from './DeviceGlobalStatusEnum';
import {DoorStatus} from './DoorStatus';
import {ModuleStatus} from './ModuleStatus';
import {StockStatus} from './StockStatus';

/**
 * The DeviceStatus model module.
 * @module model/DeviceStatus
 * @version v1
 */
export class DeviceStatus {
  /**
   * Constructs a new <code>DeviceStatus</code>.
   * @alias module:model/DeviceStatus
   * @class
   * @param globalStatus {module:model/DeviceGlobalStatusEnum} 
   * @param errorCode {Number} Main Error Code  * `0` - No error  * `10` - Machine busy  * `13` - The device is blocked  * `15` - The command failed  * `18` - Not allowed command  * `49` - Cover in a wrong position  * `120` - Machine not ready  * `121` - Configuration error  * `9200` - Device offline  * `9302` - Only service allowed  * `9999` - Unknown end result
   * @param blockingError {Boolean} Blocking Error
   * @param inspectionRequired {Boolean} Inspection required - it is mandatory to inspect the area of the module with status KO (opening the cover)
   * @param banknotesModuleStatus {module:model/ModuleStatus} 
   * @param coinsModuleStatus {module:model/ModuleStatus} 
   * @param safeDoors {Array.<module:model/DoorStatus>} Safe door/doors status
   * @param stocksStatus {Array.<module:model/StockStatus>} Stocks status
   */
  constructor(globalStatus, errorCode, blockingError, inspectionRequired, banknotesModuleStatus, coinsModuleStatus, safeDoors, stocksStatus) {
    this.globalStatus = globalStatus;
    this.errorCode = errorCode;
    this.blockingError = blockingError;
    this.inspectionRequired = inspectionRequired;
    this.banknotesModuleStatus = banknotesModuleStatus;
    this.coinsModuleStatus = coinsModuleStatus;
    this.safeDoors = safeDoors;
    this.stocksStatus = stocksStatus;
  }

  /**
   * Constructs a <code>DeviceStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceStatus} obj Optional instance to populate.
   * @return {module:model/DeviceStatus} The populated <code>DeviceStatus</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeviceStatus();
      if (data.hasOwnProperty('globalStatus'))
        obj.globalStatus = DeviceGlobalStatusEnum.constructFromObject(data['globalStatus']);
      if (data.hasOwnProperty('errorCode'))
        obj.errorCode = ApiClient.convertToType(data['errorCode'], 'Number');
      if (data.hasOwnProperty('blockingError'))
        obj.blockingError = ApiClient.convertToType(data['blockingError'], 'Boolean');
      if (data.hasOwnProperty('inspectionRequired'))
        obj.inspectionRequired = ApiClient.convertToType(data['inspectionRequired'], 'Boolean');
      if (data.hasOwnProperty('banknotesModuleStatus'))
        obj.banknotesModuleStatus = ModuleStatus.constructFromObject(data['banknotesModuleStatus']);
      if (data.hasOwnProperty('coinsModuleStatus'))
        obj.coinsModuleStatus = ModuleStatus.constructFromObject(data['coinsModuleStatus']);
      if (data.hasOwnProperty('safeDoors'))
        obj.safeDoors = ApiClient.convertToType(data['safeDoors'], [DoorStatus]);
      if (data.hasOwnProperty('stocksStatus'))
        obj.stocksStatus = ApiClient.convertToType(data['stocksStatus'], [StockStatus]);
    }
    return obj;
  }
}

/**
 * @member {module:model/DeviceGlobalStatusEnum} globalStatus
 */
DeviceStatus.prototype.globalStatus = undefined;

/**
 * Main Error Code  * `0` - No error  * `10` - Machine busy  * `13` - The device is blocked  * `15` - The command failed  * `18` - Not allowed command  * `49` - Cover in a wrong position  * `120` - Machine not ready  * `121` - Configuration error  * `9200` - Device offline  * `9302` - Only service allowed  * `9999` - Unknown end result
 * @member {Number} errorCode
 */
DeviceStatus.prototype.errorCode = undefined;

/**
 * Blocking Error
 * @member {Boolean} blockingError
 */
DeviceStatus.prototype.blockingError = undefined;

/**
 * Inspection required - it is mandatory to inspect the area of the module with status KO (opening the cover)
 * @member {Boolean} inspectionRequired
 */
DeviceStatus.prototype.inspectionRequired = undefined;

/**
 * @member {module:model/ModuleStatus} banknotesModuleStatus
 */
DeviceStatus.prototype.banknotesModuleStatus = undefined;

/**
 * @member {module:model/ModuleStatus} coinsModuleStatus
 */
DeviceStatus.prototype.coinsModuleStatus = undefined;

/**
 * Safe door/doors status
 * @member {Array.<module:model/DoorStatus>} safeDoors
 */
DeviceStatus.prototype.safeDoors = undefined;

/**
 * Stocks status
 * @member {Array.<module:model/StockStatus>} stocksStatus
 */
DeviceStatus.prototype.stocksStatus = undefined;

