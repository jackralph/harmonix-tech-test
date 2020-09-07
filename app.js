require("dotenv").config();
const express = require("express");
const app = express();
// require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const wordComparisonsRouter = require("./routes/wordComparisons");

app.use(cors());

app.use(express.json());

app.use("/", wordComparisonsRouter);

mongoose.connect(
  "mongodb+srv://annagram:annagram@harmonix-tech-test.fdhtd.mongodb.net/wordcomparison?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected");
  }
);

app.listen(process.env.PORT || 3000);
