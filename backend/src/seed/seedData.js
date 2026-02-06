import mongoose from "mongoose";
import dotenv from "dotenv";

import User from "../models/User.js";
import Application from "../models/Application.js";
import UsageLog from "../models/UsageLog.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

/* CLEAN DB */
await User.deleteMany({});
await Application.deleteMany({});
await UsageLog.deleteMany({});

/* USERS */
const users = await User.insertMany([
  {
    name: "Alice Johnson",
    email: "alice@acme.com",
    department: "Engineering",
    role: "ADMIN"
  },
  {
    name: "Bob Smith",
    email: "bob@acme.com",
    department: "Sales",
    role: "EMPLOYEE"
  },
  {
    name: "Fiona Gallagher",
    email: "fiona@acme.com",
    department: "HR",
    role: "EMPLOYEE"
  },
  {
    name: "George Martin",
    email: "george@acme.com",
    department: "Sales",
    role: "EMPLOYEE"
  },
  {
    name: "Diana Prince",
    email: "diana@acme.com",
    department: "Engineering",
    role: "EMPLOYEE"
  }
]);

/* APPLICATIONS */
const apps = await Application.insertMany([
  {
    appName: "Jira",
    ownerTeam: "Engineering",
    category: "DevTools"
  },
  {
    appName: "Salesforce",
    ownerTeam: "Sales",
    category: "CRM"
  },
  {
    appName: "Zoom",
    ownerTeam: "IT",
    category: "Communication"
  },
  {
    appName: "Workday",
    ownerTeam: "HR",
    category: "HR"
  },
  {
    appName: "QuickBooks",
    ownerTeam: "Finance",
    category: "Finance"
  }
]);

/* USAGE LOGS (last 30 days) */
const actions = ["LOGIN", "VIEW", "EDIT", "EXPORT", "LOGOUT"];
const logs = [];

for (let i = 0; i < 60; i++) {
  logs.push({
    userId: users[Math.floor(Math.random() * users.length)]._id,
    appId: apps[Math.floor(Math.random() * apps.length)]._id,
    action: actions[Math.floor(Math.random() * actions.length)],
    durationInMinutes: Math.floor(Math.random() * 90) + 10,
    timestamp: new Date(Date.now() - Math.random() * 30 * 86400000)
  });
}

await UsageLog.insertMany(logs);

console.log("Database seeded successfully");
process.exit(0);
