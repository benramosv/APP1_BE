// controllers/invoiceController.js
import Invoice from '../models/invoiceModel.js'; // Ensure the model also uses ES6 exports

export async function fetchRevenue(req, res) {
  try {
    const data = await Invoice.getRevenue(); // Ensure this method exists in the Invoice model
    res.json(data);
  } catch (error) {
    console.error('Database Error:', error);
    res.status(500).json({ error: 'Failed to fetch revenue data.' });
  }
}

export const getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.getAll();
    res.json(invoices);
  } catch (error) {
    console.error('Error fetching invoices:', error);
    res.status(500).json({ error: 'Failed to fetch invoices' });
  }
};

export const createInvoice = async (req, res) => {
  const { customer_id, amount, status, date } = req.body;
  try {
    const newInvoice = await Invoice.create({ customer_id, amount, status, date });
    res.status(201).json(newInvoice);
  } catch (error) {
    console.error('Error creating invoice:', error);
    res.status(500).json({ error: 'Failed to create invoice' });
  }
};

export const updateInvoice = async (req, res) => {
  const { id } = req.params;
  const { customer_id, amount, status } = req.body;
  try {
    const updatedInvoice = await Invoice.update(id, { customer_id, amount, status });
    if (!updatedInvoice) {
      return res.status(404).json({ error: 'Invoice not found' });
    }
    res.json(updatedInvoice);
  } catch (error) {
    console.error('Error updating invoice:', error);
    res.status(500).json({ error: 'Failed to update invoice' });
  }
};

export const deleteInvoice = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Invoice.delete(id);
    if (result === 0) {
      return res.status(404).json({ error: 'Invoice not found' });
    }
    res.status(204).send(); // No content
  } catch (error) {
    console.error('Error deleting invoice:', error);
    res.status(500).json({ error: 'Failed to delete invoice' });
  }
};

// Exportar todas las funciones como un objeto por defecto
export default {
  getInvoices,
  createInvoice,
  updateInvoice,
  deleteInvoice
};