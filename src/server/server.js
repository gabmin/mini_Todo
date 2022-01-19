const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 8080;

//서버 생성
const server = app.listen(port, () => {
  console.log(`Start Server : localhost:${port}`);
});

//mysql 연결
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rkqehf7187@",
  database: "minitodo",
});

connection.connect((err) => {
  if (!err) {
    console.log("Database connection complete");
  } else {
    console.log("connection is fail");
  }
});

app.get("/", (req, res) => {
  connection.query("SELECT * FROM todolist", function (error, results, fields) {
    connection.end();
    if (!error) {
      res.send(results);
      console.log(results);
    } else {
      console.log(error);
    }
  });
});
