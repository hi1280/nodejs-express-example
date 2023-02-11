var express = require('express');
var router = express.Router();
const mysql = require('mysql2/promise');

router.get('/', async function(req, res, next) {
  const connection = await mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
  });
  const [countries] = await connection.execute('SELECT * from country');
  res.render('index', { title: 'Express', countries });
});

module.exports = router;
