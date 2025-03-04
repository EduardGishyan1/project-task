import checkToken from "../middlewares/checkToken.js"
import express from "express"
import userController from "../controllers/userController.js"
import IsAdmin from "../middlewares/checkRole.js"

const userRouter = express.Router()

userRouter.get("/",checkToken, IsAdmin, userController.seeUsers)
userRouter.get("/:id",checkToken, IsAdmin ,userController.seeUserByID)
userRouter.get("/profile/me",checkToken,userController.getUserProfile)
userRouter.put("/profile/me",checkToken,userController.updateUserProfile)
userRouter.delete("/profile/me",checkToken,userController.deleteUserProfile)
userRouter.delete("/:id",checkToken, IsAdmin ,userController.deleteUserById)
userRouter.put("/:id",checkToken ,userController.updateUserById)

export default userRouter