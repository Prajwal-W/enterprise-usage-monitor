import Application from "../models/Application.js";

export const getApplications = async (req, res) => {
  try {
    const apps = await Application.find();
    res.json(apps);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch applications" });
  }
};
