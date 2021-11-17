const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
var cors = require("cors");
const mysql = require("mysql");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
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
//     "CREATE TABLE contacts(id int AUTO_INCREMENT, firstname VARCHAR(255), lastName VARCHAR(255), email VARCHAR(255), phone VARCHAR(255), notes VARCHAR(255), company VARCHAR(255), jobTitle VARCHAR(255), isContactSelect boolean DEFAULT false, PRIMARY KEY(id))";
//   db.query(sql, (err, ressult) => {
//     if (err) throw err;
//     console.log(ressult);
//   });
//   res.end("table created successFully");
// });

// app.get("/", (req, res) => {
//   let sql = "INSERT INTO contacts SET ?";
//   let contact = {
//     firstname: "awais",
//     lastName: "malik",
//     email: "awais.malik.q@gmail.com",
//     phone: "0303-0989284",
//     notes: "this is first note",
//     company: "freelancer",
//     jobTitle: "webDevlopment",
//     isContactSelect: true,
//   };
//   db.query(sql, contact, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
//   res.send("contact add successfully");
// });

app.get("/", (req, res) => {
  let sql = "INSERT INTO contacts SET ?";
  let contact = {
    firstname: req.body.firstname,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    notes: req.body.notes,
    company: req.body.company,
    jobTitle: req.body.jobTitle,
    isContactSelect: req.body.isContactSelect,
  };
  db.query(sql, contact, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// second contact
// app.get("/addtwo", (req, res) => {
//   let sql = "INSERT INTO contacts SET ?";
//   let contact = {
//     firstname: "mohsin",
//     lastName: "Raza",
//     email: "malikMohsin.q@gmail.com",
//     phone: "03429996029",
//   };
//   db.query(sql, contact, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
//   res.send("contact add successfully");
// });
// get all  contacts information

app.get("/allcontacts", (req, res) => {
  let sql = "SELECT * FROM contacts";
  db.query(sql, (err, results) => {
    res.json(results);
  });
});

// select single contact from db

// app.get("/selectedcontact/:id", (req, res) => {
//   let sql = `SELECT * FROM contacts WHERE id = ${req.params.id}`;
//   db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
//   res.send("contact selected through id single");
// });

// update single contact

// app.get("/awais/:id", (req, res) => {
//   let userFname = "awaismalik";
//   let sql = `UPDATE contacts SET firstname = '${userFname}' WHERE id = ${req.params.id}`;

//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
//   res.send("contact first name update successfully");
// });

app.listen(PORT, () => {
  console.log(`server is running port number ${PORT}`);
});

//  id: 1,
//   firstName: 'muhammad awais',
//   email: 'awais.malik.q@gmail.com',
//   phone: '0303-0989284',
//   notes: 'this is notes data ',
//   company: 'testing',
//   jobTitle: 'free',
//   img: 'assets/images/user.jpeg',
//   lastName: 'malik',
//   isContactSelect: false,
