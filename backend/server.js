import express from 'express'
const server = express();
import { config } from './src/config/config.js';

server.get("/register", (res, req) => {
    req.status(200).json({
        message: "hello world"
    })
})

server.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`)
})