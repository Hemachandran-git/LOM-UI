const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'pgadmin',
  database: 'CRM_Database',
  port: 5432
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Connection error:', err);
  } else {
    console.log('Connected! Server time:', res.rows[0]);
  }
  pool.end();
});
