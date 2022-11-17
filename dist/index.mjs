// src/index.ts
var get = (url, callback) => {
  fetch(url).then((res) => res.text()).then((text) => callback(text));
};
var post = (url, body, callback) => {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }).then((res) => res.text()).then((text) => callback(text));
};
export {
  get,
  post
};
