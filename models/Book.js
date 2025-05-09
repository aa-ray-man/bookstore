const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: String,
  price: Number,
  rating: Number,
  publishedDate: Date,
});

module.exports = mongoose.model("Book", bookSchema);
