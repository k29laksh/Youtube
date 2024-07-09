import mongoose from "mongoose";

const watchHistorySchema = mongoose.Schema({
  video: { type: mongoose.Schema.Types.ObjectId, ref: "VideoDetails", required: true },
  viewedOn: { type: Date, default: Date.now }
});

const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String },
  points: { type: Number, default: 0, min: 0 },
  desc: { type: String },
  joinedOn: { type: Date, default: Date.now },
  watchHistory: [watchHistorySchema],
  watchedVideos: [{ type: mongoose.Schema.Types.ObjectId, ref: "VideoDetails" }]  // Separate record for points
});

export default mongoose.model("User", userSchema);
