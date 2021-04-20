const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/library", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  author: String,
  about_author: String,
  genre: String,
  author_image: {
    data: Buffer,
    contentType: String,
  },
  book_cover: {
    data: Buffer,
    contentType: String,
  },
  description: String,
});


var BookData = mongoose.model("bookdetails", BookSchema);

module.exports = BookData;
