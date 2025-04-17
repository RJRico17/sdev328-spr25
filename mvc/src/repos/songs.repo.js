import fse from 'fs-extra';

//reads the JSON array and converts to JS-object array
const songs = fse.readJsonSync("./src/db/songs.json");

export const getAllSongs = () => {
    return songs;
}

export const getSongById = (id) => {
    const found = songs.find(el=>el.id===Number(id))
    return found;
}

export const addSong = (song) => {
    song.id = songs.length + 1;
    songs.push(song);

}

export const updateSong = (id, song) => {

}

export const deleteSong = (id) => {

}