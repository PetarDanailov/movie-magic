import movies from "../movies.js";
import {v4} from "uuid"
export function findMovie(movieId){
  return movies.find(movie => movie.id == movieId)
}
export function create(movieData){
  const newId = v4()
  movies.push({
    id: newId,
    ...movieData})
}
export function getAll(){
  return movies;
}