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
import {DeviceStatus} from './DeviceStatus';
import {OperationAvailabilityEnum} from './OperationAvailabilityEnum';

/**
 * The DeviceStatusResponse model module.
 * @module model/DeviceStatusResponse
 * @version v1
 */
export class DeviceStatusResponse {
  /**
   * Constructs a new <code>DeviceStatusResponse</code>.
   * @alias module:model/DeviceStatusResponse
   * @class
   * @param deviceStatus {module:model/DeviceStatus} 
   * @param operationsAvailability {Object.<String, module:model/OperationAvailabilityEnum>} Operation availability
   * @param resolutionGifURL {String} Resolution Gif URL  In the case of a module error it can contain an url of a gif to be shown to help the user to solve the problem  There is NOT a gif for all the types of errors, so the field could be empty
   */
  constructor(deviceStatus, operationsAvailability, resolutionGifURL) {
    this.deviceStatus = deviceStatus;
    this.operationsAvailability = operationsAvailability;
    this.resolutionGifURL = resolutionGifURL;
  }

  /**
   * Constructs a <code>DeviceStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceStatusResponse} obj Optional instance to populate.
   * @return {module:model/DeviceStatusResponse} The populated <code>DeviceStatusResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeviceStatusResponse();
      if (data.hasOwnProperty('deviceStatus'))
        obj.deviceStatus = DeviceStatus.constructFromObject(data['deviceStatus']);
      if (data.hasOwnProperty('operationsAvailability'))
        obj.operationsAvailability = ApiClient.convertToType(data['operationsAvailability'], {'String': OperationAvailabilityEnum});
      if (data.hasOwnProperty('resolutionGifURL'))
        obj.resolutionGifURL = ApiClient.convertToType(data['resolutionGifURL'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/DeviceStatus} deviceStatus
 */
DeviceStatusResponse.prototype.deviceStatus = undefined;

/**
 * Operation availability
 * @member {Object.<String, module:model/OperationAvailabilityEnum>} operationsAvailability
 */
DeviceStatusResponse.prototype.operationsAvailability = undefined;

/**
 * Resolution Gif URL  In the case of a module error it can contain an url of a gif to be shown to help the user to solve the problem  There is NOT a gif for all the types of errors, so the field could be empty
 * @member {String} resolutionGifURL
 */
DeviceStatusResponse.prototype.resolutionGifURL = undefined;
