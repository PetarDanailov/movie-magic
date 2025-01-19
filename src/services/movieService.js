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
export function getAll(filter = {}){
  let result = movies
  if(filter.search){
    result = result.filter(movie => movie.title.toLowerCase().includes(filter.search.toLowerCase()))
  }
  if(filter.genre){
    result = result.filter(movie => movie.genre.toLowerCase() === filter.genre.toLowerCase())
  }
  if(filter.year){
    result = result.filter(movie => movie.year === filter.year)
  }
  return result;
}