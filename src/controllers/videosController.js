import { getVideosListService } from "../services/videosService.js";

export const getVideoList = async (req, res) => {
    try {
        const videoList = await getVideosListService();
        res.status(200).json({
            message: 'Successfully fetched video list',
            data: videoList
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}