import express from "express"
import authRouter from "./routes/authRouter.js"
import productRouter from "./routes/productRouter.js"
import userRouter from './routes/userRouter.js'
import cookieParser from "cookie-parser"


const app = express()

app.use(cookieParser())
app.use(express.json());

app.use("/auth",authRouter);
app.use("/products",productRouter)
app.use("/users",userRouter)

export default app