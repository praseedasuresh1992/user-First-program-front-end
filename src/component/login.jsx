import React, { useState } from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom'

function Login() {
    const nav=useNavigate()
    let[data,setdata]=useState({email:"",username:"",password:""})

    const handle=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    const submit=async (e)=>{
        e.preventDefault()
        console.log("this")
        try{
            const res=await api.post('/login',data)
            console.log(res.data.message)
            console.log(res.data.user)
            localStorage.setItem('user',JSON.stringify(res.data.user))
            if(res.data.user.usertype==="admin"){
                nav("/admin")
            }
            else{
                nav("/common")
            }
        }catch(err){
            console.log(err.message)
        }
    }
  return (
    <div>
        <form onSubmit={submit}>
          
            <input type="text" name="email" placeholder='Email' onChange={handle} className='border p-2 mb-2' />
            <br></br>
            <input type="text" name='username' placeholder='Username' onChange={handle} className='border p-2 mb-2' />
            <br></br>
            <input type="password" name='password' placeholder='password' onChange={handle} className='border p-2 mb-2' />
            <br></br>
          
            <button type="submit" className='border p-2 m-4 bg-blue-400 text-white'>Login</button>
        </form>

    </div>
  )
}

export default Login