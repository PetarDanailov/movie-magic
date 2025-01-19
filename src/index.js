import express from "express";
import handlebars from "express-handlebars";
import router from "./controllers/homeController.js";
const app = express();
app.engine("hbs", handlebars.engine({
  extname: "hbs"
}))
app.set("view engine", "hbs")
app.set("views", "./src/views")

app.use('/static',express.static("src/public"))
app.use(router)


app.get('/search', (req,res) =>{
  res.render("search");
})
app.get('/create', (req,res) =>{
  res.render("create");
})
app.get('/detail', (req,res) =>{
  res.render("details");
})
app.get("*", (req,res) => {
  res.render("404")
})
app.listen(5000, () => {
  console.log("server listening on http://localhost:5000")
})