const { performance } = require("perf_hooks");

const anagramTester = (firstWord, secondWord) => {
  return (
    firstWord.toLowerCase().split("").sort().join("") ===
    secondWord.toLowerCase().split("").sort().join("")
  );
};

const palindromeTester = (word) => {
  return word.toLowerCase().split("").reverse().join("") === word.toLowerCase();
};

const wordComparison = (firstWord, secondWord) => {
  const startTime = performance.now();
  return {
    firstWord: firstWord,
    secondWord: secondWord,
    anagram: anagramTester(firstWord, secondWord),
    firstWordPalindrome: palindromeTester(firstWord),
    secondWordPalindrome: palindromeTester(secondWord),
    timeToComplete: comparisonTimer(startTime, performance.now()),
  };
};

const comparisonTimer = (startTime, currentTime) => {
  return parseFloat((currentTime - startTime).toFixed(3));
};

module.exports = {
  anagramTester,
  palindromeTester,
  wordComparison,
  comparisonTimer,
};
