const express = require('express');
const router  = express.Router();
const Book = require("../models/Book")



router.get('/', (req, res, next) => {
  res.render('index');
});




router.get('/books', (req, res, next) => {
  Book.find()
  .then((allTheBooks)=>{
    res.render('Books/books', {books: allTheBooks})
  })
  .catch(()=>{
    next(err);
  })
  
});




router.get('/books/new', (req, res, next) => {
  res.render('Books/books-new');
}); //to show the form




router.post('/books/create', (req, res, next) =>{
  Book.create(req.body)
    .then(()=>{
      res.redirect("/books");
    })
    .catch((err)=>{
      next(err);
    })
})


module.exports = router;
