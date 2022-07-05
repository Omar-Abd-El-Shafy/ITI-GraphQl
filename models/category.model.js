const mongoose = require("mongoose");

const category = new mongoose.Schema(
  {
    name: String,
 
  }
  //   { timestamps: true }
);

module.exports.Category = mongoose.model("Category", category);
