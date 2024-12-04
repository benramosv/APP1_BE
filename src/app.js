require('dotenv').config();
const express = require('express');
const { db } = require('@vercel/postgres'); //

const app = express();
app.use(express.json());

// Ruta de ejemplo para obtener facturas
/*app.get('/api/invoices', async (req, res) => {
  try {
    const client = await db.connect();
    const data = await client.sql`SELECT * FROM invoices`;
    res.json(data.rows);
  } catch (error) {
    console.error('Error fetching invoices:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});*/

// Ruta para crear una nueva factura
/*app.post('/api/invoices', async (req, res) => {
  const { customer_id, amount, status, date } = req.body;

  // Validar los datos recibidos
  if (!customer_id || !amount || !status || !date) {
    return res.status(400).json({ error: 'Todos los campos son requeridos.' });
  }

  try {
    const client = await db.connect(); // Conectar al cliente de la base de datos
    // Insertar la nueva factura en la base de datos
    const result = await client.sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customer_id}, ${amount}, ${status}, ${date})
      RETURNING *;`; // Devuelve la factura creada

    // Enviar la factura creada como respuesta
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error al crear la factura:', error);
    res.status(500).json({ error: 'Error al crear la factura.' });
  }
});*/

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});