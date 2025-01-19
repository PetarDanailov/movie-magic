import movies from "../movies.js";
export function findMovie(movieId){
  return movies.find(movie => movie.id == movieId)
}