import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    _id: { type: Number, required: true},
    video_id: { type: Number, required: true },
    username: { type: String, required: true },
    comment: { type: String, required: true },
}, {timestamps: true});

export const Comments = mongoose.model('comments', commentSchema);