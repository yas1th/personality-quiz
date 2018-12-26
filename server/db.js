const URL = "mongodb://localhost:27017/exercise";
const mongoose = require("mongoose");
const categoryModel = require("./models/categories");
const questionModel = require("./models/questions");
const personalityQuizData = require("./personality_test");

mongoose.connect(
  URL,
  (err, db) => {
    if (err) {
      console.log("database connection failed", err);
    }
  }
);

const categories = personalityQuizData.categories;
categories.map(category => {
  const categoryCollection = new categoryModel({
    categoryName: category
  });
  categoryCollection.save();
});

const questions = personalityQuizData.questions;
questions.map(question => {
  const questionCollection = new questionModel({
    question: question.question,
    category: question.category,
    questionType: question.question_type
  });
  questionCollection.save();
});
