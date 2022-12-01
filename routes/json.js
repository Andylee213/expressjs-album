var express = require('express');
const mysql = require('mysql2')

var router = express.Router();

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'dbuser',
  password: '123321',
  database: 'albums'
});

connection.connect(function(err) {
  if (err) {
      return console.error('Database Connection Error: ' + err.message);
  }
  console.log('Database Connection is Successful.');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("hello");
  const user_query = "SELECT * FROM photo";
  connection.query(user_query, function(error, result, fields) {
      if (error) throw error;
      //console.log("result ... ", result);
      //console.log("result ... ", JSON.stringify(result));
      res.json(result);

  });      
});

module.exports = router;
