const bcrypt = require('bcrypt');
const { getUser  } = require('../models/userModel.js');

async function login(req, res) {
    const { email, password } = req.body;
    const user = await getUser (email);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const passwordsMatch = await bcrypt.compare(password, user.password);
    if (!passwordsMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    // Aquí puedes generar un token o manejar la sesión
    res.status(200).json({ message: 'Login successful', user });
}

module.exports = { login };