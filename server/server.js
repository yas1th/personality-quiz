const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const route = express.Router();
const PORT = 5000;
const URL = "mongodb://localhost/exercise";
const mongoose = require("mongoose");
const personalityQuizData = require("./personality_test");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", route);

route.get("/questions", (req, res) => {
  res.send(personalityQuizData);
});

mongoose.connect(
  URL,
  (err, db) => {
    if (err) {
      console.log("database connection failed", err);
    } else {
      console.log(db.collection("type"));
      db.close();
    }
  }
);

app.listen(PORT, () => {
  console.log(PORT);
});
