const client = require('../models/db.js');

async function listInvoices() {
    const data = await client.sql`
        SELECT invoices.amount, customers.name
        FROM invoices
        JOIN customers ON invoices.customer_id = customers.id
        WHERE invoices.amount = 555;
    `;
    return data.rows;
}

async function createInvoice(customerId, amount, status) {
    const date = new Date().toISOString().split('T')[0];
    await client.sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${customerId}, ${amount}, ${status}, ${date});
    `;
}

module.exports = { listInvoices, createInvoice };