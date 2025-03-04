import express from "express"
import authController from "../controllers/authController.js"
import checkToken from "../middlewares/checkToken.js"

const authRouter = express.Router()

authRouter.post("/register", authController.registerUser)
authRouter.post("/login", authController.loginUser)
authRouter.get("/logout", checkToken, authController.logoutUser)

export default authRouter