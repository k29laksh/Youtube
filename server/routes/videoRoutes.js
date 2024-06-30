import express from "express"
import { getVideos, uploadVideo } from "../controllers/videoController.js";
import upload from '../Helpers/fileHelpers.js'
import { likeController } from "../controllers/likeControllers.js";
import {
    likedVideoController,
    getlikedVideo,
    deletelikedVideo,
  } from "../controllers/likedVideo.js";
import auth from "../middlewares/auth.js";
const router= express.Router()

router.post("/uploadVideo",upload.single("file"),uploadVideo)
router.get("/getvideos",getVideos)
router.patch("/like/:id",likeController)
router.post("/likedVideo", auth, likedVideoController);
router.get("/getlikedVideo", getlikedVideo);
router.delete("/deletelikedVideo/:videoId/:Viewer", auth, deletelikedVideo);

export default router;