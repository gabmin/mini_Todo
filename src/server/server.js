const express = require("express");
const http = require("http");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

require("dotenv").config();

//서버 생성
const server = http.createServer(app);
const port = 8080;
server.listen(port, () => {
  console.log(`Start Server : localhost:${port}`);
});

//CROS 설정
app.use(cors());

//mysql 연결 (환경변수 적용)
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.connect((err) => {
  if (!err) {
    console.log("Database connection complete");
  } else {
    console.log("connection is fail");
  }
});

// 할 일 리스트 불러오기
app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  connection.query("SELECT * FROM todolist", function (error, results, fields) {
    // connection.end();
    if (!error) {
      res.send(results);
      console.log(results);
    } else {
      console.log(error);
    }
  });
});

// 할 일 추가하기
app.post("/add", (req, res) => {
  var title = req.body.title;
  var description = req.body.description;
  var date = req.body.date;

  var sql = "INSERT INTO topic (title, description, date) VALUES (?, ?, ?)";
  connection.query(
    sql,
    [title, description, date],
    function (err, result, field) {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server  Error");
      }
      res.redirect("/todolist/" + result.insertId);
    }
  );
});
