const postgresDB = require("./postgreSQL.js");

const getProductByID = (id, callback) => {
  const pool = postgresDB();
  pool
    .query(
      `select
      product.*,
      json_agg(
        json_build_object(
          'feature', features.feature,
          'value', features.value
        )
      ) AS features
      from product join features on product.product_id = features.product_id
      where product.product_id = ${id}
      group by product.product_id
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
  pool.query(``);
};

const getFeatures = (id, callback) => {
  pool.query(
    `select
    product.*,
    json_agg(
    json_build_object(
      'feature', features.feature,
      'value', features.value
    )
    ) AS features
    from product join features on product.product_id = features.product_id
    where product.product_id = ${id}
    group by product.product_id`
  );
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
