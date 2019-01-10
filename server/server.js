/**
 * This file includes the API calls to get the data from database
 * Update the answers collection with the provided answers
 * This is the main server file
 */

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const route = express.Router();
const PORT = 5000; // Runs at PORT 5000
const URL = "mongodb://localhost:27017/personalityTest"; // to connect to personalityTest DB
const mongoose = require("mongoose");
const categoryModel = require("./models/categories");
const questionModel = require("./models/questions");
const answerModel = require("./models/answers");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", route);

// GET request to return the categories data from database

route.get("/categories", (req, res) => {
  categoryModel.find({}).then(category => {
    res.json(category);
  });
});

// GET request to return the Questions data from database

route.get("/questions", (req, res) => {
  questionModel.find({}).then(question => {
    res.json(question);
  });
});

// GET request to return the Answers data from database

route.get("/answers", (req, res) => {
  answerModel.find({}).then(answer => {
    res.json(answer);
  });
});

// POST request to update the answers collection with the user data

route.post("/answers", (req, res) => {
  req.body.map(function(answer) {
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
