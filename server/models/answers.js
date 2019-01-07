const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  questionId: { type: mongoose.Schema.Types.ObjectId },
  answerIndex: { type: Number },
  question: { type: String },
  answer: { type: Array }
});

module.exports = new mongoose.model("answers", answerSchema);
