export interface ProcessingOptions {
  /**
   * The number of milliseconds of an interval to check the popup state.
   * Default to 250 ms.
   */
  popupPullTimeout?: number;
  /**
   * The event target on which to listen to the redirect page `message` event.
   * This event should contain a list of authorization parameters returned by the authorization server.
   * 
   * The library contains `oauth-popup.html` page that reads the data from the URL and posts it back to the opener.
   * However, you can create `tokenInfoTranslation` to map returned by the popup parameters to the onces used by the library.
   */
  messageTarget?: EventTarget;
  /**
   * A number of milliseconds after which the iframe triggers a timeout if the response is not present.
   * Defaults to `1020`.
   */
  iframeTimeout?: number;
  /** 
   * When set it uses this value to prefix the call to the 
   * OAuth 2 token endpoint. This is to support use cases when 
   * the requests should be proxied through a server to avoid CORS problems.
   */
  tokenProxy?: string;
   /** 
    * When set it encodes the token URI value before adding it to the 
    * `tokenProxy`. This is to be used when the proxy takes the target 
    * URL as a query parameter.
    */
  tokenProxyEncode?: boolean;
}

export interface OpenIdProviderMetadata {
  /**
   * URL using the https scheme with no query or fragment component that the OP asserts as its Issuer Identifier. If Issuer discovery is supported (see Section 2), this value MUST be identical to the issuer value returned by WebFinger. This also MUST be identical to the iss Claim value in ID Tokens issued from this Issuer.
   */
  issuer: string;
  /**
   * URL of the OP's OAuth 2.0 Authorization Endpoint [OpenID.Core].
   */
  authorization_endpoint: string;
  /**
   * URL of the OP's OAuth 2.0 Token Endpoint [OpenID.Core]. This is REQUIRED unless only the Implicit Flow is used.
   */
  token_endpoint?: string;
  /**
   * URL of the OP's UserInfo Endpoint [OpenID.Core]. This URL MUST use the https scheme and MAY contain port, path, and query parameter components.
   */
  userinfo_endpoint?: string;
  /**
   * URL of the OP's JSON Web Key Set [JWK] document. This contains the signing key(s) the RP uses to validate signatures from the OP. The JWK Set MAY also contain the Server's encryption key(s), which are used by RPs to encrypt requests to the Server. When both signing and encryption keys are made available, a use (Key Use) parameter value is REQUIRED for all keys in the referenced JWK Set to indicate each key's intended usage. Although some algorithms allow the same key to be used for both signatures and encryption, doing so is NOT RECOMMENDED, as it is less secure. The JWK x5c parameter MAY be used to provide X.509 representations of keys provided. When used, the bare key values MUST still be present and MUST match those in the certificate.
   */
  jwks_uri: string;
  /**
   * URL of the OP's Dynamic Client Registration Endpoint.
   */
  registration_endpoint?: string;
  /**
   * JSON array containing a list of the OAuth 2.0 [RFC6749] scope values that this server supports. The server MUST support the openid scope value. Servers MAY choose not to advertise some supported scope values even when this parameter is used, although those defined in [OpenID.Core] SHOULD be listed, if supported.
   */
  scopes_supported?: string[];
  /**
   * JSON array containing a list of the OAuth 2.0 response_type values that this OP supports. Dynamic OpenID Providers MUST support the code, id_token, and the token id_token Response Type values.
   */
  response_types_supported: string[];
  /**
   * JSON array containing a list of the OAuth 2.0 response_mode values that this OP supports, as specified in OAuth 2.0 Multiple Response Type Encoding Practices [OAuth.Responses]. If omitted, the default for Dynamic OpenID Providers is ["query", "fragment"].
   */
  response_modes_supported?: string[];
  /**
   * JSON array containing a list of the OAuth 2.0 Grant Type values that this OP supports. Dynamic OpenID Providers MUST support the authorization_code and implicit Grant Type values and MAY support other Grant Types. If omitted, the default value is ["authorization_code", "implicit"].
   */
  grant_types_supported?: string[];
  /**
   * JSON array containing a list of the Authentication Context Class References that this OP supports.
   */
  acr_values_supported?: string[];
  /**
   * JSON array containing a list of the Subject Identifier types that this OP supports. Valid types include pairwise and public.
   */
  subject_types_supported: string[];
  /**
   * JSON array containing a list of the JWS signing algorithms (alg values) supported by the OP for the ID Token to encode the Claims in a JWT [JWT]. The algorithm RS256 MUST be included. The value none MAY be supported, but MUST NOT be used unless the Response Type used returns no ID Token from the Authorization Endpoint (such as when using the Authorization Code Flow).
   */
  id_token_signing_alg_values_supported: string[];
  /**
   * JSON array containing a list of the JWE encryption algorithms (alg values) supported by the OP for the ID Token to encode the Claims in a JWT [JWT].
   */
  id_token_encryption_alg_values_supported?: string[];
  /**
   * JSON array containing a list of the JWE encryption algorithms (enc values) supported by the OP for the ID Token to encode the Claims in a JWT [JWT].
   */
  id_token_encryption_enc_values_supported?: string[];
  /**
   * JSON array containing a list of the JWS [JWS] signing algorithms (alg values) [JWA] supported by the UserInfo Endpoint to encode the Claims in a JWT [JWT]. The value none MAY be included.
   */
  userinfo_signing_alg_values_supported?: string[];
  /**
   * JSON array containing a list of the JWE [JWE] encryption algorithms (alg values) [JWA] supported by the UserInfo Endpoint to encode the Claims in a JWT [JWT].
   */
  userinfo_encryption_alg_values_supported?: string[];
  /**
   * JSON array containing a list of the JWE encryption algorithms (enc values) [JWA] supported by the UserInfo Endpoint to encode the Claims in a JWT [JWT].
   */
  userinfo_encryption_enc_values_supported?: string[];
  /**
   * JSON array containing a list of the JWS signing algorithms (alg values) supported by the OP for Request Objects, which are described in Section 6.1 of OpenID Connect Core 1.0 [OpenID.Core]. These algorithms are used both when the Request Object is passed by value (using the request parameter) and when it is passed by reference (using the request_uri parameter). Servers SHOULD support none and RS256.
   */
  request_object_signing_alg_values_supported?: string[];
  /**
   * JSON array containing a list of the JWE encryption algorithms (alg values) supported by the OP for Request Objects. These algorithms are used both when the Request Object is passed by value and when it is passed by reference.
   */
  request_object_encryption_alg_values_supported?: string[];
  /**
   * JSON array containing a list of the JWE encryption algorithms (enc values) supported by the OP for Request Objects. These algorithms are used both when the Request Object is passed by value and when it is passed by reference.
   */
  request_object_encryption_enc_values_supported?: string[];
  /**
   * JSON array containing a list of Client Authentication methods supported by this Token Endpoint. The options are client_secret_post, client_secret_basic, client_secret_jwt, and private_key_jwt, as described in Section 9 of OpenID Connect Core 1.0 [OpenID.Core]. Other authentication methods MAY be defined by extensions. If omitted, the default is client_secret_basic -- the HTTP Basic Authentication Scheme specified in Section 2.3.1 of OAuth 2.0 [RFC6749].
   */
  token_endpoint_auth_methods_supported?: string[];
  /**
   * JSON array containing a list of the JWS signing algorithms (alg values) supported by the Token Endpoint for the signature on the JWT [JWT] used to authenticate the Client at the Token Endpoint for the private_key_jwt and client_secret_jwt authentication methods. Servers SHOULD support RS256. The value none MUST NOT be used.
   */
  token_endpoint_auth_signing_alg_values_supported?: string[];
  /**
   * JSON array containing a list of the display parameter values that the OpenID Provider supports. These values are described in Section 3.1.2.1 of OpenID Connect Core 1.0 [OpenID.Core].
   */
  display_values_supported?: string[];
  /**
   * JSON array containing a list of the Claim Types that the OpenID Provider supports. These Claim Types are described in Section 5.6 of OpenID Connect Core 1.0 [OpenID.Core]. Values defined by this specification are normal, aggregated, and distributed. If omitted, the implementation supports only normal Claims.
   */
  claim_types_supported?: string[];
  /**
   * JSON array containing a list of the Claim Names of the Claims that the OpenID Provider MAY be able to supply values for. Note that for privacy or other reasons, this might not be an exhaustive list.
   */
  claims_supported?: string[];
  /**
   * URL of a page containing human-readable information that developers might want or need to know when using the OpenID Provider. In particular, if the OpenID Provider does not support Dynamic Client Registration, then information on how to register Clients needs to be provided in this documentation.
   */
  service_documentation?: string;
  /**
   * Languages and scripts supported for values in Claims being returned, represented as a JSON array of BCP47 [RFC5646] language tag values. Not all languages and scripts are necessarily supported for all Claim values.
   */
  claims_locales_supported?: string[];
  /**
   * Languages and scripts supported for the user interface, represented as a JSON array of BCP47 [RFC5646] language tag values.
   */
  ui_locales_supported?: string[];
  /**
   * Boolean value specifying whether the OP supports use of the claims parameter, with true indicating support. If omitted, the default value is false.
   */
  claims_parameter_supported?: boolean;
  /**
   * Boolean value specifying whether the OP supports use of the request parameter, with true indicating support. If omitted, the default value is false.
   */
  request_parameter_supported?: boolean;
  /**
   * Boolean value specifying whether the OP supports use of the request_uri parameter, with true indicating support. If omitted, the default value is true.
   */
  request_uri_parameter_supported?: boolean;
  /**
   * Boolean value specifying whether the OP requires any request_uri values used to be pre-registered using the request_uris registration parameter. Pre-registration is REQUIRED when the value is true. If omitted, the default value is false.
   */
  require_request_uri_registration?: boolean;
  /**
   * URL that the OpenID Provider provides to the person registering the Client to read about the OP's requirements on how the Relying Party can use the data provided by the OP. The registration process SHOULD display this URL to the person registering the Client if it is given.
   */
  op_policy_uri?: string;
  /**
   * URL that the OpenID Provider provides to the person registering the Client to read about OpenID Provider's terms of service. The registration process SHOULD display this URL to the person registering the Client if it is given.
   */
  op_tos_uri?: string;
  
}


export interface OAuth2CustomParameter {
  /**
   * The name of the parameter
   */
  name: string;
  /**
   * The value of the parameter. It is ALWAYS a string.
   */
  value: string;
}

export interface OAuth2TokenRequestCustomData {
  /**
   * The query parameters to use with the token request
   */
  parameters?: OAuth2CustomParameter[];
  /**
   * The headers to use with the token request
   */
  headers?: OAuth2CustomParameter[];
  /**
   * The body parameters to use with the token request.
   * This is x-www-urlencoded parameters to be added to the message.
   */
  body?: OAuth2CustomParameter[];
}

export interface OAuth2AuthorizationRequestCustomData {
  /**
   * The query parameters to add to the authorization URI
   */
  parameters?: OAuth2CustomParameter[];
}

export interface OAuth2CustomData {
  /**
   * The custom data to set on the authorization URI when opening the auth popup.
   */
  auth?: OAuth2AuthorizationRequestCustomData;
  /**
   * The custom data to be set on the token request.
   */
  token?: OAuth2TokenRequestCustomData;
}

interface BaseOAuth2Authorization {
  /**
   * OAuth flow with `interactive` option set to `false` allows to quietly request for the token from the cache or form the authorization server
   * without notifying the user (without bringing the authorization pop-up).
   *
   * This is to be used to check if valid session exists for current user and update the UI accordingly.
   */
  interactive?: boolean;
  /**
   * List of scopes to be used with the token request.
   * This parameter is not required per OAuth2 spec.
   */
  scopes?: string[];
}

/**
 * OAuth 2 configuration object used in Advanced REST Client and API Components.
 */
export interface OAuth2Config extends BaseOAuth2Authorization {
  /**
   * The grant type of the OAuth 2 flow.
   *
   * Can be:
   * - implicit - deprecated and legacy
   * - authorization_code
   * - password - deprecated and legacy
   * - client_credentials
   * - refresh_token
   * - any custom grant supported by the authorization server
   */
  grantType?: 'implicit' | 'authorization_code' | 'password' | 'client_credentials' | 'refresh_token' | string;
  /**
   * Optional value to set on the `response_type` parameter.
   */
  responseType?: string;
  /**
   * The client ID registered in the OAuth2 provider.
   */
  clientId?: string;
  /**
   * The client ID registered in the OAuth2 provider.
   * This value is not required for select grant types.
   */
  clientSecret?: string;
  /**
   * The user authorization URI as defined by the authorization server.
   * This is required for the `implicit` and `authorization_code` grant types
   */
  authorizationUri?: string;
  /**
   * The token request URI as defined by the authorization server.
   * This is not required for the `implicit` grant type
   */
  accessTokenUri?: string;
  /**
   * The user redirect URI as configured in the authorization server.
   * This is required for the `implicit` and `authorization_code` grant types.
   */
  redirectUri?: string;
  /**
   * Required for the `password` grant type
   */
  username?: string;
  /**
   * Required for the `password` grant type
   */
  password?: string;
  /**
   * The state parameter as defined in the OAuth2 spec.
   * The state is returned back with the token response.
   */
  state?: string;
  /**
   * Additional data defined outside the scope of the OAuth2 protocol to be set
   * on both authorization and token requests.
   */
  customData?: OAuth2CustomData;
  /**
   * This is not a standard OAuth 2 parameter.
   * Used by Google's oauth 2 server to include already granted to this app
   * scopes to the list of this scopes.
   */
  includeGrantedScopes?: boolean;
  /**
   * This is not a standard OAuth 2 parameter.
   * Used by Google's oauth 2 server. It's the user email, when known.
   */
  loginHint?: string;
  /**
   * When set the `authorization_code` will use the PKCE extension of the OAuth2 
   * to perform the authorization. Default to `false`.
   * This is only relevant when the `authorization_code` grant type is used.
   */
  pkce?: boolean;
  /**
   * The access token type. Default to `Bearer`
   */
  tokenType?: string;
  /**
   * The last access token received from the authorization server. 
   * This is optional and indicates that the token has been already received.
   * This property should not be stored anywhere.
   */
  accessToken?: string;
  /**
   * Informs about what filed of the authenticated request the token property should be set.
   * By default the value is `header` which corresponds to the `authorization` by default,
   * but it is configured by the `deliveryName` property.
   * 
   * This can be used by the AMF model when the API spec defines where the access token should be
   * put in the authenticated request.
   * 
   * @default header
   */
  deliveryMethod?: OAuth2DeliveryMethod;

  /**
   * The name of the authenticated request property that carries the token.
   * By default it is `authorization` which corresponds to `header` value of the `deliveryMethod` property.
   * 
   * By setting both `deliveryMethod` and `deliveryName` you instruct the application (assuming it reads this values)
   * where to put the authorization token.
   * 
   * @default authorization
   */
  deliveryName?: string;
  /** 
   * The assertion parameter for the JWT token authorization.
   * 
   * @link https://datatracker.ietf.org/doc/html/rfc7523#section-2.1
   */
  assertion?: string;
  /** 
   * The device_code parameter for the device code authorization.
   * 
   * @link https://datatracker.ietf.org/doc/html/rfc8628#section-3.4
   */
  deviceCode?: string;
}

export type OAuth2DeliveryMethod = 'header' | 'query' | 'body';

declare interface TokenBase {
  /**
   * Whether the token request was marked as interactive.
   */
  interactive?: boolean;
  /**
   * The request state parameter, if used with the request.
   */
  state: string;
}

/**
 * OAuth 2 token response object.
 */
declare interface TokenInfo extends TokenBase {
  /**
   * The access token.
   */
  accessToken: string;
  /**
   * The access token type.
   */
  tokenType?: string;
  /**
   * Access token expiration timeout.
   */
  expiresIn: number;
  /**
   * Access token expiration timestamp
   */
  expiresAt: number;
  /**
   * When `true` the `expires_in` and `expires_at` are assumed values (1 hour).
   */
  expiresAssumed?: boolean;
  /**
   * The list of scopes the token has been granted
   */
  scope?: string[];
  /**
   * The refresh token, when requested
   */
  refreshToken?: string;
}

interface OidcToken {
  /**
   * The response type of the token.
   */
  responseType: string;
  /**
   * The state passed by the authorization server,
   */
  state: string;
}

/**
 * OIDC token data
 */
export interface OidcTokenInfo extends OidcToken {
  /**
   * The timestamp when the token response was read.
   * With the combination with `expiresIn` this tells when the token 
   * expires +- few seconds (depending onm the network).
   */
  time: number;
  /**
   * The received access token.
   */
  accessToken?: string;
  /**
   * The received refresh token.
   */
  refreshToken?: string;
  /**
   * The received ID token.
   */
  idToken?: string;
  /**
   * The received from the authorization server code.
   * The code has no use as it probably was exchanged for the token,
   * which invalidates the code.
   */
  code?: string;
  /**
   * The received from the authorization server token type
   */
  tokenType?: string;
  /**
   * The received from the authorization server expires_in parameter.
   */
  expiresIn?: number;
  /**
   * The received from the authorization server scope parameter processed to an array.
   */
  scope?: string[];
}

/**
 * OIDC token error response
 */
export interface OidcTokenError extends OidcToken {
  /**
   * Whether the token has error when processing it. This is the error message to render to the user.
   */
  errorDescription?: string;
  /**
   * Whether the token has error when processing it. This is the error code received from the server.
   */
  error?: string;
}
