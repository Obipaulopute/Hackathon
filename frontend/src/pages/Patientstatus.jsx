import React from "react";
import { Link } from "react-router-dom";

function PatientStatus() {
  return (
    <div>
      <div>
        <div className="">
          <form
            action=""
            className="flex flex-col space-y-3 w-[600px] m-auto p-5"
          >
            <input
              type="text"
              placeholder="Patient name  "
              className="border py-2 px-4 "
            />
            <input
              type="text"
              placeholder="Patient surname"
              className="border py-2 px-4 "
            />
            <input
              type="text"
              placeholder="Enter card number "
              className="border py-2 px-4"
            />
            <button>
              {" "}
              <Link
                to="/patientprofile"
                className="border p-3 bg-slate-400 text-[white] font-semibold font-serif "
              >
                {" "}
                Search for patient{" "}
              </Link>{" "}
            </button>
          </form>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default PatientStatus;
