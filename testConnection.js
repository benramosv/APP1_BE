require('dotenv').config();
const { db } = require('@vercel/postgres');

async function testConnection() {
  try {
    const client = await db.connect();
    console.log('Connected to the database');
    
    // Realiza una consulta simple para verificar la conexión
    const data = await client.sql`SELECT NOW()`;
    console.log('Current time from database:', data.rows[0]);

  } catch (err) {
    console.error('Database connection error:', err);
  }
}

testConnection();