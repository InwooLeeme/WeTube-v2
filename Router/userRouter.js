import express from "express";
import { changePasswordController, editProfileController, UserDetailController } from "../controller/userController.js";
import routes from "../router.js";

const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfileController);
userRouter.get(routes.changePassword,changePasswordController);
userRouter.get(routes.userDetail, UserDetailController);

export default userRouter;