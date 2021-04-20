const express = require("express");
const authorsRouter = express.Router();
const BookData = require("../model/bookData")

function router(nav) {
  
    //const authors = require('../data/data.json');

    authorsRouter.get("/", (req, res) => {
      BookData.find()
      .then((authors) => {
          res.render("authors", {
            nav,
            title: "Library App - Authors",
            authors,
          });
      })
    });
  
    authorsRouter.get("/:id", (req, res) => {
      const id = req.params.id;
      BookData.findOne( {_id: id} )
      .then((author) => {
          res.render("author", {
            nav,
            author
          });
      })
    });
  
    return authorsRouter;
  }
  
  module.exports = router;
  