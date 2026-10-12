import nodemaile from "nodemailer";
import { config } from "../config/config.js";

const requiredEnv = [
    "SMTP_USER",
    "SMTP_PASS",
    "MAIL_EMAIL",
];

for (const key of requiredEnv) {
    if (!config[key]) {
        throw new Error(`Missing required email configuration: ${key}`);
    }
}

const smtpPort = Number(config.SMTP_PORT || 2525);

const transporter = nodemaile.createTransport({
    host: config.SMTP_HOST,
    port: smtpPort,
    secure: smtpPort === 465,

    auth: {
        user: config.SMTP_USER,
        pass: config.SMTP_PASS
    }
})

export const verifyMailConnection = async () => {
    await transporter.verify()

    console.log("Brevo SMTP connection verified")
}

export default transporter;