/**
 * A method for making a get request, which will execute the given callback on
 * the text of the response body.
 * @param url The url to GET
 * @param callback A callback that will be passed the text response of the request.
 */
declare const get: (url: string, callback: (data: string) => void) => void;
/**
 *
 *
 */
/**
 * A method for making a post request, with a body object included, and will
 * execute the given callback on the text of the response body.
 * @param url The url to POST to
 * @param body The body of the POST request
 * @param callback A callback that will be passed the text response of the request.
 */
declare const post: (url: string, body: {}, callback: (data: string) => void) => void;

export { get, post };
