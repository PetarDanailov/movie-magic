import movies from "../movies.js";
import Movie from "../models/Movie.js";
export function findMovie(movieId){
  return Movie.findById(movieId).lean();
}
export function create(movieData){
  const newMovie = Movie.create(movieData)
  movies.push({
    ...movieData,
    rating: Number(movieData.rating),
    year: Number(movieData.year),
  });
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