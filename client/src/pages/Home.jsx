import React, { useEffect, useState } from 'react'
import TopBar from '../components/TopBar'

import LeetStats from '../components/LeetStats';
import WeekPlan from '../components/WeekPlan';
import Problems from '../components/Problems';
import { useAuth } from '../context/AuthContext';
import api from '../utils/axios';
function Home() { // Example percentage value, you can replace it with dynamic data
    const {user} = useAuth();
    const [data,setData] = useState(null);
   useEffect(()=>{
    const fetchUser = async()=>{
        if(user){
            try {
                const res = await api.get(`/api/user/${user.id}`);
                setData(res.data);
            } catch (err) {
                console.error(err);
            }
        }
    }
    fetchUser();
   },[user])

    return (
    <div className="min-h-screen text-white">
        <TopBar user= {data}/>
        <div className=" gap-2 pt-12 flex flex-row ">
            <div>{data && <h2 className="text-xl font-bold ml-4">Welcome, {data.username}!</h2>}
</div>
            <div><LeetStats user={data}/></div>
            <div><WeekPlan user={data}/></div>
        </div>
    </div>
)
}

export default Home
