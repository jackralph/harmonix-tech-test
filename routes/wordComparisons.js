const express = require("express");
const router = express.Router();
const newWordComparison = require("../controllers/WordComparison.controller");

router.get("/", (request, response) => {
  response.send("home page");
});

router.post("/", (request, response) => {
  const comparison = newWordComparison(request.body);
  response.send(comparison);
});

module.exports = router;
