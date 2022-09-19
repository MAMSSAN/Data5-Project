const config = require("config");
const Joi = require("joi");
const mongoose = require("mongoose");
const joueur = require("./routes/Joueur");
const auth = require("./routes/auth");
const centre = require("./routes/centre");
const rencontre = require("./routes/Rencontre");
const stats = require("./routes/stats");
const express = require("express");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/test1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongoDB ..."))
  .catch((err) => console.error("could not connect to MongoDB ... ", err));
app.use(express.json());
app.use("/api/joueur", joueur);
app.use("/api/auth", auth);
app.use("/api/centre", centre);
app.use("/api/rencontre", rencontre);
app.use("/api/stats", stats);

var listener = app.listen(8888, function () {
  console.log("Listening on port " + listener.address().port); //Listening on port 8888
});
