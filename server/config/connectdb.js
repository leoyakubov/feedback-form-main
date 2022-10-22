const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.CLEARDB_DATABASE_URL || 'localhost',
  user: process.env.CLEARDB_DATABASE_USER || 'root',
  password: process.env.CLEARDB_DATABASE_PASSWORD || 'test123',
  database: process.env.CLEARDB_DATABASE_DB || 'feedbackform_db'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected');
});

module.exports = connection;
