// routes/patients.js

const express = require('express');
const router = express.Router();
const Patient = require('../model/patient'); // Import the patient model

// 1. Create a new patient
router.post('/http://localhost:5173/patientRegistrationForm', async (req, res) => {
  try {
    const { name, age, address, condition, medicalHistory, currentStatus } = req.body;
    const newPatient = new Patient({
      name,
      age,
      address,
      condition,
      medicalHistory,
      currentStatus
    });

    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// 2. Get all patients
router.get('/', async (req, res) => {
  try {
    const patient = await Patient.find();
    res.json(patient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// 3. Get a patient by ID
router.get('/:id', async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.json(patient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// 4. Update a patient by ID
router.put('/:id', async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.json(patient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// 5. Delete a patient by ID
router.delete('/:id', async (req, res) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.json({ message: 'Patient deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
