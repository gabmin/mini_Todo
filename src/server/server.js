const express = require("express");
const http = require("http");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

//서버 생성
const server = http.createServer(app);
const port = 8080;
server.listen(port, () => {
  console.log(`Start Server : localhost:${port}`);
});

// cors 설정
const whitelist = ["http://localhost:8080"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed Origin!"));
    }
  },
};

app.use(cors(corsOptions));

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
