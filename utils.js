const anagramTester = (firstWord, secondWord) => {
  return (
    firstWord.toLowerCase().split("").sort().join("") ===
    secondWord.toLowerCase().split("").sort().join("")
  );
};

const palindromeTester = (word) => {
  return word.toLowerCase().split("").reverse().join("") === word.toLowerCase();
};

module.exports = { anagramTester, palindromeTester };
