const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Data received!");
});

app.get("/hello", (req, res) => {
  res.send("welcome");
});

app.listen(port, () => {
  console.log(`Server up and running on port: ${port}`);
});
