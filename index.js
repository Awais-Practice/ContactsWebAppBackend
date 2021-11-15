const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mysql = require("mysql");

var db = mysql.createPool({
  connectionLimit: 10,
  host: "31.170.167.61",
  user: "u768972843_awais",
  password: "4/OdOc=8#q",
  database: "u768972843_awais",
});

// create table mysql

// app.get("/", (req, res) => {
//   let sql =
//     "CREATE TABLE contacts(id int AUTO_INCREMENT,firstname VARCHAR(255), lastName VARCHAR(255), email VARCHAR(255), phone VARCHAR(255), PRIMARY KEY(id))";
//   db.query(sql, (err, ressult) => {
//     if (err) throw err;
//     console.log(ressult);
//   });
//   res.end("table created successFully");
// });

app.get("/", (req, res) => {
  let sql = "INSERT INTO contacts SET ?";
  let contact = {
    firstname: "awais",
    lastName: "malik",
    email: "awais.malik.q@gmail.com",
    phone: "0303-0989284",
  };
  db.query(sql, contact, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
  res.send("contact add successfully");
});

// second contact
app.get("/addtwo", (req, res) => {
  let sql = "INSERT INTO contacts SET ?";
  let contact = {
    firstname: "mohsin",
    lastName: "Raza",
    email: "malikMohsin.q@gmail.com",
    phone: "03429996029",
  };
  db.query(sql, contact, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
  res.send("contact add successfully");
});
// update contact information

app.get("/allcontacts", (req, res) => {
  let sql = "SELECT * FROM contacts";
  db.query(sql, (err, results) => {
    console.log(results);
  });
  res.send("all postes fatched in console log");
});

app.listen(PORT, () => {
  console.log(`server is running port number ${PORT}`);
});
