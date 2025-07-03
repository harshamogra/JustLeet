import React, { useState } from 'react'
import api from '../utils/axios';
import {useNavigate} from "react-router-dom";

function Register() {
  const[form,setForm] = useState({username:"", email: "", password:""});

  const navigate = useNavigate("")
  const handleChange= (e)=>{
    setForm({...form, [e.target.name]: e.target.value});
  }

  
  const handleSubmit = async(e)=>{
    e.preventDefault();
      try {
        const res = await api.post('/api/auth/register',form)
        console.log(res.data);
        navigate('/login')
      } catch (err) {
          console.error(err);
      }
  }

  return (
    <div className='flex flex-col text-center items-center justify-center'>
      <h1 className='mt-20 text-2xl tracking-tight-'>Welcome to JustLeet</h1>
      <div className='bg-gray-800 flex flex-col w-100 h-100 items-center justify-center rounded-md shadow-lg shadow-gray-900 mt-3'>
        <form className='flex flex-col p-10 gap-5 w-full mt-3' onSubmit={handleSubmit}>
            <input className='p-3 border-white border-1 rounded-md' placeholder='Username' onChange={handleChange} value={form.username} name='username' autoComplete='off' required/>
          <input className='p-3 border-white border-1 rounded-md' placeholder='Email' onChange={handleChange} type='email' value={form.email} name='email' required/>
          <input className='p-3 border-white border-1 rounded-md' placeholder='Password' onChange={handleChange} type='password' value={form.password} name='password' required/>
          <button className='bg-black p-4 rounded-md hover:bg-gray-900 cursor-pointer' type='submit'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register
