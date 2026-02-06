import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    appName: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      required: true
    },
    ownerTeam: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ["ACTIVE", "DISABLED"],
      default: "ACTIVE"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Application", applicationSchema);
