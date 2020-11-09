import express from "express";
import routes from "../router.js";

const vidoeRouter = express.Router();

vidoeRouter.get(routes.uploadVideo, (req,res) => res.send('video upload page'));
vidoeRouter.get(routes.deleteVideo, (req, res) => res.send('delete Video'));
vidoeRouter.get(routes.editVideo, (req,res) => res.send('video edit page'));
vidoeRouter.get(routes.videoDetail, (req, res) => res.send('Video Detail page'));


export default vidoeRouter;