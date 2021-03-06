/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.1.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the EffectiveNetworkSecurityGroup class.
 * @constructor
 * Effective network security group.
 *
 * @member {object} [networkSecurityGroup] The ID of network security group
 * that is applied.
 *
 * @member {string} [networkSecurityGroup.id] Resource ID.
 *
 * @member {object} [association]
 *
 * @member {object} [association.subnet] The ID of the subnet if assigned.
 *
 * @member {string} [association.subnet.id] Resource ID.
 *
 * @member {object} [association.networkInterface] The ID of the network
 * interface if assigned.
 *
 * @member {string} [association.networkInterface.id] Resource ID.
 *
 * @member {array} [effectiveSecurityRules] A collection of effective security
 * rules.
 *
 */
class EffectiveNetworkSecurityGroup {
  constructor() {
  }

  /**
   * Defines the metadata of EffectiveNetworkSecurityGroup
   *
   * @returns {object} metadata of EffectiveNetworkSecurityGroup
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EffectiveNetworkSecurityGroup',
      type: {
        name: 'Composite',
        className: 'EffectiveNetworkSecurityGroup',
        modelProperties: {
          networkSecurityGroup: {
            required: false,
            serializedName: 'networkSecurityGroup',
            type: {
              name: 'Composite',
              className: 'SubResource'
            }
          },
          association: {
            required: false,
            serializedName: 'association',
            type: {
              name: 'Composite',
              className: 'EffectiveNetworkSecurityGroupAssociation'
            }
          },
          effectiveSecurityRules: {
            required: false,
            serializedName: 'effectiveSecurityRules',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'EffectiveNetworkSecurityRuleElementType',
                  type: {
                    name: 'Composite',
                    className: 'EffectiveNetworkSecurityRule'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = EffectiveNetworkSecurityGroup;
