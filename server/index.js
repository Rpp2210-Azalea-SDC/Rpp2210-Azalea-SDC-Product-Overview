const express = require('express');
const app = express();
const DB = require('../database/db.js')

app.use(express.urlencoded({
  extended: true
}));

app.get('/Products', (req, res) => {
  DB.getProducts((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  })
});

app.get('/ProductsID', (req, res) => {
  var id = req.query;
  DB.getProductByID(id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  })
});

app.get('/Styles', (req, res) => {
  var id = req.query;
  DB.getStyles(id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  })
});

app.get('/Features', (req, res) => {
  var id = req.query;
  DB.getFeatures(id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  })
});

app.get('/Related', (req, res) => {
  var id = req.query;
  DB.getRelated(id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  })
})




const port = 1111;
app.list(port, () => {
  console.log('Listening on Port: ', port);
})