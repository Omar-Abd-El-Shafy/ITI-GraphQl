const mongoose = require("mongoose");

const category = new mongoose.Schema(
  {
    name: String,
 
  }
  //   { timestamps: true }
);
const Category = mongoose.model('Category', category)
module.exports = {
    Category
}
// module.exports.Category = mongoose.model("Category", category);
