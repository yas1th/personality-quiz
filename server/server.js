const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const route = express.Router();
const PORT = 5000;
const URL = "mongodb://localhost:27017/personalityTest";
const mongoose = require("mongoose");
const categoryModel = require("./models/categories");
const questionModel = require("./models/questions");
const answerModel = require("./models/answers");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", route);

route.get("/categories", (req, res) => {
  categoryModel.find({}).then(category => {
    res.json(category);
  });
});

route.get("/questions", (req, res) => {
  questionModel.find({}).then(question => {
    res.json(question);
  });
});

route.post("/answers", (req, res) => {
  console.log("request is", req.body);
  req.body.map(function(answer) {
    console.log("answer is", answer);
    const answers = new answerModel({
      ...answer
    });
    answers.save(function(err, answer) {
      if (err) {
        console.log("saving the answers error", err);
      } else {
        console.log("answers has been saved");
      }
    });
  });
  res.sendStatus(200);
});

mongoose.connect(
  URL,
  (err, db) => {
    if (err) {
      console.log("database connection failed", err);
    } else {
      console.log("connected to database");
    }
  }
);

app.listen(PORT, () => {
  console.log(PORT);
});
