const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'feedbackform_db'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected');
});

module.exports = connection;
