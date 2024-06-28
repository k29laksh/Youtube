import express from "express"
import { auth } from "../controllers/authControllers.js"

const router= express.Router()

router.post("/login",auth)

export default router;