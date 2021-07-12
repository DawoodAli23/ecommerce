const mysql = require("mysql");
require("dotenv").config();
let db;
const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

const connectDatabase = () => {
  if (!db) {
    connection.connect((err) => {
      if (err) {
        console.log("CONNECTION TO DATABASE FAILED");
      } else {
        console.log("CONNECTION TO DATABASE ESTABLISHED");
      }
    });
  }
  return db;
};

module.exports = connectDatabase();
