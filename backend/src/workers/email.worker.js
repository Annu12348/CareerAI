import { Worker } from "bullmq"
import transporter, { verifyMailConnection } from "../utils/mail.js"
import { config } from "../config/config.js"
import AppError from "../utils/error.js";

const connection = {
    username: config.REDIS_USERNAME,
    password: config.REDIS_PASSWORD,
    host: config.REDIS_HOST,
    port: Number(config.REDIS_PORT)
}

await verifyMailConnection();

const worker = new Worker(
    "emailQueue",

    async (job) => {

        if (job.name !== "sendOtp") {
            throw new AppError(`Unsupported email job: ${job.name}`, 401)
        }

        const { email, otp } = job.data

        if (!email || !otp) {
            throw new AppError("Email and OTP are required", 401)
        }


        const info = await transporter.sendMail({
            from: config.MAIL_EMAIL,
            to: email,
            subject: "CareerAI Password Reset OTP",
            text: `Your CareerAI OTP is ${otp}. It expires in 5 minutes.`,
            html: `
        <h2>CareerAI Password Reset</h2>
        <p>Your OTP is:</p>
        <h1>${otp}</h1>
        <p>This OTP will expire in <b>5 minutes</b>.</p>
                `,
        });

        console.log(
            `OTP email accepted by SMTP. Job ID: ${job.id}, Message ID: ${info.messageId}`
          );
      
          return { success: true };
    },
    {
        connection,
    }
)

worker.on("completed", (job) => {
    console.log(`Email job ${job.id} completed`);
  });

worker.on("failed", (job, error) => {
  console.error(`Email job ${job?.id} failed:`, error.message);
});

worker.on("error", (error) => {
    console.error("BullMQ worker error:", error.message);
  });

