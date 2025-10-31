import React from 'react'
import { useNavigate } from 'react-router-dom'


function Logout() {
    const nav=useNavigate()
    const handleLogout=()=>{
        localStorage.removeItem("user")
        nav("/login")
    }
  return (
    <div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout