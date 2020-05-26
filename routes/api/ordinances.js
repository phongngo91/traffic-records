const express = require("express");
const router = express.Router();
const passport = require("passport");
const Ordinance = require("../../models/Ordinance");

router.get("/test", (req, res) => {
  res.json({ msg: "This is the ordinances route" });
});

router.get("/", (req, res) => {

  Ordinance
    .find()
    .then(ordinances => res.json(ordinances))
    .catch(err => res.status(400).json(err));
});

router.post("/", (req,res) => {
  passport.authenticate("jwt", { session: false });

  const ordinance = new Ordinance();
  ordinance.number = req.ordinance.number;
  ordinance.streetName = req.ordinance.streetName;

  ordinance.save()
    .then(action => res.json({ message: "successfully saved"}))
    .catch(err => res.json(err));
});

module.exports = router;