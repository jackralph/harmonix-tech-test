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
  return {
    firstWord: firstWord,
    secondWord: secondWord,
    anagram: anagramTester(firstWord, secondWord),
    firstWordPalindrome: palindromeTester(firstWord),
    secondWordPalindrome: palindromeTester(secondWord),
    timeToComplete: 0,
  };
};

module.exports = { anagramTester, palindromeTester, wordComparison };
