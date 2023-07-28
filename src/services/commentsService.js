import { Comments } from "../models/commentsModels.js";
import generateID from "../utils/generateID.js";

export const getCommentListService = async (video_id) => {
    const data = await Comments.find({video_id: video_id});
    return data;
}

export const submitCommentService = async (video_id, username, comment) => {
    const _id = generateID();
    try {
        const newComment = new Comments({
            _id,
            video_id,
            username,
            comment
        });
        await newComment.save();
        return { success: true }
    } catch (error) {
        return { success: false }
    }
}