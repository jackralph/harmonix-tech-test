require("dotenv").config();
const express = require("express");
const app = express();
const { mongoURI } = require("./dbconfig");
const mongoose = require("mongoose");
const cors = require("cors");
const wordComparisonsRouter = require("./routes/wordComparisons");

app.use(cors());

app.use(express.json());

app.use("/", wordComparisonsRouter);

mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected");
  }
);

app.listen(3000);
