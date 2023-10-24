const mysql = require('mysql2');

const pool = mysql.createPool({
  host: '152.70.156.5',
  user: 'eleos',
  password: 'eleos123',
  database: 'eleos',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();
