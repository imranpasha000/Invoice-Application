// server/models/Invoice.js
const mongoose = require('mongoose');

const InvoiceItemSchema = new mongoose.Schema({
  item: String,
  description: String,
  hsn: String,
  qty: Number,
  unitPrice: Number,
  sgst: Number,
  cgst: Number,
  total: Number
});

const InvoiceSchema = new mongoose.Schema({
  items: [InvoiceItemSchema],
  customerNote: String,
  grandTotal: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Invoice', InvoiceSchema);
