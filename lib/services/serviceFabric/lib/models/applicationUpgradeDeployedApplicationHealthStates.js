/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ApplicationUpgradeDeployedApplicationHealthStates class.
 * @constructor
 * The states of the deployed application health
 *
 * @member {string} [domainName]
 *
 * @member {string} [nodeUpgradeProgressList]
 *
 */
class ApplicationUpgradeDeployedApplicationHealthStates {
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationUpgradeDeployedApplicationHealthStates
   *
   * @returns {object} metadata of ApplicationUpgradeDeployedApplicationHealthStates
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationUpgrade_DeployedApplicationHealthStates',
      type: {
        name: 'Composite',
        className: 'ApplicationUpgradeDeployedApplicationHealthStates',
        modelProperties: {
          domainName: {
            required: false,
            serializedName: 'DomainName',
            type: {
              name: 'String'
            }
          },
          nodeUpgradeProgressList: {
            required: false,
            serializedName: 'NodeUpgradeProgressList',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationUpgradeDeployedApplicationHealthStates;
