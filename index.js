const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.end("heelo from node");
});

app.listen(3000, () => {
  console.log("Server started");
});
