import express from "express";
import handlebars from "express-handlebars";
import router from "./routes.js";
import showRatingHelper from "./helpers/ratingHelper.js";
import mongoose from "mongoose";

const app = express();
// db config 
try{
   const uri = 'mongodb://localhost:27017/magic-movies';
   await mongoose.connect(uri);
   console.log("Db connected successfully!")
} catch (err){
  console.error("Cannot connect to DB");
  console.error(err.message)
}
//set up handlebars 
app.engine("hbs", handlebars.engine({
  extname: "hbs",
  helpers:{
    showRating: showRatingHelper
  }
}))
app.set("view engine", "hbs")
app.set("views", "./src/views")

app.use('/static',express.static("src/public"))
app.use(express.urlencoded({
  extended: false
}))
app.use(router)


app.get('/detail', (req,res) =>{
  res.render("details");
})

app.listen(5000, () => {
  console.log("server listening on http://localhost:5000")
})