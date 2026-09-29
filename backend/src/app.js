import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import userRoutes from "./routes/user.routes.js"
import errorHandlingMiddleware from './middleware/errorHandling.middleware.js';
import resumeRoutes from "./routes/resume.routes.js"

const allowedOrigins = [
  "http://localhost:3000",
  "https://career-ai-woad.vercel.app",
];

const app = express();
app.use(express.json())
app.use(
    cors({
      origin: allowedOrigins,
      credentials: true,
    })
  );
app.use(cookieParser())

app.use("/api/auth", userRoutes)
app.use("/api/resume", resumeRoutes)

app.use(errorHandlingMiddleware)

export default app;