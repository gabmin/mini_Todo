const express = require("express");
const http = require("http");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//환경변수 적용
require("dotenv").config();

//서버 생성
const server = http.createServer(app);
const port = 8080;
server.listen(port, () => {
  console.log(`Start Server : localhost:${port}`);
});

//CROS 설정
app.use(cors());

//mysql 접속 (환경변수 적용)
const DB = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});
//mysql 연결
DB.connect((err) => {
  if (!err) {
    console.log("Database connection complete");
  } else {
    console.log("connection is fail");
  }
});

// 할 일 리스트 불러오기
app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  DB.query("SELECT * FROM todolist", function (error, results, fields) {
    if (!error) {
      res.send(results);
      console.log(results);
    } else {
      console.log(error);
    }
  });
});

// 할 일 추가하기
app.post("/card", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const date = req.body.date;

  const sql =
    "INSERT INTO todolist (title, description, date) VALUES (?, ?, NOW())";
  DB.query(sql, [title, description, date], function (err, result, field) {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
    res.send(result);
  });
});

// 할 일 삭제하기
app.delete("/card/:id", (req, res) => {
  const sql = "DElETE FROM todolist WHERE id = ?";
  DB.query(sql, [req.params.id], function (err, result, field) {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
    res.send(result);
  });
});
