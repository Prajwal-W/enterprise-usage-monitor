import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./src/config/db.js";
import userRoutes from "./src/routes/user.routes.js";
import appRoutes from "./src/routes/app.routes.js";
import usageRoutes from "./src/routes/usage.routes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/apps", appRoutes);
app.use("/api/usage", usageRoutes);

const PORT = process.env.PORT || 5000; 

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
