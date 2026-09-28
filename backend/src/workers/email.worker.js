import { Worker } from "bullmq"
import transporter from "../utils/mail.js"
import { config } from "../config/config.js"

const connection = {
    username: config.REDIS_USERNAME,
    password: config.REDIS_PASSWORD,
    host: config.REDIS_HOST,
    port: Number(config.REDIS_PORT)
}

const worker = new Worker(
    "emailQueue",

    async (job) => {
        const { email, otp } = job.data

        if (job.name === "sentOtp") {
            await transporter.sendMail({
                from: config.MAIL_EMAIL,
                to: email,
                subject: "Password Reset otp",

                html: `
                    <h2>Password Reset</h2>
                    <p>Your OTP is:</p>
                    <h1>${otp}</h1>
                    <p>This OTP will expire in 5 minutes.</p>
                `,
            });
            console.log(`OTP email sent to ${email}`);
        }
    },
    {
        connection,
    }
)

worker.on("completed", (job) => {
    console.log(`job ${job.id} completed`);
});

worker.on("failed", (job, error) => {
    console.log(`job ${job?.id} failed:`, error.message);
});

