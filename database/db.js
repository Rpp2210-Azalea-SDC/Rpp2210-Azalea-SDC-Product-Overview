const postgresDB = require("./postgreSQL.js");

const getProductByID = (id, callback) => {
  const pool = postgresDB();
  pool
    .query(
      `SELECT
      product.*,
      json_agg(
        json_build_object(
          'feature', features.feature,
          'value', features.value
        )
      ) AS features
      FROM product JOIN features ON product.product_id = features.product_id
      WHERE product.product_id = ${id}
      GROUP BY product.product_id
    `
    )
    .then((result) => {
      callback(null, result);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const getProducts = (callback) => {
  pool
    .query(`select * from product limit 5`)
    .then((result) => {
      callback(null, result);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const getStyles = (id, callback) => {
  pool.query();
};

const getFeatures = (id, callback) => {
  pool.query();
};

const getRelated = (id, callback) => {
  pool
    .query(
      `SELECT json_agg(related_id) AS related_ids
      FROM related_items
      WHERE product_id = ${id}`
    )
    .then((result) => {
      callback(null, result);
    })
    .catch((err) => {
      callback(err, null);
    });
};

module.exports = {
  getProducts,
  getProductByID,
  getStyles,
  getFeatures,
  getRelated,
};
