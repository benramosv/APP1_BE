// routes/invoiceRoutes.js
import express from 'express';
import { fetchRevenue, getInvoices, createInvoice, updateInvoice, deleteInvoice } from '../controllers/invoiceController.js'; // Ensure the controller also uses ES6 exports

const router = express.Router();

//********************************** */
router.get('/revenue', fetchRevenue);

// Obtener todas las facturas
router.get('/', getInvoices);

// Crear una nueva factura
router.post('/', createInvoice);

// Actualizar una factura existente
router.put('/:id', updateInvoice);

// Eliminar una factura
router.delete('/:id', deleteInvoice);

export default router; // Change module.exports to export default