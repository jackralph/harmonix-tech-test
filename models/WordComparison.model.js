const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WordComparisonSchema = new Schema({
  firstWord: { type: String, required: true },
  secondWord: { type: String, required: true },
  anagram: { type: Boolean, required: true },
  firstWordPalindrome: { type: Boolean, required: true },
  secondWordPalindrome: { type: Boolean, required: true },
  timeToComplete: { type: Number, required: true },
});

const WordComparison = mongoose.model('WordComparison', WordComparisonSchema);

module.exports = WordComparison;
