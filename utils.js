const anagramTester = (firstWord, secondWord) => {
  return (
    firstWord.toLowerCase().split("").sort().join("") ===
    secondWord.toLowerCase().split("").sort().join("")
  );
};

anagramTester("anna", "nana");

module.exports = anagramTester;
