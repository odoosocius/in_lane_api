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
import {DeviceCountingDetail} from './DeviceCountingDetail';

/**
 * The DeviceCountingResponse model module.
 * @module model/DeviceCountingResponse
 * @version v1
 */
export class DeviceCountingResponse {
  /**
   * Constructs a new <code>DeviceCountingResponse</code>.
   * @alias module:model/DeviceCountingResponse
   * @class
   * @param counting {Array.<module:model/DeviceCountingDetail>} Device Counting
   * @param isPartial {Boolean} Flag to notify if the counting are partial because one module is offline
   */
  constructor(counting, isPartial) {
    this.counting = counting;
    this.isPartial = isPartial;
  }

  /**
   * Constructs a <code>DeviceCountingResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceCountingResponse} obj Optional instance to populate.
   * @return {module:model/DeviceCountingResponse} The populated <code>DeviceCountingResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeviceCountingResponse();
      if (data.hasOwnProperty('counting'))
        obj.counting = ApiClient.convertToType(data['counting'], [DeviceCountingDetail]);
      if (data.hasOwnProperty('isPartial'))
        obj.isPartial = ApiClient.convertToType(data['isPartial'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Device Counting
 * @member {Array.<module:model/DeviceCountingDetail>} counting
 */
DeviceCountingResponse.prototype.counting = undefined;

/**
 * Flag to notify if the counting are partial because one module is offline
 * @member {Boolean} isPartial
 */
DeviceCountingResponse.prototype.isPartial = undefined;
