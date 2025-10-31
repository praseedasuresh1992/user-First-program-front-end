import React, { useState } from 'react'
import api from '../api'

function Register() {
    let[data,setdata]=useState({firstname:"",lastname:"",email:"",username:"",password:"",usertype:"student"})

    const handle=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    const submit=async (e)=>{
        e.preventDefault()
        try{
            const res=await api.post('/register',data)
            console.log(res.data.message)
        }catch(err){
            console.log(err.message)
        }
    }
  return (
    <div>
        <form onSubmit={submit} className='border p-4 m-5'>
            <input type="text" name='firstname' placeholder='Firstname' onChange={handle} className='border p-2 mb-2'/>
            <br></br>
            <input type="text" name='lastname' placeholder='Lastname' onChange={handle} className='border p-2 mb-2' />
            <br></br>
            <input type="text" name="email" placeholder='Email' onChange={handle}  className='border p-2 mb-2'/>
            <br></br>
            <input type="text" name='username' placeholder='Username' onChange={handle} className='border p-2 mb-2' />
            <br></br>
            <input type="password" name='password' placeholder='password' onChange={handle}  className='border p-2 mb-2'/>
            <br></br>
            <select name="usertype" onChange={handle} className='border p-2 mb-4'>
                <option value="student"> Student</option>
                <option value="admin">Admin</option>
            </select>
            <br></br>
            <button type="submit" className='border p-2 m-4 bg-blue-400 text-white'>Register</button>
        </form>

    </div>
  )
}

export default Register