const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ msg: "This is the ordinances route" });
});

router.post("/", (req,res) => {

  const ordinance = new Ordinance();
  ordinance.number = "T.O. 12-2013";

  ordinance.save()
    .then(action => res.json({ message: "successfully saved"}))
    .catch(err => res.json(err));
});

module.exports = router;