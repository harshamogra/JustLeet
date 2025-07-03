import React, { useEffect } from 'react'
import TopBar from '../components/TopBar'

import LeetStats from '../components/LeetStats';
import WeekPlan from '../components/WeekPlan';
import Problems from '../components/Problems';
function Home() {
    const percentage = 66; // Example percentage value, you can replace it with dynamic data
return (
    <div className="min-h-screen text-white">
        <TopBar />
        <div className=" gap-2 pt-12 flex flex-row ">
            <div><LeetStats/></div>
            <div><WeekPlan/></div>
        </div>
            <div className='gap-2 pt-12 mr-30 ml-30'>
                 <div><Problems/></div>
            </div>
            
    </div>
)
}

export default Home
