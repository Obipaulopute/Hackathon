import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PatientStatus() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    // Perform form validation or actions here
    navigate("/patientprofile"); // Navigate to the next page
  };


  return (
    <div>
      <div>
        <div className="m-auto flex justify-center items-center">
          <form onSubmit={handleSubmit}
            action=""
            className="flex flex-col  gap-4 px-4 py-24 w-[400px] text-center border "
          >
            <h2 className="font-semibold text-3xl">Sign In Now</h2>
            <input
              type="text"
              placeholder="Name  "
              className="border py-2 px-4  rounded-full "
            />
            <input
              type="text"
              placeholder="Surname"
              className="border py-2 px-4 rounded-full "
            />
            <input
              type="text"
              placeholder="Enter card number "
              className="border py-2 px-4 rounded-full"
            />
            <div class="flex items-center mb-10">
              <input
                type="checkbox"
                id="remember"
                class="h-4  text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <div className="w-full flex items-center justify-between">
                <label for="remember" class="ml-2 text-sm text-gray-600">
                  Remember me
                </label>
                <Link to=""> forget password? </Link>
              </div>
            </div>
            
            <button
              type="submit"
              class=" bg-blue-600 text-white py-2 px-4 rounded-3xl hover:bg-blue-700 transition duration-300"
            >
              Log In
             
            </button>
            
          </form>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default PatientStatus;
