import express from "express";
import { getApplications } from "../controllers/app.controller.js";

const router = express.Router();

router.get("/", getApplications);

export default router;
