const { Client } = require(`pg`);
require("dotenv").config();
const DBpw = process.env.DBpw;
const DBname = process.env.DBname;
const DBuser = process.env.DBuser;

describe("postgres database test", () => {
  let client;
  beforeAll(() => {
    client = new Client({
      host: 'localhost',
      port: 5432,
      database: DBname,
      user: DBuser,
      password: DBpw,
    });
    client.connect();
  });



  it("test if database has productoverview data", async () => {
    const res = await client.query(`select * from product where product_id = 1`);
    expect(res.rows.length).toBeGreaterThan(0);
  }, 3000);

  afterAll(() => {
    client.end();
  });
});