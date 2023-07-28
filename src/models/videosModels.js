import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  title: { type: String, required: true },
  img_url: { type: String, required: true },
}, {timestamps: true});

export const videos = mongoose.model('videos', videoSchema);