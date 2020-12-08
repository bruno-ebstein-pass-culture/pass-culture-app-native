/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * Service API Document
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1
 * 
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */
import url from "url";

import { getAuthenticationHeaders, handleGeneratedApiResponse } from "api/helpers";
import { EmptyResponse } from 'libs/fetch'

import { Configuration } from "./configuration";

const BASE_PATH = "/".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}

/**
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}

/**
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration?: Configuration;
    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
};

/**
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name = "RequiredError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * 
 * @export
 * @interface AccountRequest
 */
export interface AccountRequest {
    /**
     * 
     * @type {string}
     * @memberof AccountRequest
     */
    birthdate: string;
    /**
     * 
     * @type {string}
     * @memberof AccountRequest
     */
    email: string;
    /**
     * 
     * @type {boolean}
     * @memberof AccountRequest
     */
    hasAllowedRecommendations: boolean;
    /**
     * 
     * @type {string}
     * @memberof AccountRequest
     */
    password: string;
    /**
     * 
     * @type {string}
     * @memberof AccountRequest
     */
    token: string;
}/**
 * 
 * @export
 * @interface RefreshResponse
 */
export interface RefreshResponse {
    /**
     * 
     * @type {string}
     * @memberof RefreshResponse
     */
    accessToken: string;
}/**
 * 
 * @export
 * @interface RequestPasswordResetRequest
 */
export interface RequestPasswordResetRequest {
    /**
     * 
     * @type {string}
     * @memberof RequestPasswordResetRequest
     */
    email: string;
}/**
 * 
 * @export
 * @interface ResetPasswordRequest
 */
export interface ResetPasswordRequest {
    /**
     * 
     * @type {string}
     * @memberof ResetPasswordRequest
     */
    newPassword: string;
    /**
     * 
     * @type {string}
     * @memberof ResetPasswordRequest
     */
    resetPasswordToken: string;
}/**
 * 
 * @export
 * @interface SigninRequest
 */
export interface SigninRequest {
    /**
     * 
     * @type {string}
     * @memberof SigninRequest
     */
    identifier: string;
    /**
     * 
     * @type {string}
     * @memberof SigninRequest
     */
    password: string;
}/**
 * 
 * @export
 * @interface SigninResponse
 */
export interface SigninResponse {
    /**
     * 
     * @type {string}
     * @memberof SigninResponse
     */
    accessToken: string;
    /**
     * 
     * @type {string}
     * @memberof SigninResponse
     */
    refreshToken: string;
}/**
 * 
 * @export
 * @interface UserProfileResponse
 */
export interface UserProfileResponse {
    /**
     * 
     * @type {string}
     * @memberof UserProfileResponse
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof UserProfileResponse
     */
    firstName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserProfileResponse
     */
    isBeneficiary: boolean;
}/**
 * 
 * @export
 * @interface ValidateEmailRequest
 */
export interface ValidateEmailRequest {
    /**
     * 
     * @type {string}
     * @memberof ValidateEmailRequest
     */
    emailValidationToken: string;
}/**
 * 
 * @export
 * @interface ValidateEmailResponse
 */
export interface ValidateEmailResponse {
    /**
     * 
     * @type {string}
     * @memberof ValidateEmailResponse
     */
    accessToken: string;
    /**
     * 
     * @type {string}
     * @memberof ValidateEmailResponse
     */
    idCheckToken?: string;
    /**
     * 
     * @type {string}
     * @memberof ValidateEmailResponse
     */
    refreshToken: string;
}
/**
 * DefaultApi - fetch parameter creator
 * @export
 */
export const DefaultApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary create_account <POST>
         * @param {AccountRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nativeV1AccountPost(body?: AccountRequest, options: any = {}): Promise<FetchArgs> {
            const localVarPath = `/native/v1/account`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = await getAuthenticationHeaders();
            const localVarQueryParameter = {} as any;
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"AccountRequest" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(body || {}) : (body || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary get_user_profile <GET>
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nativeV1MeGet(options: any = {}): Promise<FetchArgs> {
            const localVarPath = `/native/v1/me`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = await getAuthenticationHeaders();
            const localVarQueryParameter = {} as any;
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary refresh <POST>
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nativeV1RefreshAccessTokenPost(options: any = {}): Promise<FetchArgs> {
            const localVarPath = `/native/v1/refresh_access_token`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = await getAuthenticationHeaders();
            const localVarQueryParameter = {} as any;
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary request_password_reset <POST>
         * @param {RequestPasswordResetRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nativeV1RequestPasswordResetPost(body?: RequestPasswordResetRequest, options: any = {}): Promise<FetchArgs> {
            const localVarPath = `/native/v1/request_password_reset`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = await getAuthenticationHeaders();
            const localVarQueryParameter = {} as any;
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"RequestPasswordResetRequest" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(body || {}) : (body || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary reset_password <POST>
         * @param {ResetPasswordRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nativeV1ResetPasswordPost(body?: ResetPasswordRequest, options: any = {}): Promise<FetchArgs> {
            const localVarPath = `/native/v1/reset_password`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = await getAuthenticationHeaders();
            const localVarQueryParameter = {} as any;
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"ResetPasswordRequest" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(body || {}) : (body || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary signin <POST>
         * @param {SigninRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nativeV1SigninPost(body?: SigninRequest, options: any = {}): Promise<FetchArgs> {
            const localVarPath = `/native/v1/signin`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = await getAuthenticationHeaders();
            const localVarQueryParameter = {} as any;
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"SigninRequest" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(body || {}) : (body || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary validate_email <POST>
         * @param {ValidateEmailRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nativeV1ValidateEmailPost(body?: ValidateEmailRequest, options: any = {}): Promise<FetchArgs> {
            const localVarPath = `/native/v1/validate_email`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = await getAuthenticationHeaders();
            const localVarQueryParameter = {} as any;
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"ValidateEmailRequest" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(body || {}) : (body || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary create_account <POST>
         * @param {AccountRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nativeV1AccountPost(basePath: string, body?: AccountRequest, options?: any): Promise<EmptyResponse> {
            const localVarFetchArgs = await DefaultApiFetchParamCreator(configuration).nativeV1AccountPost(body, options);
            const response = await fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options)
            return handleGeneratedApiResponse(response)
        },
        /**
         * 
         * @summary get_user_profile <GET>
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nativeV1MeGet(basePath: string, options?: any): Promise<UserProfileResponse> {
            const localVarFetchArgs = await DefaultApiFetchParamCreator(configuration).nativeV1MeGet(options);
            const response = await fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options)
            return handleGeneratedApiResponse(response)
        },
        /**
         * 
         * @summary refresh <POST>
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nativeV1RefreshAccessTokenPost(basePath: string, options?: any): Promise<RefreshResponse> {
            const localVarFetchArgs = await DefaultApiFetchParamCreator(configuration).nativeV1RefreshAccessTokenPost(options);
            const response = await fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options)
            return handleGeneratedApiResponse(response)
        },
        /**
         * 
         * @summary request_password_reset <POST>
         * @param {RequestPasswordResetRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nativeV1RequestPasswordResetPost(basePath: string, body?: RequestPasswordResetRequest, options?: any): Promise<EmptyResponse> {
            const localVarFetchArgs = await DefaultApiFetchParamCreator(configuration).nativeV1RequestPasswordResetPost(body, options);
            const response = await fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options)
            return handleGeneratedApiResponse(response)
        },
        /**
         * 
         * @summary reset_password <POST>
         * @param {ResetPasswordRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nativeV1ResetPasswordPost(basePath: string, body?: ResetPasswordRequest, options?: any): Promise<EmptyResponse> {
            const localVarFetchArgs = await DefaultApiFetchParamCreator(configuration).nativeV1ResetPasswordPost(body, options);
            const response = await fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options)
            return handleGeneratedApiResponse(response)
        },
        /**
         * 
         * @summary signin <POST>
         * @param {SigninRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nativeV1SigninPost(basePath: string, body?: SigninRequest, options?: any): Promise<SigninResponse> {
            const localVarFetchArgs = await DefaultApiFetchParamCreator(configuration).nativeV1SigninPost(body, options);
            const response = await fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options)
            return handleGeneratedApiResponse(response)
        },
        /**
         * 
         * @summary validate_email <POST>
         * @param {ValidateEmailRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nativeV1ValidateEmailPost(basePath: string, body?: ValidateEmailRequest, options?: any): Promise<ValidateEmailResponse> {
            const localVarFetchArgs = await DefaultApiFetchParamCreator(configuration).nativeV1ValidateEmailPost(body, options);
            const response = await fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options)
            return handleGeneratedApiResponse(response)
        },
    }
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary create_account <POST>
     * @param {AccountRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async nativeV1AccountPost(body?: AccountRequest, options?: any) {
        const functionalApi = DefaultApiFp(this.configuration)
        return functionalApi.nativeV1AccountPost(this.basePath, body, options)
    }
    /**
     * 
     * @summary get_user_profile <GET>
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async nativeV1MeGet(options?: any) {
        const functionalApi = DefaultApiFp(this.configuration)
        return functionalApi.nativeV1MeGet(this.basePath, options)
    }
    /**
     * 
     * @summary refresh <POST>
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async nativeV1RefreshAccessTokenPost(options?: any) {
        const functionalApi = DefaultApiFp(this.configuration)
        return functionalApi.nativeV1RefreshAccessTokenPost(this.basePath, options)
    }
    /**
     * 
     * @summary request_password_reset <POST>
     * @param {RequestPasswordResetRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async nativeV1RequestPasswordResetPost(body?: RequestPasswordResetRequest, options?: any) {
        const functionalApi = DefaultApiFp(this.configuration)
        return functionalApi.nativeV1RequestPasswordResetPost(this.basePath, body, options)
    }
    /**
     * 
     * @summary reset_password <POST>
     * @param {ResetPasswordRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async nativeV1ResetPasswordPost(body?: ResetPasswordRequest, options?: any) {
        const functionalApi = DefaultApiFp(this.configuration)
        return functionalApi.nativeV1ResetPasswordPost(this.basePath, body, options)
    }
    /**
     * 
     * @summary signin <POST>
     * @param {SigninRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async nativeV1SigninPost(body?: SigninRequest, options?: any) {
        const functionalApi = DefaultApiFp(this.configuration)
        return functionalApi.nativeV1SigninPost(this.basePath, body, options)
    }
    /**
     * 
     * @summary validate_email <POST>
     * @param {ValidateEmailRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async nativeV1ValidateEmailPost(body?: ValidateEmailRequest, options?: any) {
        const functionalApi = DefaultApiFp(this.configuration)
        return functionalApi.nativeV1ValidateEmailPost(this.basePath, body, options)
    }
}
