const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const wordComparisonsRouter = require("./routes/wordComparisons");

app.use(express.json());

app.use("/", wordComparisonsRouter);

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected");
  }
);

app.listen(3000);
