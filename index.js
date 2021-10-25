const express = require("express");
const app = express();
PORT = process.env.PORT || 4000;
const mysql = require("mysql");

// create connection
const db = mysql.createConnection({
  host: "31.170.167.61",
  user: "u768972843_awais",
  password: "4/OdOc=8#q",
  database: "u768972843_awais",
});
db.connect((err) => {
  if (err) throw err;
  console.log("db connected successfully");
});

app.get("/test", (req, res) => {
  let sql =
    "CREATE TABLE contacts(id int AUTO_INCREMENT,firstname VARCHAR(255), lastName VARCHAR(255), email VARCHAR(255), PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
  res.send("create table successfully");
});

app.listen(PORT, () => console.log(`server is running port number ${PORT}`));
