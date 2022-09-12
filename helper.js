import { client } from "./index.js";
import bcrypt from "bcrypt";

export async function getAllMovies(request) {
    return await client.db("B37WD").collection("movies").find(request.query).toArray();
}
export async function getAllMoviesById(id) {
    return await client
        .db("B37WD")
        .collection("movies")
        .findOne({ id: id })
}
export async function deleteMoviesById(id) {
    return await client
        .db("B37WD")
        .collection("movies")
        .deleteOne({ id: id })
}
export async function addMovies(newMovies) {
    return await client
        .db("B37WD")
        .collection("movies")
        .insertMany(newMovies)
}
export async function updateMovieById(id,updateMovie) {
    return await client
        .db("B37WD")
        .collection("movies")
        .updateOne({ id: id }, { $set: updateMovie })
}
export async function genPassword(password)
{
  const salt  = await bcrypt.genSalt(10); //bcrypt.genSalt(no of rounds)
  console.log(salt)
  const hashPassword =  await bcrypt.hash(password, salt)
  return hashPassword
}


export async function createUser(username, hashedPassword) {
    return await client.db("B37WD").collection("users")
    .insertOne({username: username, password: hashedPassword});
}


export async function getUserByName(username) {
    return await client.db("B37WD").collection("users")
    .findOne({username: username});
}