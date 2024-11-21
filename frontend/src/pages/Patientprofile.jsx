import React from 'react';

const PatientProfile = ({ patient }) => {
  // Sample patient data if not passed as props
  const samplePatient = {
    id: 1,
    name: 'Lucky agbomoba',
    age: 34,
    gender: 'Male',
    contact: '123-456-7890',
    email: 'okolatata@.com',
    address: '123 edo St, City, Country',
    medicalHistory: [
      { condition: 'Hypertension', date: '2022-01-15' },
      { condition: 'Allergy - Peanuts, Hot cake', date: '2021-05-22' },
      { condition: 'Geno-type - AS', date: '2021-05-22' },
      { condition: 'Blood sugar - ', date: '2021-05-22' },
      { condition: 'Blood pressure - Peanuts', date: '2021-05-22' },
      { condition: 'Chronic conditions - diabetes, hypertension, asthma', date: '2021-05-22' },
      
    ],
    FamilyHistory: [
        { condition: 'Heart disease', date: '2021-05-22' },
        { condition: 'Stroke', date: '2021-05-22' },
        { condition: 'Genetic disorders - cystic fibrosis', date: '2021-05-22' },
      ],
  };

  // Use passed-in patient prop or fallback to sample data
  const data = patient || samplePatient;

  return (
    <div className="max-w-full mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold bg-slate-400 p-2">Patient Profile</h1>
    <div className='flex flex-col items-center md:grid md:grid-cols-3  container m-auto'>
        <div  className='m-auto'> <div className='w-56 h-56 bg-slate-400 text-center' >  </div></div>
        <div className='col-span-2'> 
            <h1 className='text-5xl '>Advance identification <br /> and family search App</h1>
            <div className=' flex flex-col gap-4 mt-10'>
                <div className='flex gap-4'>
                    <button className=''>HIgh Blood Pressure </button>
                    <button className='border py-1 px-3  '>HIV </button>
                    <button className='border py-1 px-3  '>Malaria </button>
                    
                </div>
                <div className='flex gap-4'>
                    <button className='border py-1 px-3  '>HIgh Blood Pressure </button>
                    <button className='border py-1 px-3  '>Blood Sugar </button>
                    <button className='border py-1 px-3  '>Eye sight </button>
                
                </div>
                </div>
        </div>
    </div>



<div  className="w-full flex flex-col items-center">

      <div>
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
        <h2 className="text-xl font-semibold mt-10 text-[#282952]"> Family History</h2>
        <ul className="list-disc list-inside">
          {data.medicalHistory.map((entry, index) => (
            <li key={index}>
              {entry.condition} - <em>{entry.date}</em>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
   
    
    </div>
  );
};

export default PatientProfile;
