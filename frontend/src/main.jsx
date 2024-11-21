import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import './index.css';
import Admin from "./pages/Admin";
import PatientRegistrationForm from "./components/Admin/PatientRegistrationForm";
import AboutLink from "./components/About/AboutLink";
import Appointment from "./pages/Appointment";
import Patientstatus from "./pages/Patientstatus";
import PatientStatus from "./pages/Patientstatus";
import PatientProfile from "./pages/Patientprofile";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    
  },
  {
    path: "/About",
    element: <About />,
    
  },
  {
    path: "/admin",
    element: <Admin />,
    
  },
  {
    path: "/patientregistrationform",
    element: <PatientRegistrationForm />,
  },
  {
    path: "/aboutlink",
    element: <AboutLink />
  },
  {
    path: "/appointment",
    element: <Appointment />
  },
  {
    path: "/patientstatus",
    element: <PatientStatus />
  },
  {
    path: 'PatientProfile',
    element:<PatientProfile />
  }


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
