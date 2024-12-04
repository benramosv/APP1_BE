// routes/customerRoutes.js
import express from 'express';
import { getCustomers, createCustomer, updateCustomer, deleteCustomer } from '../controllers/customerController.js'; // Ensure the controller also uses ES6 exports

const router = express.Router();

// Obtener todos los clientes
router.get('/', getCustomers);

// Crear un nuevo cliente
router.post('/', createCustomer);

// Actualizar un cliente existente
router.put('/:id', updateCustomer);

// Eliminar un cliente
router.delete('/:id', deleteCustomer);

export default router; // Change module.exports to export default