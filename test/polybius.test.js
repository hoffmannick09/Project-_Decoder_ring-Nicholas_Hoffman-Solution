// Write your tests here!
const { polybius } = require("../src/polybius");
const { expect } = require("chai");

describe("polybius testing", () => {
    it("should return a string", () => {
        const input = "message";
        const actual = polybius(input);
  
        expect(actual).to.be.a('string');
      });

    it("should encode a message by using the Polybius Square", () => {
      const input = "message";
      const actual = polybius(input);
      const expected = "23513434112251";

      expect(actual).to.eql(expected);
    });

    it("should encode a message by using the Polybius Square", () => {
        const input = "23513434112251";
        const actual = polybius(input, encode = false);
        const expected = "message";
  
        expect(actual).to.eql(expected);
      });

    it("should return false if the length of numbers (without spaces or special characters) is odd", () => {
        const input = "44513444 2351343411225";
        const actual = polybius(input, false);
  
        expect(actual).to.be.false;
      });
});

