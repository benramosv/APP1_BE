// models/userModel.js
import { client as db } from './db.js'; // Cambia 'pool' a 'db' para consistencia

class User {
  static async getAll() {
    const result = await db.query('SELECT * FROM users');
    return result.rows;
  }

  static async create({ name, email, password }) {
    const result = await db.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, password]
    );
    return result.rows[0];
  }
}

// Exportar la clase User
export default User;