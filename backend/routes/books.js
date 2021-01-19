const express = require("express");
const router = express.Router();
const BookController = require('../controllers/books');

router.get("/:id", BookController.getBooks);

module.exports = router;
