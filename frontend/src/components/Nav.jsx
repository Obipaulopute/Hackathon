import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="fixed z-10 bg-[#fffefe] w-full py-8 shadow-lg">
        <nav className="container mx-auto ">
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold font-serif text-[#0c1235]">Ministry of Health </h2>
            <ul className="space-x-4">
              <Link to="/appointment" className="font-semibold"> Request appointment </Link>
              <Link to="#" className="font-semibold">About </Link>
              <Link to="patientstatus" className="font-semibold"> Log in </Link>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
