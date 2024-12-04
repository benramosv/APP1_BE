// src/server.js
import express from 'express';
import bodyParser from 'body-parser';
import { connect } from './models/db.js'; // Asegúrate de que la conexión a la base de datos esté configurada
import invoiceRoutes from './routes/invoiceRoutes.js';
import customerRoutes from './routes/customerRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json());

// Conectar a la base de datos
(async () => {
  try {
    await connect(); // Asegúrate de que esto esté dentro de una función async o en el nivel superior de un módulo async

    // Rutas
    app.use('/api/invoices', invoiceRoutes);
    app.use('/api/customers', customerRoutes);
    app.use('/api/users', userRoutes);

    // Manejo de errores
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Something broke!');
    });

    // Iniciar el servidor
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  }
})();