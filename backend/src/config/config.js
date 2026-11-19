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
    SMTP_PASS: process.env.SMTP_PASS,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,

    FRONT_END_URLS: process.env.FRONT_END_URL,

    IMAGEKIT_PUBLIC_KEY: process.env.IMAGEKIT_PUBLIC_KEY,
    IMAGEKIT_PRIVATE_KEY: process.env.IMAGEKIT_PRIVATE_KEY,
    IMAGEKIT_URL_ENDPOINT: process.env.IMAGEKIT_URL_ENDPOINT,

    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,

    NODE_ENV: process.env.NODE_ENV || "development"
}
