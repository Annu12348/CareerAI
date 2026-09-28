import dotenv from 'dotenv'
dotenv.config();

export const config = {
    PORT: process.env.PORT,
    
    MONGODB_URL: process.env.MONGODB_URL,

    JWT_ACCESS_SECRET_KEY: process.env.JWT_ACCESS_SECRET_KEY,
    JWT_REFRESH_SECRET_KEY: process.env.JWT_REFRESH_SECRET_KEY,

    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: process.env.REDIS_PORT,
    REDIS_USERNAME: process.env.REDIS_USERNAME,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD,

    MAIL_EMAIL: process.env.MAIL_EMAIL,
    MAIL_PASS: process.env.MAIL_PASS,
}
