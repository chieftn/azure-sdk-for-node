/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * Features
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the FeatureClient.
 */
export interface Features {

    /**
     * Gets a list of previewed features for all the providers in the current
     * subscription.
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listAll(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeatureOperationsListResult>): void;
    listAll(callback: ServiceCallback<models.FeatureOperationsListResult>): void;

    /**
     * Gets a list of previewed features of a resource provider.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource
     * provider.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    list(resourceProviderNamespace: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeatureOperationsListResult>): void;
    list(resourceProviderNamespace: string, callback: ServiceCallback<models.FeatureOperationsListResult>): void;

    /**
     * Get all features under the subscription.
     *
     * @param {string} resourceProviderNamespace Namespace of the resource
     * provider.
     * 
     * @param {string} featureName Previewed feature name in the resource provider.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    get(resourceProviderNamespace: string, featureName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeatureResult>): void;
    get(resourceProviderNamespace: string, featureName: string, callback: ServiceCallback<models.FeatureResult>): void;

    /**
     * Registers for a previewed feature of a resource provider.
     *
     * @param {string} resourceProviderNamespace Namespace of the resource
     * provider.
     * 
     * @param {string} featureName Previewed feature name in the resource provider.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    register(resourceProviderNamespace: string, featureName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeatureResult>): void;
    register(resourceProviderNamespace: string, featureName: string, callback: ServiceCallback<models.FeatureResult>): void;

    /**
     * Gets a list of previewed features for all the providers in the current
     * subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listAllNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeatureOperationsListResult>): void;
    listAllNext(nextPageLink: string, callback: ServiceCallback<models.FeatureOperationsListResult>): void;

    /**
     * Gets a list of previewed features of a resource provider.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeatureOperationsListResult>): void;
    listNext(nextPageLink: string, callback: ServiceCallback<models.FeatureOperationsListResult>): void;
}