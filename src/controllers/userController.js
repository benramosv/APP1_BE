// controllers/userController.js
import User from '../models/userModel.js'; // Asegúrate de que el modelo también use exportaciones ES6
import bcrypt from 'bcrypt';

export const getUsers = async (req, res) => {
  try {
    const users = await User.getAll();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

export const createUser  = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser  = await User.create({ name, email, password: hashedPassword }); // Asegúrate de que el modelo use el campo correcto
    res.status(201).json(newUser );
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
};

// Aquí puedes agregar más funciones para login y otras operaciones

// Similar para login y otras operaciones