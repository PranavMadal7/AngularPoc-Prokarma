const express = require("express");
const bodyParser = require("body-parser");
const booksRoutes = require('./routes/books');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methos",
    "GET, POST, PUT, PATCH, DELETE,OPTIONS"
  );
  next();
});

app.use("/api/books", booksRoutes);



module.exports = app;
