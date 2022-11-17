import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();

import { get, post } from "./index";

describe("get", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("Performs a get request, and calls the given callback on the result", (done) => {
    fetchMock.mockResponseOnce('{ "package": "callback-fetch" }');
    get("http://someurl.com", (responseString) => {
      const body = JSON.parse(responseString);
      expect(body.package).toEqual("callback-fetch");
      expect(fetchMock.mock.calls.length).toEqual(1);
      expect(fetchMock.mock.calls[0][0]).toEqual("http://someurl.com");
      done();
    });
  });
});

describe("post", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("Performs a post request, and calls the given callback on the result", (done) => {
    const body = { package: "callback-fetch" };
    fetchMock.mockResponseOnce("All Good");
    post("http://someurl.com", body, (responseString) => {
      expect(responseString).toEqual("All Good");
      expect(fetchMock.mock.calls.length).toEqual(1);
      expect(fetchMock.mock.calls[0][0]).toEqual("http://someurl.com");
      expect(fetchMock.mock.calls[0][1]?.body).toEqual(JSON.stringify(body));
      done();
    });
  });
});
