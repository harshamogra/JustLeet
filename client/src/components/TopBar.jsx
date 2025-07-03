import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
function TopBar() {
  return (
    <div className='shadow-lg shadow-gray-800 w-full fixed z-10'>
      <nav className="bg-gray-900 p-3 flex items-center justify-between">
        <div>
          <span className="text-white text-3xl font-bold">JustLeet</span>
          <span className="text-gray-400 text-xs ml-2">A LeetCode Practice Platform</span>
        </div>
        <div className='mr-2 flex flex-row gap-2 cursor-pointer'>
          <div><LogoutIcon/></div>
          <div><AccountCircleIcon /></div>
        </div>
      </nav>
    </div>
  )
}

export default TopBar
