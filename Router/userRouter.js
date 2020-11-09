import express from "express";
import routes from "../router.js";

const userRouter = express.Router();

userRouter.get(routes.editProfile, (req, res) => res.send('Edit Profile'));
userRouter.get(routes.changePassword,(req, res) => res.send('Change Password'));
userRouter.get(routes.userDetail, (req, res) => res.send('User Detail Page'));

export default userRouter;