import React from "react";
import { Link } from "react-router-dom";

function Appointment() {
  return (
    <div className="bg-[#eafaf6] w-full">
      <div className="container m-auto">
        <nav className="py-7">
          <h2 className="font-serif font-semibold text-2xl text-[#0f131f]">
            Ministry of Health
          </h2>
        </nav>

        <div className="py-10">
          <div className="grid grid-cols-auto-fit md:grid-cols-2 gap-4">
            <div className="">
              <h4 className="text-3xl ">Start Your appointment request here</h4>
              <button className="text-[blue] py-6">
                <Link to=""> Click here to reach us </Link>
              </button>
            </div>
            <div className="">
              <div className="py-8 border-[grey]  border-t">
                <Link to='/patientstatus'> <h5 className="font-serif font-semibold text-[#507383] text-xl hover:text-[#494343]">
                  Check medical status
                </h5></Link>
                <p>Provide your info and set a follow up time</p>
              </div>
              <div className="py-8 border-[grey] border-b border-t">
                <h5 className="font-serif font-semibold text-[#507383] text-xl  hover:text-[#494343]">
                  Returning patients
                </h5>
                <p>Provide your info and set a follow up time</p>
              </div>
              <div className="py-8 border-[grey] border-b">
                <h5 className="font-serif font-semibold text-[#507383] text-xl  hover:text-[#494343]">
                  Referring physicians
                </h5>
                <p>get consults and refer your patients </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <footer className="bg-[#585858] p-10  ">
          <h2 className="text-white font-semibold text-xl">Ministry for health </h2>
          <ul>
            <li>
              <p className="text-white">Get in touch with us today </p>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Appointment;
