// routes/invoiceRoutes.js
import express from 'express';
import invoiceController from '../controllers/invoiceController.js'; // Ensure the controller also uses ES6 exports

const router = express.Router();

// Obtener todas las facturas
router.get('/', invoiceController.getInvoices);

// Crear una nueva factura
router.post('/', invoiceController.createInvoice);

// Actualizar una factura existente
router.put('/:id', invoiceController.updateInvoice);

// Eliminar una factura
router.delete('/:id', invoiceController.deleteInvoice);

export default router; // Change module.exports to export default