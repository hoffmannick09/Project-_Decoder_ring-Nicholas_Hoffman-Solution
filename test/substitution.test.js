// Write your tests here!
const { substitution } = require("../src/substitution");
const { expect } = require("chai");

describe("substitution testing", () => {
    it("should return false if the substitution alphabet is not 26 characters", () => {
        const input = "message";
        const alphabet = "qwerty";
        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
      });

    it("should return false if the substitution alphabet contains any repeat characters", () => {
        const input = "message";
        const alphabet = "qqwweerrttyyuuiiooppaassdd";
        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
      });

    it("should encode a message using the substitution alphabet", () => {
        const input = "thinkful";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const actual = substitution(input, alphabet);
        const expected = "jrufscpw";
  
        expect(actual).to.eql(expected);
      });

    it("should decode a message using the substitution alphabet", () => {
        const input = "jrufscpw";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const actual = substitution(input, alphabet, encode = false);
        const expected = "thinkful";
  
        expect(actual).to.equal(expected);
      });
});

