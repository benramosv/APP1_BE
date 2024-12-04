// routes/auth.js
import express from 'express';
import User from '../models/userModel.js'; // Asegúrate de que el modelo también use exportaciones ES6
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Middleware para verificar el token
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.AUTH_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Ruta para iniciar sesión
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findByEmail(email);
  if (!user) return res.status(400).send('User  not found');

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(403).send('Invalid credentials');

  const token = jwt.sign({ id: user.id, email: user.email }, process.env.AUTH_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Ruta para obtener información del usuario autenticado
router.get('/me', authenticateToken, (req, res) => {
  res.json(req.user);
});

export default router; // Cambia module.exports por export default