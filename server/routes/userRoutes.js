import express from "express"
import { auth } from "../controllers/authControllers.js"
import { getAllUsers, updateUserProfile } from "../controllers/userControllers.js"

const router= express.Router()

router.post("/login",auth)
router.patch("/update/:id",updateUserProfile)
router.get("/getAllChannels",getAllUsers)

export default router;