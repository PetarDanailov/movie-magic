import homeController from "./controllers/homeController.js";
import movieController from "./controllers/movieController.js";
import { Router } from "express";

const router = Router()
router.use(homeController)
router.use("/movies",movieController)
router.get("*", (req,res) => {
  res.render("404")
})
export default router;
