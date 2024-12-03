require('dotenv').config();
const express = require('express');
const { db } = require('@vercel/postgres');

const app = express();
app.use(express.json());

// Ruta de ejemplo para obtener facturas
app.get('/api/invoices', async (req, res) => {
  try {
    const client = await db.connect();
    const data = await client.sql`SELECT * FROM invoices`;
    res.json(data.rows);
  } catch (error) {
    console.error('Error fetching invoices:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});