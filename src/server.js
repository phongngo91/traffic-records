const express = require("express");
const app = express();

app.get("/", (req,res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {console.log(`Listening on port ${port}`);});

/*
  Kill the localhost:5000 process, if it is already running, before starting again
*/
process.once("SIGUSR2", () => {
  server.close(()=>{
    process.kill(process.pid, "SIGUSR2");
  });
});
