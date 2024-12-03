const { listInvoices, createInvoice } = require('../models/invoiceModel.js');

async function getInvoices(req, res) {
    try {
        const invoices = await listInvoices();
        res.status(200).json(invoices);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch invoices' });
    }
}

async function addInvoice(req, res) {
    const { customerId, amount, status } = req.body;
    try {
        await createInvoice(customerId, amount, status);
        res.status(201).json({
            message: 'Invoice created successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to create invoice' });
        }
    }
    
    module.exports = { getInvoices, addInvoice };s