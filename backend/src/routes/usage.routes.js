import express from "express";
import {
  getKPIs,
  dailyUsage,
  topApps,
  usageByDepartment,
  recentActivity
} from "../controllers/usage.controller.js";

const router = express.Router();

router.get("/kpis", getKPIs);
router.get("/daily", dailyUsage);
router.get("/top-apps", topApps);
router.get("/by-department", usageByDepartment);
router.get("/recent", recentActivity);

export default router;
