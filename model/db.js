const pool = require("./postgreSQL.js");

async function getProductByID(id, callback) {
  try {
    const result = await pool.query(
      `select
      product.*,
      json_agg(
        json_build_object(
          'feature', features.feature,
          'value', features.value
        )
      ) AS features
      from product join features on product.id = features.product_id
      where product.id = ${id}
      group by product.id;
    `
    );
    callback(null, result.rows[0]);
  } catch (err) {
    console.log("error ===>", err);
    callback(err, null);
  }
}

async function getProducts(callback) {
  try {
    const result = await pool.query(
      `SELECT id, name, slogan, description, category, default_price FROM product LIMIT 5;`
    );
    callback(null, result.rows);
  } catch (err) {
    console.log("error ===>", err);
    callback(err, null);
  }
}

async function getStyles(id, callback) {
  try {
    const result = await pool.query(
      `
      SELECT
      styles.product_id,
      json_agg(
          json_build_object(
              'style_id', styles.id,
              'name', styles.name,
              'original_price', styles.original_price,
              'sale_price', styles.sale_price,
              'default?', styles.style_default,
              'photos', (
                  SELECT json_agg(
                      json_build_object(
                          'thumbnail_url', photos.thumbnail_url,
                          'url', photos.url
                      )
                  )
                  FROM photos
                  WHERE photos.style_id = styles.id
              ),
              'skus', (
                  SELECT json_object_agg(
                      skus.id,
                      json_build_object(
                          'quantity', skus.quantity,
                          'size', skus.size
                      )
                  )
                  FROM skus
                  WHERE skus.style_id = styles.id
              )
          )
      ) AS results
    FROM styles
    WHERE styles.product_id = ${id} GROUP BY styles.product_id;
`
    );
    callback(null, result.rows[0]);
  } catch (err) {
    console.log("error ===>", err);
    callback(err, null);
  }
}

async function getFeatures(id, callback) {
  try {
    const result = await pool.query(
      `select
    product.*,
    json_agg(
    json_build_object(
      'feature', features.feature,
      'value', features.value
    )
    ) AS features
    from product join features on product.id = features.product_id
    where product.id = ${id}
    group by product.id;`
    );
    callback(null, result.rows[0]);
  } catch (err) {
    console.log("error ===>", err);
    callback(err, null);
  }
}

async function getRelated(id, callback) {
  try {
    const result = await pool.query(
      `SELECT json_agg(related_id) AS related_ids
      FROM related
      WHERE product_id = ${id}`
    );
    callback(null, result.rows[0].related_ids);
  } catch (err) {
    console.log("error ===>", err);
    callback(err, null);
  }
}

module.exports = {
  getProducts,
  getProductByID,
  getStyles,
  getFeatures,
  getRelated,
};
