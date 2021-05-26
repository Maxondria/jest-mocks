import { assumeIamASaga } from "./assumeThisIsASaga";
import * as asSagaDeps from "./isDirectEnroll";

describe("Smoke", () => {
  it("test mocking true", () => {
    asSagaDeps.isDirectEnroll = jest.fn().mockReturnValue(true);
    expect(assumeIamASaga("dental")).toBe(true);
  });

  it("test mocking false", () => {
    asSagaDeps.isDirectEnroll = jest.fn().mockReturnValue(false);
    expect(assumeIamASaga("health")).toBe(false);
  });

  it("test mocking 'something else'", () => {
    asSagaDeps.isDirectEnroll = jest.fn().mockReturnValue("something else");
    expect(assumeIamASaga("bogus")).toBe("something else");
  });
});
