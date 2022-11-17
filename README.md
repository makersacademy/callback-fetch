# Callback Fetch

This is a simple library for performing simple GET and POST requests.

It contains no error handling, and should only be used as an educational tool.

For real-world requests, use `fetch` or a package such as `axios`.

## Usage

### `get`

To perform a get request, pass the url and a callback to be executed on the
response text. For example:
```javascript
const { get } = require('callback-fetch');

get('http://someurl.com', (responseText) => {
  console.log(responseText)
});
```

### `post`

To perform a POST request, you can supply a request body:
```javascript
const { post } = require('callback-fetch');

post('http://someurl.com', { key: 'value' }, (responseText) => {
  console.log(responseText)
});
```