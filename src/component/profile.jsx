import React, { useState } from 'react'
import { useEffect } from 'react'
import api from '../api'

function Profile() {
    const [user,setUser]=useState(()=>{
      const dt=localStorage.getItem('user')
      return dt?JSON.parse(dt):[]
    })
    useEffect(()=>{
        const fetchProfile=async()=>{
            try{
                const res=await api.get('/profile')
                console.log(res)
                setUser(res.data.user)
                }catch(err){
                    console.log(err.message);
               }
        }
        fetchProfile()
    },[])
  return (
    <div>
        <h2>ProfileDetails</h2>
        <p>ID:{user.id}</p>
        <p>UserName:{user.username}</p>
        <p>Role:{user.usertype}</p>
    </div>
  )
}

export default Profile
