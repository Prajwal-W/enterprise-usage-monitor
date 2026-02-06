import UsageLog from "../models/UsageLog.js";
import User from "../models/User.js";
import Application from "../models/Application.js";

/* KPI CARDS */
export const getKPIs = async (req, res) => {
  const totalUsers = await User.countDocuments();
  const activeUsersToday = await UsageLog.distinct("user", {
    date: { $gte: new Date().setHours(0,0,0,0) }
  });

  const totalApps = await Application.countDocuments();
  const totalMinutes = await UsageLog.aggregate([
    { $group: { _id: null, total: { $sum: "$durationMinutes" } } }
  ]);

  res.json({
    totalUsers,
    activeUsersToday: activeUsersToday.length,
    totalApplications: totalApps,
    totalUsageHours: Math.round(totalMinutes[0]?.total / 60)
  });
};

/* DAILY USAGE */
export const dailyUsage = async (req, res) => {
  const data = await UsageLog.aggregate([
    {
      $group: {
        _id: {
          $dateToString: {
            format: "%b %d",
            date: "$timestamp"
          }
        },
        minutes: { $sum: "$durationInMinutes" }
      }
    },
    { $sort: { _id: 1 } }
  ]);

  res.json(
    data.map(d => ({
      date: d._id,
      minutes: d.minutes
    }))
  );
};

/* TOP APPLICATIONS */
export const topApps = async (req, res) => {
  const data = await UsageLog.aggregate([
    {
      $group: {
        _id: "$appId",
        minutes: { $sum: "$durationInMinutes" }
      }
    },
    { $sort: { minutes: -1 } },
    { $limit: 5 },
    {
      $lookup: {
        from: "applications",
        localField: "_id",
        foreignField: "_id",
        as: "app"
      }
    },
    { $unwind: "$app" }
  ]);

  res.json(
    data.map(d => ({
      name: d.app.appName,
      minutes: d.minutes
    }))
  );
};

/* DEPARTMENT DONUT */
export const usageByDepartment = async (req, res) => {
  const data = await UsageLog.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "user"
      }
    },
    { $unwind: "$user" },
    {
      $group: {
        _id: "$user.department",
        value: { $sum: "$durationInMinutes" }
      }
    }
  ]);

  res.json(
    data.map(d => ({
      name: d._id,
      value: d.value
    }))
  );
};

/* RECENT ACTIVITY */
export const recentActivity = async (req, res) => {
  const logs = await UsageLog.find()
    .sort({ timestamp: -1 })
    .limit(10)
    .populate("userId", "name email department")
    .populate("appId", "appName");

  res.json(
    logs.map(log => ({
      user: log.userId.name,
      email: log.userId.email,
      department: log.userId.department,
      app: log.appId.appName,
      action: log.action,
      duration: `${log.durationInMinutes} min`,
      date: log.timestamp.toISOString().split("T")[0]
    }))
  );
};
