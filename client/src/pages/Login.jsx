import React from 'react'

function Login() {
  return (
    <div className='flex flex-col text-center items-center justify-center'>
      <h1 className='mt-20 text-2xl tracking-tight-'>Welcome to JustLeet</h1>
      <div className='bg-gray-800 flex flex-col w-100 h-100 items-center justify-center rounded-md shadow-lg shadow-gray-900 mt-3'>
        <form className='flex flex-col p-10 gap-5 w-full mt-3'>
          <input className='p-3 border-white border-1 rounded-md' placeholder='Email' name='username'/>
          <input className='p-3 border-white border-1 rounded-md' placeholder='Password' name='username'/>
          <button className='bg-black p-4 rounded-md hover:bg-gray-900 cursor-pointer'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
