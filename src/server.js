const express = require("express");
const app = express();

app.get("/", (req,res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {console.log(`Listening on port ${port}`);});
