import { del, get, post, put} from "./api.js";

export async function getAll() {
    return get('/data/albums?sortBy=_createdOn%20desc');
}

export async function createSong(songData) {
    return post('/data/albums/', songData)
}

export async function getById(id) {
    return get('/data/albums/' + id);
}

export async function deleteById(id) {
    return del('/data/albums/' + id);
}

export async function editSong(id, songData) {
    return put('/data/albums/' + id, songData);
}