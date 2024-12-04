// controllers/customerController.js
import Customer from '../models/customerModel.js'; // Asegúrate de que el modelo también use exportaciones ES6

export const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.getAll();
    res.json(customers);
  } catch (error) {
    console.error('Error fetching customers:', error);
    res.status(500).json({ error: 'Failed to fetch customers' });
  }
};

export const createCustomer = async (req, res) => {
  const { name, email, image_url } = req.body;
  try {
    const newCustomer = await Customer.create({ name, email, image_url });
    res.status(201).json(newCustomer);
  } catch (error) {
    console.error('Error creating customer:', error);
    res.status(500).json({ error: 'Failed to create customer' });
  }
};

export const updateCustomer = async (req, res) => {
  // ...existing code...
};

export const deleteCustomer = async (req, res) => {
  // ...existing code...
};

// Exportar todas las funciones como un objeto por defecto
export default {
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer
};