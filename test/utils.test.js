const assert = require("assert");
const { anagramTester, palindromeTester } = require("../utils");

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

describe("palindromeTester", () => {
  it("returns false for none palindrome words", () => {
    const actual = palindromeTester("Hello");

    assert.equal(false, actual);
  });
  it("returns true for palindrome words", () => {
    const actual = palindromeTester("anna");

    assert.equal(true, actual);
  });
  it("is not case sensitive", () => {
    const actual = palindromeTester("Anna");

    assert.equal(true, actual);
  });
});
