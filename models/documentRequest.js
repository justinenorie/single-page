const mongoose = require("mongoose");

// Define the schema for document requests
const documentRequestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    studentID: { type: String, required: true },
    date: { type: Date, default: Date.now },
    status: { type: String, default: "unpaid" },
    requestedDocument: { type: [String], required: true },
    totalPayment: { type: Number, required: true },
    appointmentDate: { type: Date, default: null },
    appointmentTime: { type: String, default: null },
});

// Create the model based on the schema, ensure collection name matches the one in your MongoDB database
const DocumentRequest = mongoose.model('DocumentRequest', documentRequestSchema, 'documentRequestsList');

module.exports = DocumentRequest;