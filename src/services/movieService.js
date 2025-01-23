import movies from "../movies.js";
import Movie from "../models/Movie.js";
import {v4} from "uuid"
export function findMovie(movieId){
  return Movie.findById(movieId).lean();
}
export function create(movieData){
  const newId = v4()
  movies.push({
    id: newId,
    ...movieData})
}
export  function getAll(filter = {}){
  let result =  Movie.find({})
  
  if(filter.search){
    result = result.find({title: filter.search})
  }
  if(filter.genre){
    result = result.find({genre: filter.genre})
  }
  if(filter.year){
    result = result.find({year: filter.year})
  }
    
  return result;
}