import React from "react";

const PatientProfile = ({ patient }) => {
  // Sample patient data if not passed as props
  const samplePatient = {
    id: 1,
    name: "Lucky agbomoba",
    age: 34,
    gender: "Male",
    contact: "+234 807 9764 437",
    email: "okolatata@.com",
    address: "123 edo St, City, Country",
    medicalHistory: [
      { condition: "Hypertension", date: "2024-01-10" },
      { condition: "Allergy - Peanuts, Hot cake", date: "2023-02-22" },
      { condition: "Geno-type - AS", date: "2021-05-22" },
      { condition: "Blood sugar -  70–99 mg/dL  ", date: "2022-05-22" },
      { condition: "Blood pressure - Peanuts", date: "2024-05-22" },
      {
        condition: "Chronic conditions - diabetes, hypertension, asthma",
        date: "2023-05-22",
      },
    ],
    FamilyHistory: [
      { condition: "Heart disease", date: "2021-05-22" },
      { condition: "Stroke", date: "2024-05-22" },
      { condition: "Genetic disorders - cystic fibrosis", date: "2021-05-22" },
    ],
  };

  // Use passed-in patient prop or fallback to sample data
  const data = patient || samplePatient;

  return (
    <div className="max-w-full  mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="w-full z-10 top-0 text-2xl font-bold bg-[#4492a5] text-[#ffffff] p-4 fixed">
        Patient Profile
      </h1>
      {/*  grid here  */}
      <div>
        <div className=" flex flex-col justify-center items-center md:grid  md:grid-cols-3  md:justify-items-start gap-4">
          <div className="w-full bg-[#ffffff]  md:justify-self-center px-10 py-20">
            <div className="">
              <div className="w-56 h-56 bg-slate-400 text-center justify-self-center">
                {" "}
              </div>
            </div>
            <div className="mt-10 ">
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

            <div className="mt-4">
              <strong>
                <h3 className="text-[crimson]">Warning:</h3>
              </strong>
              <p className="text-[#7a7979]">
                medical review of patients medical history and recent
                test results, it has been determined that taking drugs of <b> oxydol </b> 
                poses significant risks to patient health.
              </p>
            </div>
          </div>
          {/* grid col 2 */}
            <div className=" flex flex-col items-center md:items-start gap-4 ">
              <div className="md:pt-20">
                <h1 className="font-semibold text-4xl text-[#000000d7] ">Advance identification finger print & DNA Search App</h1>
              </div>
              <div className="flex gap-4 ">
                <button className="border py-2 px-3 bg-[#eeeeee] font-semibold hover:bg-[#3222] ">
                  HIgh Blood Pressure{" "}
                </button>
                <button className="border py-2 px-3 bg-[#eeeeee] font-semibold hover:bg-[#3222]   ">
                  HIV{" "}
                </button>
                <button className="border py-2 px-3 bg-[#eeeeee] font-semibold hover:bg-[#3222]   ">
                  Malaria{" "}
                </button>
              </div>
              <div className="flex gap-4">
                <button className="border py-2 px-3 bg-[#eeeeee] font-semibold hover:bg-[#3222]   ">
                  HIgh Blood Pressure{" "}
                </button>
                <button className="border py-2 px-3 bg-[#eeeeee] font-semibold hover:bg-[#3222]   ">
                  Blood Sugar{" "}
                </button>
                <button className="border py-2 px-3 bg-[#eeeeee] font-semibold hover:bg-[#3222]   ">
                  Eye sight{" "}
                </button>
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
                <h2 className="text-xl font-semibold mt-10 text-[#282952]">
                  {" "}
                  Family History
                </h2>
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
        </div>
      </div> 
  );
};

export default PatientProfile;
