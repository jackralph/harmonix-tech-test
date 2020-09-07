const { wordComparison } = require("../models/utils.js");
const WordComparison = require("../models/WordComparison.model");

const newWordComparison = (words) => {
  const { firstWord, secondWord } = words;
  const newComparison = new WordComparison(
    wordComparison(firstWord, secondWord)
  );
  return newComparison;
};

module.exports = newWordComparison;
