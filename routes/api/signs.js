const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ msg: "This is the signs route" });
});

router.post("/", (req,res) => {
  // const signAction = new SignAction();
  // signAction.action = "Install Stop Sign";
  // signAction.date = "05/13/1991";
  // signAction.names = "Bobs Burger";

  // signAction.save()
  //   .then(action => res.json({ message: "successfully saved"}))
  //   .catch(err => res.json(err));

  // const sign = new Sign();
  // sign.name = "Stop";
  // sign.signActions.push("5ecbbce149c2275b40686e52");

  // sign.save()
  //   .then(action => res.json({ message: "successfully saved"}))
  //   .catch(err => res.json(err));
});

module.exports = router;