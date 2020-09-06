const mongoose = require("mongoose");
const assert = require("assert");
const WordComparison = require("../models/WordComparison.model");

describe("mongodb functionality", () => {
  beforeEach(() => {
    mongoose.connect("mongodb://localhost/wordcomparison", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    mongoose.connection
      .once("open", () => {
        console.log("connected to db");
      })
      .on("error", (error) => {
        console.log(error);
      });
  });
  afterEach((done) => {
    mongoose.connection.collections.wordcomparisons.drop(() => {
      console.log("collection dropped");
      done();
    });
  });
  it("saves a record to the database", (done) => {
    const newWordComparison = new WordComparison({
      firstWord: "hello",
      secondWord: "world",
      anagram: false,
      firstWordPalindrome: false,
      secondWordPalindrome: false,
      timeToComplete: 2,
    });

    newWordComparison.save().then(() => {
      assert(!newWordComparison.isNew);
      done();
    });
  });
  it("doesn't save a record if missing required fields", (done) => {
    const newWordComparisonA = new WordComparison({
      firstWord: "hello",
      secondWord: "",
      anagram: false,
      firstWordPalindrome: false,
      secondWordPalindrome: false,
      timeToComplete: 2,
    });

    const newWordComparisonB = new WordComparison({
      firstWord: "hello",
      secondWord: "",
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
