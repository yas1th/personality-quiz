/**
 * This file will insert the data to the database by reading the given input ('./data/personality_test.js')
 */

const URL = "mongodb://localhost:27017/personalityTest"; // database name is personalityTest
const mongoose = require("mongoose");
const categoryModel = require("./models/categories"); // categories model
const questionModel = require("./models/questions"); // questions model
const personalityTestData = require("./data/personality_test"); //input

// Connecting to the database using Mongoose ORM

mongoose.connect(
  URL,
  (err, db) => {
    if (err) {
      console.log("database connection failed", err);
    } else {
      console.log("database connection established");
    }
  }
);

// Reading the categories data from the input

const categories = personalityTestData.categories;
// counter to know whether the data is completely inserted in to the database
let categoryCounter = 0;

categories.map(category => {
  const categoryCollection = new categoryModel({
    categoryName: category
  });
  categoryCollection
    .save()
    .then(categoriesCollection => {
      console.log("categories are successfully saved to the database");
      if (categoryCounter === categories.length - 1) {
        console.log("Finished saving the categories to the database");
      }
      categoryCounter++;
    })
    .catch(err => {
      console.log("unable to save the categories to the database");
    });
});
// Reading the Quesstions data from the input
const questions = personalityTestData.questions;
// counter to know whether the data is completely inserted in to the database
let questionsCounter = 0;
questions.map(question => {
  const questionCollection = new questionModel({
    question: question.question,
    category: question.category,
    questionType: question.question_type
  });
  questionCollection
    .save()
    .then(questionsCollection => {
      console.log("Questions are successfully saved to the database");
      if (questionsCounter === questions.length - 1) {
        console.log("Finished saving the questions to the database");
      }
      questionsCounter++;
    })
    .catch(err => {
      console.log("unable to save the questions to the database");
    });
});
