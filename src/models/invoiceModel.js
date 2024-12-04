// models/invoiceModel.js
import { client as db } from './db.js'; // Ensure 'db' is used consistently

class Invoice {
  static async getAll() {
    const result = await db.query('SELECT * FROM invoices');
    return result.rows;
  }

  static async create({ customer_id, amount, due_date }) {
    const result = await db.query(
      'INSERT INTO invoices (customer_id, amount, due_date) VALUES ($1, $2, $3) RETURNING *',
      [customer_id, amount, due_date]
    );
    return result.rows[0];
  }

  static async update(id, { customer_id, amount, status }) {
    const result = await db.query(
      'UPDATE invoices SET customer_id = $1, amount = $2, status = $3 WHERE id = $4 RETURNING *',
      [customer_id, amount, status, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM invoices WHERE id = $1', [id]);
    return result.rowCount; // Devuelve el número de filas afectadas
  }
}

// Export the Invoice class
export default Invoice;