const express = require("express");
const app = express();
const path = require("path");
const consoleLog = require("./practice-middleware");

app.use(express.static("./new-public"));
app.use(consoleLog);

app.get("/sample", (req, res) => {
  res.send("This is working");
});

app.all("*", (req, res) => {
  res.status(400).send("Resource Not Found");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
