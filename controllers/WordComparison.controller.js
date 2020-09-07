const { wordComparison } = require("../models/utils.js");
const WordComparison = require("../models/WordComparison.model");

const newWordComparison = (words) => {
  const { firstWord, secondWord } = words;
  const newComparison = new WordComparison(
    wordComparison(firstWord, secondWord)
  );
  try {
    newComparison.save();
    return newComparison;
  } catch (error) {
    console.log(error);
  }
};

const getWordComparisons = async () => {
  try {
    const wordComparisons = await WordComparison.find();
    return wordComparisons;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { newWordComparison, getWordComparisons };
