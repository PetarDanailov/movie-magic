import express from "express";
import handlebars from "express-handlebars";
import router from "./routes.js";

const app = express();
app.engine("hbs", handlebars.engine({
  extname: "hbs"
}))
app.set("view engine", "hbs")
app.set("views", "./src/views")

app.use('/static',express.static("src/public"))
app.use(router)
app.use(express.urlencoded({
  extended: false
}))


app.get('/detail', (req,res) =>{
  res.render("details");
})

app.listen(5000, () => {
  console.log("server listening on http://localhost:5000")
})