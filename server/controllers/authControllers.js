import jwt from "jsonwebtoken";
import User from "../models/auth.js";
import Video from "../models/singlefile.js";  // Import the Video model

// Authentication controller remains unchanged
export const auth = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      try {
        const newUser = await User.create({ email });
        const token = jwt.sign(
          { email: newUser.email, id: newUser._id },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );
        res.status(201).json({ result: newUser, token });
      } catch (err) {
        console.error("Error creating user:", err);
        res.status(500).json({ message: "Something went wrong while creating the user.", error: err.message });
      }
    } else {
      const token = jwt.sign(
        { email: existingUser.email, id: existingUser._id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.status(200).json({ result: existingUser, token });
    }
  } catch (err) {
    console.error("Error finding user:", err);
    res.status(500).json({ message: "Something went wrong while finding the user.", error: err.message });
  }
};

export const addToWatchHistory = async (req, res) => {
  const { userId, videoId } = req.body;

  try {
    const user = await User.findById(userId);
    const video = await Video.findById(videoId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    const existingEntry = user.watchHistory.find(entry => entry.video.toString() === videoId);
    const alreadyWatched = user.watchedVideos.includes(videoId);

    if (existingEntry) {
      existingEntry.viewedOn = new Date();
    } else {
      user.watchHistory.push({ video: videoId });

      if (!alreadyWatched) {
        user.points += 5;  // Increase points by 5 for a new video
        user.watchedVideos.push(videoId);  // Add video to watchedVideos to track points
      }
    }

    await user.save();
    res.status(200).json({ message: "Watch history updated", points: user.points });
  } catch (error) {
    console.error("Error updating watch history:", error);
    res.status(500).json({ message: "Something went wrong while updating the watch history.", error: error.message });
  }
};

export const getWatchHistory = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId).populate('watchHistory.video');

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ watchHistory: user.watchHistory, points: user.points });
  } catch (error) {
    console.error("Error retrieving watch history:", error);
    res.status(500).json({ message: "Something went wrong while retrieving the watch history.", error: error.message });
  }
};

export const clearWatchHistory = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.watchHistory = [];
    await user.save();
    res.status(200).json({ message: "Watch history cleared" });
  } catch (error) {
    console.error("Error clearing watch history:", error);
    res.status(500).json({ message: "Something went wrong while clearing the watch history.", error: error.message });
  }
};
