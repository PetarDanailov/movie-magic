import express from "express";

const app = express();

app.get('/', (req,res) => {
  res.send("It works");
})

app.listen(5000, () => {
  console.log("server listening on http://localhost:5000")
})