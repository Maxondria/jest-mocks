import { wrapper } from "./assumeThisIsASaga";
import * as stuff from "./isDirectEnroll";

describe("Smoke", () => {
  it("test mocking true", () => {
    stuff.isDirectEnroll = jest.fn().mockReturnValue(true);
    expect(wrapper("dental")).toBe(true);
  });

  it("test mocking false", () => {
    stuff.isDirectEnroll = jest.fn().mockReturnValue(false);
    expect(wrapper("health")).toBe(false);
  });

  it("test mocking 'something else'", () => {
    stuff.isDirectEnroll = jest.fn().mockReturnValue("something else");
    expect(wrapper("bogus")).toBe("something else");
  });
});
