import React, { useState } from 'react';

const PatientRegistrationForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    phoneNumber: '',
    email: '',
    address: '',
    medicalHistory: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit =  async (e) => {
    e.preventDefault();
    // Validate and process form data here
    console.log('Form Data Submitted:', formData);
    alert('Patient registered successfully!');
    // Clear the form (optional)
    setFormData({
      fullName: '',
      age: '',
      gender: '',
      phoneNumber: '',
      email: '',
      address: '',
      medicalHistory: '',
    });
    try {
      const response = await fetch('http://localhost:3001/patient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log('Response from server:', data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }




  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow-lg bg-white">
      <h2 className="text-2xl mb-4">Patient Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder='Fullname'
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          
          <input
            type="number"
            id="age"
            name="age"
            placeholder='Age'
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder='Phone'
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <textarea
            id="address"
            name="address"
            placeholder='Address'
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <textarea
            id="medicalHistory"
            name="medicalHistory"
            placeholder='Medical History'
            value={formData.medicalHistory}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          ></textarea>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Register Patient
        </button>
      </form>
    </div>
  );
};

export default PatientRegistrationForm;
