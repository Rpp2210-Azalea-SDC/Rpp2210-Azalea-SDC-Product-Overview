const { Pool } = require("pg");
require("dotenv").config();

const client = new Pool({
  host: "localhost",
  port: 5432,
  database: process.env.DBname,
  user: process.env.DBuser,
  password: process.env.DBpw,
});

client.connect((err, client, release) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
});

module.exports = client;
