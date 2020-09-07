const { performance } = require("perf_hooks");
const { type } = require("os");

const anagramTester = (firstWord, secondWord) => {
  return (
    firstWord.toLowerCase().split("").sort().join("") ===
    secondWord.toLowerCase().split("").sort().join("")
  );
};

const palindromeTester = (word) => {
  return word.toLowerCase().split("").reverse().join("") === word.toLowerCase();
};

const comparisonTimer = (startTime, currentTime) => {
  return parseFloat((currentTime - startTime).toFixed(3));
};

const wordComparison = (firstWord, secondWord, typeOfTest) => {
  const startTime = performance.now();
  if (typeOfTest === "anagram") {
    return {
      firstWord: firstWord,
      secondWord: secondWord,
      typeOfTest: typeOfTest,
      anagram: anagramTester(firstWord, secondWord),
      timeToComplete: comparisonTimer(startTime, performance.now()),
    };
  } else {
    return {
      firstWord: firstWord,
      secondWord: secondWord,
      typeOfTest: typeOfTest,
      firstWordPalindrome: palindromeTester(firstWord),
      secondWordPalindrome: palindromeTester(secondWord),
      timeToComplete: comparisonTimer(startTime, performance.now()),
    };
  }
};

module.exports = {
  anagramTester,
  palindromeTester,
  wordComparison,
  comparisonTimer,
};
