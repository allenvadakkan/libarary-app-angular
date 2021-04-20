const express = require("express");
const adminRouter = express.Router();
const BookData = require("../model/bookData")

function router(nav) {
  adminRouter.get("/", (req, res) => {
    res.render("addBook", {
      nav,
      title: "Library App - Add New Book",
    });
  });

  adminRouter.post("/add", (req, res) => {
    
      var bookInfo = {
        title: req.body.title,
        author: req.body.author,       
        about_author: req.body.about_author,
        genre: req.body.genre,
        author_image: req.body.author_image,
        book_cover: req.body.book_cover,
        description: req.body.description,
      }

      var book = BookData(bookInfo);
      book.save();
      res.redirect('/books');

  });

  return adminRouter;
}

module.exports = router;
