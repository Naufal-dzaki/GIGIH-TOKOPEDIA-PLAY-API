import { videos } from "../models/videosModels.js";

export const getVideosListService = async () => {
    let data = await videos.find();
    return data;
}