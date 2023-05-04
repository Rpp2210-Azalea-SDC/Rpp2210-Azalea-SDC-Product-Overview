const postgresDB = require('database somewhere!!!'); // needs fixing!!!

const getProductByID = (id, callback) => {
  postgresDB.query(`select * from product where id = ${id}`)
  .then((result) => {
    callback(null, result);
  })
  .catch((err) => {
    callback(err, null);
  })
}

const getProducts = (callback) => {
  postgresDB.query()
};


const getStyles = (id, callback) => {
  postgresDB.query()
}

const getFeatures = (id, callback) => {
  postgresDB.query()
}

const getRelated = (id, callback) => {
  postgresDB.query()
}


module.exports = {
  getProducts,
  getProductByID,
  getStyles,
  getFeatures,
  getRelated
}