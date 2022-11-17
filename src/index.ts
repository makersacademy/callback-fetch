/**
 * A method for making a get request, which will execute the given callback on
 * the text of the response body.
 * @param url The url to GET
 * @param callback A callback that will be passed the text response of the request.
 */
const get = (url: string, callback: (data: string) => void) => {
  fetch(url)
    .then((res) => res.text())
    .then((text) => callback(text));
};

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
const post = (url: string, body: {}, callback: (data: string) => void) => {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.text())
    .then((text) => callback(text));
};

export { get, post };
