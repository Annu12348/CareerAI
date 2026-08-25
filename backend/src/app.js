import express from 'express'
import cookieParser from 'cookie-parser'
import authRoutes from "./routes/auth.routes.js"
import errorHandlingMiddleware from './middleware/errorHandling.middleware.js';

const app = express();
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)

app.use(errorHandlingMiddleware)

export default app;