const express = require("express");
const app = express();
const port = 8080;

const server = app.listen(port, () => {
  console.log(`Start Server : localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
