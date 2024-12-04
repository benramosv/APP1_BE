// routes/userRoutes.js
import express from 'express';
import { getUsers, createUser } from '../controllers/userController.js'; // Asegúrate de que el controlador también use exportaciones ES6

const router = express.Router();

// Obtener todos los usuarios
router.get('/', getUsers);

// Crear un nuevo usuario
router.post('/', createUser);

// Aquí puedes agregar más rutas para login, etc.

export default router; // Cambia module.exports por export default