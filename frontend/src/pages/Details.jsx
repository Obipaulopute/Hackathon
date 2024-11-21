import React from 'react';

const PatientProfile = ({ patient }) => {
  // Sample patient data if not passed as props
  const samplePatient = {
    id: 1,
    name: 'John Doe',
    age: 34,
    gender: 'Male',
    contact: '123-456-7890',
    email: 'johndoe@example.com',
    address: '123 Main St, City, Country',
    medicalHistory: [
      { condition: 'Hypertension', date: '2022-01-15' },
      { condition: 'Allergy - Peanuts', date: '2021-05-22' },
    ],
  };

  // Use passed-in patient prop or fallback to sample data
  const data = patient || samplePatient;

  return (
    <div className="p-4 max-w-full mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold">Patient Profile Status </h1>
      <div className="space-y-2">
        <div>
          <strong>Name:</strong> {data.name}
        </div>
        <div>
          <strong>Age:</strong> {data.age}
        </div>
        <div>
          <strong>Gender:</strong> {data.gender}
        </div>
        <div>
          <strong>Contact:</strong> {data.contact}
        </div>
        <div>
          <strong>Email:</strong> {data.email}
        </div>
        <div>
          <strong>Address:</strong> {data.address}
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Medical History</h2>
        <ul className="list-disc list-inside">
          {data.medicalHistory.map((entry, index) => (
            <li key={index}>
              {entry.condition} - <em>{entry.date}</em>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientProfile;
