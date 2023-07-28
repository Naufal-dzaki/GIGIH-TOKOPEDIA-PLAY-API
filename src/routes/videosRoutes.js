import express from 'express';
import { getVideoList } from '../controllers/videosController.js';

const videosRouter = express.Router();

videosRouter.get('/', getVideoList);

export default videosRouter;