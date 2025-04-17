import { getAllSongs, getSongById } from './../repos/songs.repo.js';

export const requestSongs = (req, res) => {
    const songs = getAllSongs();
    res.status(200).json(songs);
}

export const requestSingleSong = (req,res) => {
    const song = getSongById(req.params.id);
    console.log(song);
    if (song) {
        res.status(200).json(song);
    }
    else {
        res.status(404).send("No song found!");
    }
}

export const addSingleRecord = (req,res)=> {
    const {title,artist,release,length,album} = req.query;
    const song = {
        title,
        artist,
        release,
        length,
        album
    };
    addSong(song);
    res.status(201).send("Song added");
}