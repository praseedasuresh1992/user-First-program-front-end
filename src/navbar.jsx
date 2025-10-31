import { Link, Outlet } from "react-router-dom";
import React from "react";
import Register from "./component/Register";
import Login from "./component/login";
import Logout from "./component/Logout";

function Navbar() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow-md py-4 px-8 flex justify-between items-center">
        

        <div className="space-x-6">
          <Link
            to="/register"
            className="hover:bg-blue-500 px-4 py-2 rounded-md transition-colors duration-300"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="hover:bg-blue-500 px-4 py-2 rounded-md transition-colors duration-300"
          >
            Login
          </Link>
            <Link
            to="/profile"
            className="hover:bg-blue-500 px-4 py-2 rounded-md transition-colors duration-300"
          >
           Profile
          </Link>
        
        </div>
      </nav>

      {/* Content area */}
      <main className="p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default Navbar;
