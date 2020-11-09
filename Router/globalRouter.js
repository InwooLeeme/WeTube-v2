import express from "express";
import { homeController, joinController, loginController, logoutController, searchController } from "../controller/globalController.js";
import routes from "../router.js";

const globalRouter = express.Router();

globalRouter.get(routes.home, homeController);
globalRouter.get(routes.join, joinController);
globalRouter.get(routes.login, loginController);
globalRouter.get(routes.logout,logoutController);
globalRouter.get(routes.search, searchController);

export default globalRouter;