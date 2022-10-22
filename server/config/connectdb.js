const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.CLEARDB_DATABASE_URL || 'localhost',
  user: 'root',
  password: 'test123',
  database: 'feedbackform_db'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected');
});

module.exports = connection;
