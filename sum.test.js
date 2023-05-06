const sum = require("./sum");
require("dotenv").config();

const { Client } = require(‘pg’);

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});


describe(‘postgres database test’, () => {
  let client;
  beforeAll(() => {
    client = new Client({
      host: localhost,
      port: 5432,
      database: productoverview,
      user: alvinruan,
      password: process.env.DBpw,
    });
  });


  it(‘test if database has question data’, async () => {
    const res = await client.query(‘select * from product where product_id = 1;’);
    expect(res.rows.length).toBeGreaterThan(0);
  }, 10000);
  afterAll(() => {
    client.end();
  });
});