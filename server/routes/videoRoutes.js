import express from "express"
import { getVideos, uploadVideo } from "../controllers/videoController.js";
import upload from '../Helpers/fileHelpers.js'
import { likeController } from "../controllers/likeControllers.js";
import { ViewController } from "../controllers/views.js";

import {
    likedVideoController,
    getlikedVideo,
    deletelikedVideo,
  } from "../controllers/likedVideo.js";

  import {
    watchLaterController,
    getwatchLater,
    deletewatchLater,
  } from "../controllers/watchLater.js";

  import {
    historyController,
    getHistory,
    clearhistory,
  } from "../controllers/history.js";
import auth from "../middlewares/auth.js";
const router= express.Router()

router.post("/uploadVideo",auth,upload.single("file"),uploadVideo)
router.get("/getvideos",getVideos)
router.patch("/like/:id",auth,likeController)
router.patch("/view/:id", ViewController);

router.post("/likedVideo", auth, likedVideoController);
router.get("/getlikedVideo", getlikedVideo);
router.delete("/deletelikedVideo/:videoId/:Viewer", auth, deletelikedVideo);

// Watch Later Routes
router.post("/watchLater", auth, watchLaterController);
router.get("/getwatchLater", getwatchLater);
router.delete("/deletewatchLater/:videoId/:Viewer", auth,deletewatchLater);

// watch history

router.post("/history", auth, historyController);
router.get("/getHistory", getHistory);
router.delete("/clearhistory/:userId",auth, clearhistory)

export default router;