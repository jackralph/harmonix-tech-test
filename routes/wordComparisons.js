const express = require("express");
const router = express.Router();
const {
  newWordComparison,
  getWordComparisons,
} = require("../controllers/WordComparison.controller");

router.get("/", async (request, response) => {
  const wordComparisons = await getWordComparisons();
  console.log(wordComparisons.length);
  response.json({ wordComparisons: wordComparisons });
});

router.post("/", async (request, response) => {
  const wordComparison = await newWordComparison(request.body);
  response.send(wordComparison);
});

module.exports = router;
