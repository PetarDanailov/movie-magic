import { Router } from "express";
import { getAll } from "../services/movieService.js";
const homeController = Router();

homeController.get('/', async (req,res) => {
  const movies = await getAll().lean()
  res.render("home",{movies});
})
homeController.get('/about', (req,res) =>{
  res.render("about");
})

export default homeController