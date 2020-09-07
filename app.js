require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const wordComparisonsRouter = require("./routes/wordComparisons");

app.use(cors());

app.use(express.json());

app.use("/", wordComparisonsRouter);

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected");
  }
);

app.listen(3000);
