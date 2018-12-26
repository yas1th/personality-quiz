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
    }
  }
);

const categories = personalityTestData.categories;
categories.map(category => {
  const categoryCollection = new categoryModel({
    categoryName: category
  });
  categoryCollection.save();
});

const questions = personalityTestData.questions;
questions.map(question => {
  const questionCollection = new questionModel({
    question: question.question,
    category: question.category,
    questionType: question.question_type
  });
  questionCollection.save();
});
