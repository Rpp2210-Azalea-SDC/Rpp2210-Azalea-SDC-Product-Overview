const express = require("express");
const DB = require("../model/db.js");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/Products", (req, res) => {
  DB.getProducts((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
});

app.get("/ProductbyID", (req, res) => {
  const { id } = req.query;
  DB.getProductByID(id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
});

app.get("/Styles", (req, res) => {
  const { id } = req.query;
  console.log("called SDC styles", id);
  DB.getStyles(id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
});

app.get("/Features", (req, res) => {
  const { id } = req.query;
  DB.getFeatures(id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
});

app.get("/Related", (req, res) => {
  const { id } = req.query;
  DB.getRelated(id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
});

const port = 8080;
app.listen(port, () => {
  console.log("Listening on Port: ", port);
});

module.exports.app = app;
