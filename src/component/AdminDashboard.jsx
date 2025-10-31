import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function AdminDashboard() {
  return (
    <div>AdminDashboard

          <Link
            to="logout"
            className="hover:bg-blue-500 px-4 py-2 rounded-md transition-colors duration-300"
          >
          Logout
          </Link>
          <Outlet/>
    </div>
  )
}

export default AdminDashboard