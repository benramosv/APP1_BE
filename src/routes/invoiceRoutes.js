const express = require('express');
const { getInvoices, addInvoice } = require('../controllers/invoiceController');

const router = express.Router();

router.get('/', getInvoices);
router.post('/', addInvoice);

module.exports = router;