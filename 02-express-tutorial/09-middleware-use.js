//executes during the request to the server
//has access to request and response objects
//when you work with middleware you must pass it to another middleware

const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

//req =>  middleware => res

// applies to any route after /api
// app.use("/api", logger);

app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
