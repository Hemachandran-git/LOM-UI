import express from 'express';
import { Pool } from 'pg';
import cors from 'cors';

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());


const pool = new Pool({
  user: 'postgres',        
  host: 'localhost',
  database: 'CRM_Database',    
  password: 'pgadmin',
  port: 5432,
});

pool.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch((err) => console.error('Connection error', err));

  export default pool


app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await pool.query(
      'INSERT INTO SignUpUsers (name, email, password) VALUES ($1, $2, $3)',
      [name, email, password]
    );
    res.status(200).send('User registered');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error registering user');
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
   const result = await pool.query(
    'INSERT INTO loginusers (email, password) VALUES ($1, $2)',
      [email, password]
  );
  if (result.rows.length > 0) {
    res.status(200).send('Login successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error logging in');
  }
});

app.listen(PORT, () => console.log(`Server runningg on port ${PORT}`));
