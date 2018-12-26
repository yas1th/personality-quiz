const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: { type: String },
  category: { type: String },
  questionType: { type: Object }
});

module.exports = new mongoose.model("questions", questionSchema);
