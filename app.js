const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

app.use("/", () => {
  console.log("hello");
});

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected");
  }
);

app.listen(3000);
