/** This is the categories schema to save the categories
 *  categoryName --- Read from the given data (../data/personality_test.js)
 */

const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryName: { type: String }
});

module.exports = new mongoose.model("categories", categorySchema);
