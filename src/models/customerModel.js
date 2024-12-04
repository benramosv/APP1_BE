// models/customerModel.js
import { client as db } from './db.js'; // Cambia 'pool' a 'db' para consistencia

class Customer {
  static async getAll() {
    const result = await db.query('SELECT * FROM customers');
    return result.rows;
  }

  static async create({ name, email, phone }) {
    const result = await db.query(
      'INSERT INTO customers (name, email, phone) VALUES ($1, $2, $3) RETURNING *',
      [name, email, phone]
    );
    return result.rows[0];
  }

  static async update(id, { name, email, phone }) {
    const result = await db.query(
      'UPDATE customers SET name = $1, email = $2, phone = $3 WHERE id = $4 RETURNING *',
      [name, email, phone, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM customers WHERE id = $1', [id]);
    return result.rowCount; // Devuelve el número de filas afectadas
  }
}

// Exportar la clase Customer
export default Customer;