const { wordComparison } = require("../models/utils.js");
const WordComparison = require("../models/WordComparison.model");

const getWordComparisons = async (request, response) => {
  const { orderBy } = request.query;
  try {
    const wordComparisons = await WordComparison.find().sort({
      timeToComplete: orderBy || 1,
    });
    response.send({ wordComparisons });
  } catch (error) {
    response.send({ error });
  }
};

const newWordComparison = async (request, response) => {
  const { firstWord, secondWord, typeOfTest } = request.body;
  const newComparison = new WordComparison(
    wordComparison(firstWord, secondWord, typeOfTest)
  );
  try {
    newComparison.save();
    response.send({ wordComparison: newComparison });
  } catch (error) {
    response.send({ error });
  }
};

module.exports = { newWordComparison, getWordComparisons };
