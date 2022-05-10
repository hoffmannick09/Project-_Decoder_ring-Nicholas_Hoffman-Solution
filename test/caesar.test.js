// Write your tests here!
const { caesar } = require("../src/caesar");
const { expect } = require("chai");

describe("caesar testing", () => {
  it("should return false if the shift amount is set to 0", () => {
    const input = "message";
    const shift = 0;
    const actual = caesar(input, shift);

    expect(actual).to.be.false;
  });

  it("should return a string of the same length as the input string", () => {
    const input = "message";
    const shift = 1;
    const actual = caesar(input, shift);
    const expected = "nfttbhf";

    expect(actual.length).to.eql(expected.length);
  });

  it("should encode a message by shifting the letters by a given amount", () => {
    const input = "message";
    const shift = 1;
    const actual = caesar(input, shift);
    const expected = "nfttbhf";

    expect(actual).to.eql(expected);
  });

  it("should decode a message by shifting the letters the opposite direction by a given amount", () => {
    const input = "nfttbhf";
    const shift = 1;
    const actual = caesar(input, shift, (encode = false));
    const expected = "message";

    expect(actual).to.equal(expected);
  });
});