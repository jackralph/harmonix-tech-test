const mongoose = require("mongoose");
const assert = require("assert");
const WordComparison = require("../models/WordComparison.model");

describe("mongodb functionality", () => {
  before(() => {
    mongoose.connect("mongodb://localhost/wordcomparison_test", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    mongoose.connection
      .once("open", () => {})
      .on("error", (error) => {
        console.log(error);
      });
  });
  afterEach((done) => {
    mongoose.connection.collections.wordcomparisons.drop(() => {
      done();
    });
  });
  after(() => {
    mongoose.connection.close();
  });
  it("saves an anagram record to the database", (done) => {
    const newWordComparison = new WordComparison({
      firstWord: "hello",
      secondWord: "world",
      typeOfTest: "anagram",
      anagram: false,
      timeToComplete: 2,
    });

    newWordComparison.save().then(() => {
      assert(!newWordComparison.isNew);
      done();
    });
  });
  it("saves an palindrome record to the database", (done) => {
    const newWordComparison = new WordComparison({
      firstWord: "hello",
      secondWord: "world",
      typeOfTest: "palindrome",
      firstWordPalindrome: false,
      secondWordPalindrome: false,
      timeToComplete: 2,
    });

    newWordComparison.save().then(() => {
      assert(!newWordComparison.isNew);
      done();
    });
  });
  it("finds all the records", (done) => {
    const newWordComparisonA = new WordComparison({
      firstWord: "hello",
      secondWord: "world",
      anagram: false,
      firstWordPalindrome: false,
      secondWordPalindrome: false,
      timeToComplete: 2,
    });

    const newWordComparisonB = new WordComparison({
      firstWord: "hello",
      secondWord: "world",
      anagram: false,
      firstWordPalindrome: false,
      secondWordPalindrome: false,
      timeToComplete: 2,
    });

    mongoose.connection.collections.wordcomparisons
      .insertMany([newWordComparisonA, newWordComparisonB])
      .then(() => {
        WordComparison.find().then((documents) => {
          assert.equal(documents.length, 2);
          done();
        });
      });
  });
});
