import mongoose from "mongoose";

const usageLogSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    appId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Application",
      required: true
    },
    action: {
      type: String,
      required: true
    },
    durationInMinutes: {
      type: Number,
      required: true
    },
    timestamp: {
      type: Date,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("UsageLog", usageLogSchema);
