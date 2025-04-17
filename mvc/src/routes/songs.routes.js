import express from 'express';
import { requestSongs, requestSingleSong, addSingleRecord } from './../controllers/songs.controller.js'

const router = express.Router();

router.get("/songs", requestSongs);
router.get('/songs/:songId', requestSingleSong);
router.get('/songs/add', addSingleRecord);

export default router;