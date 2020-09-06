const assert = require("assert");
const anagramTester = require("../utils");

describe("anagramTester()", () => {
  it("returns false for none anagram words", () => {
    const actual = anagramTester("hello", "world");

    assert.equal(false, actual);
  });
  it("returns true for anagram words", () => {
    const actual = anagramTester("anna", "nana");

    assert.equal(true, actual);
  });
  it("is not case sensitive", () => {
    const actual = anagramTester("anna", "Nana");

    assert.equal(true, actual);
  });
});
