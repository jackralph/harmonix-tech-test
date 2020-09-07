const express = require("express");
const router = express.Router();
const {
  newWordComparison,
  getWordComparisons,
} = require("../controllers/WordComparison.controller");

router.get("/", getWordComparisons);

router.post("/", newWordComparison);

module.exports = router;
