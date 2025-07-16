
import { useState } from 'react';
import { useAuth } from '../context/AuthContext'
import {useNavigate} from "react-router-dom";
import api from "../utils/axios"

function Login() {
  const {login} = useAuth();
  const[password, setPassword] = useState("");
  const[email, setEmail] = useState("");
  const [error,setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit=async(e)=>{
      e.preventDefault();
      console.log(email);
      console.log(password)
      try {
        const res = await api.post('/api/auth/login',{email,password});
        console.log(res.data);
        const token = res.data.accesstoken;
        login(token);
        navigate('/');
      } catch (err) {
        console.error(err);
        setError("Invalid Credentials!");
      }

  }

  return (
    <div className='flex flex-col text-center items-center justify-center'>
      <h1 className='mt-20 text-2xl tracking-tight-'>Welcome to JustLeet</h1>
      <div className='bg-gray-800 flex flex-col w-100 h-100 items-center justify-center rounded-md shadow-lg shadow-gray-900 mt-3'>
        <form className='flex flex-col p-10 gap-5 w-full mt-3' onSubmit={handleSubmit}>
          <input className='p-3 border-white border-1 rounded-md' placeholder='Email' name='username' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input className='p-3 border-white border-1 rounded-md' placeholder='Password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button className='bg-black p-4 rounded-md hover:bg-gray-900 cursor-pointer' type='submit'>Login</button>
        </form>
        {error && <p className='text-white text-sm'>{error}</p>}
      </div>
    </div>
  )
}

export default Login
