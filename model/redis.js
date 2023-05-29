const redis = require("redis");
require("dotenv").config();

const redisClient = () => {
  const client = redis.createClient({
    socket: {
      host: process.env.RedisHost,
      port: 6379,
    },
  });

  client.connect();

  client.on("connect", (result) => {
    console.log("Connected to Redis!!!");
  });

  return client;
};

module.exports = redisClient;
