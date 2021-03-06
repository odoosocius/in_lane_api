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
import {Denomination} from './Denomination';

/**
 * The ContentAlert model module.
 * @module model/ContentAlert
 * @version v1
 */
export class ContentAlert {
  /**
   * Constructs a new <code>ContentAlert</code>.
   * @alias module:model/ContentAlert
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ContentAlert</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContentAlert} obj Optional instance to populate.
   * @return {module:model/ContentAlert} The populated <code>ContentAlert</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ContentAlert();
      if (data.hasOwnProperty('machineId'))
        obj.machineId = ApiClient.convertToType(data['machineId'], 'Number');
      if (data.hasOwnProperty('denomination'))
        obj.denomination = Denomination.constructFromObject(data['denomination']);
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} machineId
 */
ContentAlert.prototype.machineId = undefined;

/**
 * @member {module:model/Denomination} denomination
 */
ContentAlert.prototype.denomination = undefined;

/**
 * @member {Number} quantity
 */
ContentAlert.prototype.quantity = undefined;

