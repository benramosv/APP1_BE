function authMiddleware(req, res, next) {
    // Aquí puedes verificar el token o la sesión del usuario
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    // Verifica el token y continúa
    next();
}

module.exports = authMiddleware;