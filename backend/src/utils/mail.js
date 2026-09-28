import nodemaile from "nodemailer";
import { config } from "../config/config.js";

const transporter = nodemaile.createTransport({
    service: "gmail",

    auth: {
        user: config.MAIL_EMAIL,
        pass: config.MAIL_PASS
    }
})

export default transporter;