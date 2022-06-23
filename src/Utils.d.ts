import { OAuth2Authorization } from "./types";

/**
 * Checks if the URL has valid scheme for OAuth flow.
 * 
 * Do not use this to validate redirect URIs as they can use any protocol.
 *
 * @param url The url value to test
 * @throws {TypeError} When passed value is not set, empty, or not a string
 * @throws {Error} When passed value is not a valid URL for OAuth 2 flow
 */
 export function checkUrl(url: string): void;

/**
 * Checks if basic configuration of the OAuth 2 request is valid an can proceed
 * with authentication.
 * @param settings authorization settings
 * @throws {Error} When settings are not valid
 */
export function sanityCheck(settings: OAuth2Authorization): void;

/**
 * Generates a random string of characters.
 *
 * @returns A random string.
 */
export function randomString(): string;

/**
 * Replaces `-` or `_` with camel case.
 * @param name The string to process
 * @return Camel cased string or `undefined` if not transformed.
 */
export function camel(name: string): string | undefined;

/**
 * Computes the SHA256 hash ogf the given input.
 * @param value The value to encode.
 */
export function sha256(value: string): Promise<ArrayBuffer>;

/**
 * Encoded the array buffer to a base64 string value.
 */
export function base64Buffer(buffer: ArrayBuffer): string;

/**
 * Generates code challenge for the PKCE extension to the OAuth2 specification.
 * @param verifier The generated code verifier.
 * @returns The code challenge string
 */
export function generateCodeChallenge(verifier: string): Promise<string>;

/**
 * Generates cryptographically significant random string.
 * @param size The size of the generated nonce. Default to 20.
 * @returns A nonce (number used once).
 */
export function nonceGenerator(size?: number): string;
