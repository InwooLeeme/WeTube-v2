import express from "express";
import routes from "../router";

const vidoeRouter = express.Router();

vidoeRouter.get(routes.uploadVideo, (req,res) => res.send('video upload page'));
vidoeRouter.get(routes.videoDetail, (req, res) => res.send('Video Detail page'));
vidoeRouter.get(routes.deleteVideo, (req, res) => res.send('delete Video'));

export default vidoeRouter;