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

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the SiteConfigResource class.
 * @constructor
 * Web app configuration ARM resource.
 *
 * @member {number} [numberOfWorkers] Number of workers.
 *
 * @member {array} [defaultDocuments] Default documents.
 *
 * @member {string} [netFrameworkVersion] .NET Framework version. Default
 * value: 'v4.6' .
 *
 * @member {string} [phpVersion] Version of PHP.
 *
 * @member {string} [pythonVersion] Version of Python.
 *
 * @member {string} [nodeVersion] Version of Node.js.
 *
 * @member {string} [linuxFxVersion] Linux App Framework and version
 *
 * @member {boolean} [requestTracingEnabled] <code>true</code> if request
 * tracing is enabled; otherwise, <code>false</code>.
 *
 * @member {date} [requestTracingExpirationTime] Request tracing expiration
 * time.
 *
 * @member {boolean} [remoteDebuggingEnabled] <code>true</code> if remote
 * debugging is enabled; otherwise, <code>false</code>.
 *
 * @member {string} [remoteDebuggingVersion] Remote debugging version.
 *
 * @member {boolean} [httpLoggingEnabled] <code>true</code> if HTTP logging is
 * enabled; otherwise, <code>false</code>.
 *
 * @member {number} [logsDirectorySizeLimit] HTTP logs directory size limit.
 *
 * @member {boolean} [detailedErrorLoggingEnabled] <code>true</code> if
 * detailed error logging is enabled; otherwise, <code>false</code>.
 *
 * @member {string} [publishingUsername] Publishing user name.
 *
 * @member {array} [appSettings] Application settings.
 *
 * @member {array} [connectionStrings] Connection strings.
 *
 * @member {object} [machineKey] Site MachineKey.
 *
 * @member {string} [machineKey.validation] MachineKey validation.
 *
 * @member {string} [machineKey.validationKey] Validation key.
 *
 * @member {string} [machineKey.decryption] Decryption.
 *
 * @member {string} [machineKey.decryptionKey] Decryption key.
 *
 * @member {array} [handlerMappings] Handler mappings.
 *
 * @member {string} [documentRoot] Document root.
 *
 * @member {string} [scmType] SCM type. Possible values include: 'None',
 * 'Dropbox', 'Tfs', 'LocalGit', 'GitHub', 'CodePlexGit', 'CodePlexHg',
 * 'BitbucketGit', 'BitbucketHg', 'ExternalGit', 'ExternalHg', 'OneDrive',
 * 'VSO'
 *
 * @member {boolean} [use32BitWorkerProcess] <code>true</code> to use 32-bit
 * worker process; otherwise, <code>false</code>.
 *
 * @member {boolean} [webSocketsEnabled] <code>true</code> if WebSocket is
 * enabled; otherwise, <code>false</code>.
 *
 * @member {boolean} [alwaysOn] <code>true</code> if Always On is enabled;
 * otherwise, <code>false</code>.
 *
 * @member {string} [javaVersion] Java version.
 *
 * @member {string} [javaContainer] Java container.
 *
 * @member {string} [javaContainerVersion] Java container version.
 *
 * @member {string} [appCommandLine] App command line to launch.
 *
 * @member {string} [managedPipelineMode] Managed pipeline mode. Possible
 * values include: 'Integrated', 'Classic'
 *
 * @member {array} [virtualApplications] Virtual applications.
 *
 * @member {string} [loadBalancing] Site load balancing. Possible values
 * include: 'WeightedRoundRobin', 'LeastRequests', 'LeastResponseTime',
 * 'WeightedTotalTraffic', 'RequestHash'
 *
 * @member {object} [experiments] This is work around for polymophic types.
 *
 * @member {array} [experiments.rampUpRules] List of ramp-up rules.
 *
 * @member {object} [limits] Site limits.
 *
 * @member {number} [limits.maxPercentageCpu] Maximum allowed CPU usage
 * percentage.
 *
 * @member {number} [limits.maxMemoryInMb] Maximum allowed memory usage in MB.
 *
 * @member {number} [limits.maxDiskSizeInMb] Maximum allowed disk size usage in
 * MB.
 *
 * @member {boolean} [autoHealEnabled] <code>true</code> if Auto Heal is
 * enabled; otherwise, <code>false</code>.
 *
 * @member {object} [autoHealRules] Auto Heal rules.
 *
 * @member {object} [autoHealRules.triggers] Conditions that describe when to
 * execute the auto-heal actions.
 *
 * @member {object} [autoHealRules.triggers.requests] A rule based on total
 * requests.
 *
 * @member {number} [autoHealRules.triggers.requests.count] Count.
 *
 * @member {string} [autoHealRules.triggers.requests.timeInterval] Time
 * interval.
 *
 * @member {number} [autoHealRules.triggers.privateBytesInKB] A rule based on
 * private bytes.
 *
 * @member {array} [autoHealRules.triggers.statusCodes] A rule based on status
 * codes.
 *
 * @member {object} [autoHealRules.triggers.slowRequests] A rule based on
 * request execution time.
 *
 * @member {string} [autoHealRules.triggers.slowRequests.timeTaken] Time taken.
 *
 * @member {number} [autoHealRules.triggers.slowRequests.count] Count.
 *
 * @member {string} [autoHealRules.triggers.slowRequests.timeInterval] Time
 * interval.
 *
 * @member {object} [autoHealRules.actions] Actions to be executed when a rule
 * is triggered.
 *
 * @member {string} [autoHealRules.actions.actionType] Predefined action to be
 * taken. Possible values include: 'Recycle', 'LogEvent', 'CustomAction'
 *
 * @member {object} [autoHealRules.actions.customAction] Custom action to be
 * taken.
 *
 * @member {string} [autoHealRules.actions.customAction.exe] Executable to be
 * run.
 *
 * @member {string} [autoHealRules.actions.customAction.parameters] Parameters
 * for the executable.
 *
 * @member {string} [autoHealRules.actions.minProcessExecutionTime] Minimum
 * time the process must execute
 * before taking the action
 *
 * @member {string} [tracingOptions] Tracing options.
 *
 * @member {string} [vnetName] Virtual Network name.
 *
 * @member {object} [cors] Cross-Origin Resource Sharing (CORS) settings.
 *
 * @member {array} [cors.allowedOrigins] Gets or sets the list of origins that
 * should be allowed to make cross-origin
 * calls (for example: http://example.com:12345). Use "*" to allow all.
 *
 * @member {object} [push] Push endpoint settings.
 *
 * @member {boolean} [push.isPushEnabled] Gets or sets a flag indicating
 * whether the Push endpoint is enabled.
 *
 * @member {string} [push.tagWhitelistJson] Gets or sets a JSON string
 * containing a list of tags that are whitelisted for use by the push
 * registration endpoint.
 *
 * @member {string} [push.tagsRequiringAuth] Gets or sets a JSON string
 * containing a list of tags that require user authentication to be used in the
 * push registration endpoint.
 * Tags can consist of alphanumeric characters and the following:
 * '_', '@', '#', '.', ':', '-'.
 * Validation should be performed at the PushRequestHandler.
 *
 * @member {string} [push.dynamicTagsJson] Gets or sets a JSON string
 * containing a list of dynamic tags that will be evaluated from user claims in
 * the push registration endpoint.
 *
 * @member {object} [apiDefinition] Information about the formal API definition
 * for the app.
 *
 * @member {string} [apiDefinition.url] The URL of the API definition.
 *
 * @member {string} [autoSwapSlotName] Auto-swap slot name.
 *
 * @member {boolean} [localMySqlEnabled] <code>true</code> to enable local
 * MySQL; otherwise, <code>false</code>. Default value: false .
 *
 * @member {array} [ipSecurityRestrictions] IP security restrictions.
 *
 */
class SiteConfigResource extends models['Resource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SiteConfigResource
   *
   * @returns {object} metadata of SiteConfigResource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SiteConfigResource',
      type: {
        name: 'Composite',
        className: 'SiteConfigResource',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: false,
            serializedName: 'kind',
            type: {
              name: 'String'
            }
          },
          location: {
            required: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          numberOfWorkers: {
            required: false,
            serializedName: 'properties.numberOfWorkers',
            type: {
              name: 'Number'
            }
          },
          defaultDocuments: {
            required: false,
            serializedName: 'properties.defaultDocuments',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          netFrameworkVersion: {
            required: false,
            serializedName: 'properties.netFrameworkVersion',
            defaultValue: 'v4.6',
            type: {
              name: 'String'
            }
          },
          phpVersion: {
            required: false,
            serializedName: 'properties.phpVersion',
            type: {
              name: 'String'
            }
          },
          pythonVersion: {
            required: false,
            serializedName: 'properties.pythonVersion',
            type: {
              name: 'String'
            }
          },
          nodeVersion: {
            required: false,
            serializedName: 'properties.nodeVersion',
            type: {
              name: 'String'
            }
          },
          linuxFxVersion: {
            required: false,
            serializedName: 'properties.linuxFxVersion',
            type: {
              name: 'String'
            }
          },
          requestTracingEnabled: {
            required: false,
            serializedName: 'properties.requestTracingEnabled',
            type: {
              name: 'Boolean'
            }
          },
          requestTracingExpirationTime: {
            required: false,
            serializedName: 'properties.requestTracingExpirationTime',
            type: {
              name: 'DateTime'
            }
          },
          remoteDebuggingEnabled: {
            required: false,
            serializedName: 'properties.remoteDebuggingEnabled',
            type: {
              name: 'Boolean'
            }
          },
          remoteDebuggingVersion: {
            required: false,
            serializedName: 'properties.remoteDebuggingVersion',
            type: {
              name: 'String'
            }
          },
          httpLoggingEnabled: {
            required: false,
            serializedName: 'properties.httpLoggingEnabled',
            type: {
              name: 'Boolean'
            }
          },
          logsDirectorySizeLimit: {
            required: false,
            serializedName: 'properties.logsDirectorySizeLimit',
            type: {
              name: 'Number'
            }
          },
          detailedErrorLoggingEnabled: {
            required: false,
            serializedName: 'properties.detailedErrorLoggingEnabled',
            type: {
              name: 'Boolean'
            }
          },
          publishingUsername: {
            required: false,
            serializedName: 'properties.publishingUsername',
            type: {
              name: 'String'
            }
          },
          appSettings: {
            required: false,
            serializedName: 'properties.appSettings',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'NameValuePairElementType',
                  type: {
                    name: 'Composite',
                    className: 'NameValuePair'
                  }
              }
            }
          },
          connectionStrings: {
            required: false,
            serializedName: 'properties.connectionStrings',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ConnStringInfoElementType',
                  type: {
                    name: 'Composite',
                    className: 'ConnStringInfo'
                  }
              }
            }
          },
          machineKey: {
            required: false,
            readOnly: true,
            serializedName: 'properties.machineKey',
            type: {
              name: 'Composite',
              className: 'SiteMachineKey'
            }
          },
          handlerMappings: {
            required: false,
            serializedName: 'properties.handlerMappings',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'HandlerMappingElementType',
                  type: {
                    name: 'Composite',
                    className: 'HandlerMapping'
                  }
              }
            }
          },
          documentRoot: {
            required: false,
            serializedName: 'properties.documentRoot',
            type: {
              name: 'String'
            }
          },
          scmType: {
            required: false,
            serializedName: 'properties.scmType',
            type: {
              name: 'String'
            }
          },
          use32BitWorkerProcess: {
            required: false,
            serializedName: 'properties.use32BitWorkerProcess',
            type: {
              name: 'Boolean'
            }
          },
          webSocketsEnabled: {
            required: false,
            serializedName: 'properties.webSocketsEnabled',
            type: {
              name: 'Boolean'
            }
          },
          alwaysOn: {
            required: false,
            serializedName: 'properties.alwaysOn',
            type: {
              name: 'Boolean'
            }
          },
          javaVersion: {
            required: false,
            serializedName: 'properties.javaVersion',
            type: {
              name: 'String'
            }
          },
          javaContainer: {
            required: false,
            serializedName: 'properties.javaContainer',
            type: {
              name: 'String'
            }
          },
          javaContainerVersion: {
            required: false,
            serializedName: 'properties.javaContainerVersion',
            type: {
              name: 'String'
            }
          },
          appCommandLine: {
            required: false,
            serializedName: 'properties.appCommandLine',
            type: {
              name: 'String'
            }
          },
          managedPipelineMode: {
            required: false,
            serializedName: 'properties.managedPipelineMode',
            type: {
              name: 'Enum',
              allowedValues: [ 'Integrated', 'Classic' ]
            }
          },
          virtualApplications: {
            required: false,
            serializedName: 'properties.virtualApplications',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'VirtualApplicationElementType',
                  type: {
                    name: 'Composite',
                    className: 'VirtualApplication'
                  }
              }
            }
          },
          loadBalancing: {
            required: false,
            serializedName: 'properties.loadBalancing',
            type: {
              name: 'Enum',
              allowedValues: [ 'WeightedRoundRobin', 'LeastRequests', 'LeastResponseTime', 'WeightedTotalTraffic', 'RequestHash' ]
            }
          },
          experiments: {
            required: false,
            serializedName: 'properties.experiments',
            type: {
              name: 'Composite',
              className: 'Experiments'
            }
          },
          limits: {
            required: false,
            serializedName: 'properties.limits',
            type: {
              name: 'Composite',
              className: 'SiteLimits'
            }
          },
          autoHealEnabled: {
            required: false,
            serializedName: 'properties.autoHealEnabled',
            type: {
              name: 'Boolean'
            }
          },
          autoHealRules: {
            required: false,
            serializedName: 'properties.autoHealRules',
            type: {
              name: 'Composite',
              className: 'AutoHealRules'
            }
          },
          tracingOptions: {
            required: false,
            serializedName: 'properties.tracingOptions',
            type: {
              name: 'String'
            }
          },
          vnetName: {
            required: false,
            serializedName: 'properties.vnetName',
            type: {
              name: 'String'
            }
          },
          cors: {
            required: false,
            serializedName: 'properties.cors',
            type: {
              name: 'Composite',
              className: 'CorsSettings'
            }
          },
          push: {
            required: false,
            serializedName: 'properties.push',
            type: {
              name: 'Composite',
              className: 'PushSettings'
            }
          },
          apiDefinition: {
            required: false,
            serializedName: 'properties.apiDefinition',
            type: {
              name: 'Composite',
              className: 'ApiDefinitionInfo'
            }
          },
          autoSwapSlotName: {
            required: false,
            serializedName: 'properties.autoSwapSlotName',
            type: {
              name: 'String'
            }
          },
          localMySqlEnabled: {
            required: false,
            serializedName: 'properties.localMySqlEnabled',
            defaultValue: false,
            type: {
              name: 'Boolean'
            }
          },
          ipSecurityRestrictions: {
            required: false,
            serializedName: 'properties.ipSecurityRestrictions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'IpSecurityRestrictionElementType',
                  type: {
                    name: 'Composite',
                    className: 'IpSecurityRestriction'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = SiteConfigResource;
