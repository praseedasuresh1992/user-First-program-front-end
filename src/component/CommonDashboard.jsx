import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function CommonDashboard() {
  return (
    <div>CommonDashboard
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

export default CommonDashboard