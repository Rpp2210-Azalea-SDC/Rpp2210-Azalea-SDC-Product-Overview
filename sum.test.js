const { Client } = require(`pg`);
const app = require("./server/index.js");
require("dotenv").config();

// const getProductByID = require("./database/db.js"); // db.js called
// const getProducts = require("./database/db.js");

const DBpw = process.env.DBpw;
const DBname = process.env.DBname;
const DBuser = process.env.DBuser;

describe("postgres database test", () => {
  let client;
  beforeAll(() => {
    client = new Client({
      host: "localhost",
      port: 5432,
      database: DBname,
      user: DBuser,
      password: DBpw,
    });
    client.connect();
  });

  it("test if database has productoverview data", async () => {
    const res = await client.query(`SELECT
    product.*,
    json_agg(
      json_build_object(
        'feature', features.feature,
        'value', features.value
      )
    ) AS features
    FROM product JOIN features ON product.id = features.product_id
    WHERE product.id = 3
    GROUP BY product.id
  `);
    // console.log(
    //   "Test response select * from product where product_id = 1:",
    //   res.rows
    // );
    expect(res.rows.length).toBeGreaterThan(0);
  }, 3000);

  it("test returned from products to be count of 5", async () => {
    const res = await client.query(`select * from product limit 5`);
    // console.log("Test response select * from product limit 5:", res.rows);
    expect(res.rows.length).toBe(5);
  });

  it("tests the related items returned to be [2, 3, 8, 7]", async () => {
    const res = await client.query(
      `SELECT json_agg(related_id) AS related_ids
      FROM related
      WHERE product_id = 1`
    );
    // console.log(
    //   "tests the related items returned to be [2, 3, 8, 7] ===> ",
    //   res.rows[0].related_ids
    // );
    expect(res.rows[0].related_ids).toEqual([2, 3, 8, 7]);
  });

  it("tests the styles database linked with photos", async () => {
    const res = await client.query(`
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
    WHERE styles.product_id = 942182 GROUP BY styles.product_id;
`);
    console.log(res.rows[0].results);
    expect(res.rows.length).toBeGreaterThan(0);
  }, 30000);

  afterAll(() => {
    client.end();
  });
});
