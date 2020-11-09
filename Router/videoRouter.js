import express from "express";
import { deleteController, uploadController, editVideoController, videoDetailController } from "../controller/videoController.js";
import routes from "../router.js";

const vidoeRouter = express.Router();

vidoeRouter.get(routes.uploadVideo, uploadController);
vidoeRouter.get(routes.deleteVideo, deleteController);
vidoeRouter.get(routes.editVideo, editVideoController);
vidoeRouter.get(routes.videoDetail, videoDetailController);

export default vidoeRouter;