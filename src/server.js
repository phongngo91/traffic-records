const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("../config/keys").mongoURI;
const users = require("../routes/api/users");
const ordinances = require("../routes/api/ordinances");
const signs = require("../routes/api/signs");
const Sign = require("../models/Sign");
const Ordinance = require("../models/Ordinance");
const User = require("../models/User");
const SignAction = require("../models/Sign_Action");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch(err => console.log(err));

app.get("/", (req,res) => {

  const ordinance = new Ordinance();
  ordinance.number = "12-2013";

  ordinance.save()
    .then(action => res.json({ message: "successfully saved"}))
    .catch(err => res.json(err));
});

app.use("/api/users", users);
app.use("/api/ordinances", ordinances);
app.use("/api/signs", signs);

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {console.log(`Listening on port ${port}`);});
