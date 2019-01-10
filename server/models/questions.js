/** This is the Questions schema to save the Questions
 *  question      --- Read from the given data (../data/personality_test.js)
 *  category      --- Read from the given data (../data/personality_test.js)
 *  questionType  --- Read from the given data (../data/personality_test.js)
 */

const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: { type: String },
  category: { type: String },
  questionType: { type: Object }
});

module.exports = new mongoose.model("questions", questionSchema);
