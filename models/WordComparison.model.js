const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WordComparisonSchema = new Schema({
  firstWord: { type: String, required: true },
  secondWord: { type: String, required: true },
  typeOfTest: { type: String, required: true },
  anagram: Boolean,
  firstWordPalindrome: Boolean,
  secondWordPalindrome: Boolean,
  timeToComplete: { type: Number, required: true },
});

const WordComparison = mongoose.model("WordComparison", WordComparisonSchema);

module.exports = WordComparison;
