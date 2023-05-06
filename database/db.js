const postgresDB = require('./postgreSQL.js');



const getProductByID = (id, callback) => {
  const pool = postgresDB();
  pool.query(`select * from product where id = ${id}`)
  .then((result) => {
    callback(null, result);
  })
  .catch((err) => {
    callback(err, null);
  })
}

const getProducts = (callback) => {
  pool.query()
};


const getStyles = (id, callback) => {
  pool.query()
}

const getFeatures = (id, callback) => {
  pool.query()
}

const getRelated = (id, callback) => {
  pool.query()
}


module.exports = {
  getProducts,
  getProductByID,
  getStyles,
  getFeatures,
  getRelated
}