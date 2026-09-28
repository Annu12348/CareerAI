import { createClient } from "redis"
import { config } from "../config/config.js";

const redisClient = new createClient({
  username: config.REDIS_USERNAME,
  password: config.REDIS_PASSWORD,
  socket: {
    host: config.REDIS_HOST,
    port: Number(config.REDIS_PORT)
  }
})

redisClient.on("error", (error) => {
  console.error("Redis Client Error:", error);
});

await redisClient.connect();

console.log("Redis connected successfully");

export default redisClient;