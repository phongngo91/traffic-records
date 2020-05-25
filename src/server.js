const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("../config/keys").mongoURI;
const users = require("../routes/api/users");
const ordinances = require("../routes/api/ordinances");
const signs = require("../routes/api/signs");
const User = require("../models/User");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch(err => console.log(err));

app.get("/", (req,res) => {
  const user = new User({
    userName: "kevin",
    password: "kevinisgreat"
  });
  user.save();
  res.send("Hello A/a!");
});

app.use("/api/users", users);
app.use("/api/ordinances", ordinances);
app.use("/api/signs", signs);

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {console.log(`Listening on port ${port}`);});
