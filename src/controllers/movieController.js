import { Router } from "express";
import { create, findMovie } from "../services/movieService.js";


const movieController = Router();

movieController.get("/create", (req,res)=> {
  res.render("create")
})

movieController.get('/search', (req,res) =>{
  res.render("search");
})
movieController.get('/:movieId/details', (req,res) =>{
  const movieId = req.params.movieId;
  const movie = findMovie(movieId)
  res.render("details",{movie});

})
movieController.post('/create', (req,res)=>{
  const newMovie = req.body;
  create(newMovie);
  res.redirect('/');
})

export default movieController