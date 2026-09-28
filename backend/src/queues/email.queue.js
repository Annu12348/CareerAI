import { Queue } from "bullmq";
import { config } from "../config/config.js";

const connection = {
    username: config.REDIS_USERNAME,
    password: config.REDIS_PASSWORD,
    host: config.REDIS_HOST,
    port: Number(config.REDIS_PORT)
}

export const emailQueue = new Queue("emailQueue", {
    connection
});