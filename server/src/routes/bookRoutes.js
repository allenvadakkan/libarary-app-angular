const express = require("express");
const booksRouter = express.Router();
const BookData = require("../model/bookData")

function router(nav) {
  
  //const book_catalogue = require('../data/data.json');

  booksRouter.get("/", (req, res) => {

    BookData.find()
    .then((book_catalogue) => {
        res.render("books", {
          nav,
          title: "Library App - Books",
          book_catalogue,
        });
    })

  });

  booksRouter.get("/:id", (req, res) => {
    const id = req.params.id;
    BookData.findOne( {_id: id})
    .then((book) => {
        res.render("book", {
          nav,
          book
        });
    })
  });

  return booksRouter;
}

module.exports = router;
