const mongoose = require('mongoose');

// Define the patient schema
const patientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [50, 'First name cannot exceed 50 characters']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    maxlength: [50, 'Last name cannot exceed 50 characters']
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  contactNumber: {
    type: String,
    trim: true,
    match: [/^\d{10,15}$/, 'Contact number must be between 10 and 15 digits'],
    required: [true, 'Contact number is required']
  },
  address: {
    street: { type: String, trim: true },
    city: { type: String, trim: true },
    state: { type: String, trim: true },
    postalCode: { type: String, trim: true }
  },
  medicalHistory: {
    type: [String], // Array of strings for listing medical conditions
    default: []
  },
  emergencyContact: {
    name: { type: String, trim: true },
    relationship: { type: String, trim: true },
    phone: {
      type: String,
      trim: true,
      match: [/^\d{10,15}$/, 'Contact number must be between 10 and 15 digits']
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create the model
const patient = mongoose.model('patient', patientSchema);

// Export the model (optional, if used in other files)
module.exports = patient;
