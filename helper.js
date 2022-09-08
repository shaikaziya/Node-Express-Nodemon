import { client } from "./index.js";

export async function getAllMovies(request) {
    return await client.db("B37WD").collection("movies").find(request.query).toArray();
}
export async function insertMovies(newMovies) {
    return await client
        .db("B37WD")
        .collection("movies")
        .insertMany(newMovies)
}
export async function deleteMoviesById(id) {
    return await client
        .db("B37WD")
        .collection("movies")
        .deleteOne({ id: id })
}
export async function getAllMoviesById(id) {
    return await client
        .db("B37WD")
        .collection("movies")
        .findOne({ id: id })
}
