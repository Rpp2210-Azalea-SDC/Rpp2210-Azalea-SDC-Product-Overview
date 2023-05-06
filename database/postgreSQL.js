const { Pool } = require('pg');
require('dotenv').config();

const postgresDB = () => {
  const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: process.env.DBname,
    user: process.env.DBuser,
    password: process.env.DBpw,
  });
  pool.connect();
  return pool;
}

module.exports = postgresDB;
