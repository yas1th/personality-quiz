const URL = "mongodb://localhost:27017/personalityTest";
const mongoose = require("mongoose");
const categoryModel = require("./models/categories");
const questionModel = require("./models/questions");
const personalityTestData = require("./data/personality_test");

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

const categories = personalityTestData.categories;

categories.map(category => {
  const categoryCollection = new categoryModel({
    categoryName: category
  });
  categoryCollection
    .save()
    .then(categoriesCollection => {
      console.log("categories are successfully saved to the database");
    })
    .catch(err => {
      console.log("unable to save the categories to the database");
    });
});

const questions = personalityTestData.questions;

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
    })
    .catch(err => {
      console.log("unable to save the questions to the database");
    });
});
