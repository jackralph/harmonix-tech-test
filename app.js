require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const wordComparisonsRouter = require("./routes/wordComparisons");
const { mongoURI } = require("./dbconfig");

app.use(cors());

app.use(express.json());

app.use("/", wordComparisonsRouter);

console.log(mongoURI);

mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected");
  }
);

app.listen(3000);
