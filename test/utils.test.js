const assert = require("assert");
const { anagramTester, palindromeTester, wordComparison } = require("../utils");
const WordComparison = require("../models/WordComparison.model");

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

describe("palindromeTester()", () => {
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

describe("wordComparison()", () => {
  it("returns an object", () => {
    const actual = wordComparison("Hello", "World");

    assert.equal("object", typeof actual);
  });
  it("returns an object containing properties conforming to WordComparison model", () => {
    const actual = wordComparison("Hello", "World");

    const expected = {
      firstWord: "Hello",
      secondWord: "World",
      anagram: false,
      firstWordPalindrome: false,
      secondWordPalindrome: false,
      timeToComplete: 0,
    };

    assert.equal(actual.firstWord, expected.firstWord);
    assert.equal(actual.secondWord, expected.secondWord);
    assert.equal(actual.anagram, expected.anagram);
    assert.equal(actual.firstWordPalindrome, expected.firstWordPalindrome);
    assert.equal(actual.secondWordPalindrome, expected.secondWordPalindrome);
    assert.equal(typeof actual.timeToComplete, "number");
  });
});
