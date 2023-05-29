const express = require("express");
const DB = require("../model/db.js");
const Redis = require("../model/redis.js");

const redisClient = Redis();

async function fetchFromRedis(key) {
  try {
    const value = await redisClient.get(key);
    return value;
  } catch (err) {
    return err;
  }
}

async function setRedis(key, value) {
  try {
    await redisClient.set(key, value);
  } catch (err) {
    return err;
  }
}

fetchFromRedis("styles-9421");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/Products", async (req, res) => {
  var checked = await fetchFromRedis("products-1");
  if (checked) {
    res.send(JSON.parse(checked));
  } else {
    DB.getProducts((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        setRedis("products-1", JSON.stringify(data));
        res.send(data);
      }
    });
  }
});

app.get("/ProductbyID", async (req, res) => {
  const { id } = req.query;
  var checked = await fetchFromRedis(`prodID-${id}`);
  if (checked) {
    res.send(checked);
  } else {
    DB.getProductByID(id, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        setRedis(`prodID-${id}`, JSON.stringify(data));
        res.send(data);
      }
    });
  }
});

app.get("/Styles", async (req, res) => {
  const { id } = req.query;
  var checked = await fetchFromRedis(`styles-${id}`);
  if (checked) {
    res.send(checked);
  } else {
    DB.getStyles(id, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        setRedis(`styles-${id}`, JSON.stringify(data));
        res.send(data);
      }
    });
  }
});

app.get("/Features", async (req, res) => {
  const { id } = req.query;
  var checked = await fetchFromRedis(`styles-${id}`);
  if (checked) {
    res.send(JSON.parse(checked));
  } else {
    DB.getFeatures(id, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        setRedis(`features-${id}`, JSON.stringify(data));
        res.send(data);
      }
    });
  }
});

app.get("/Related", async (req, res) => {
  const { id } = req.query;
  var checked = await fetchFromRedis(`styles-${id}`);
  if (checked) {
    res.send(JSON.parse(checked));
  } else {
    DB.getRelated(id, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        setRedis(`related-${id}`, JSON.stringify(data));
        res.send(data);
      }
    });
  }
});

const port = 8080;
app.listen(port, () => {
  console.log("Listening on Port: ", port);
});

module.exports.app = app;
