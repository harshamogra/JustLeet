import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function LeetStats({user}) {
    const percentage = 66;
    console.log(user) // Example percentage value, you can replace it with dynamic data
return (
    <div className="ml-10 mt-12 w-full shadow-lg shadow-gray-900">
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="flex flex-col items-center md:items-start md:w-1/3">
                <h2 className="text-2xl font-semibold mb-2 text-white">Total Progress</h2>
                <span className="text-lg mb-4 text-gray-400">300 / 30000</span>
                <div className="w-32 h-32 mb-6">
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                            textColor: '#fff',
                            pathColor: '#4ade80',
                            trailColor: '#374151',
                        })}
                    />
                </div>
            </div>
            <div className="flex flex-col w-full md:w-2/3 gap-4">
                <div className="flex justify-between items-center bg-gray-700 rounded-lg px-4 py-2">
                    <span className="font-medium text-green-400">Easy</span>
                    <div className="flex items-center gap-2">
                        <span className="text-gray-300">10 / 100</span>
                        <div className="w-24 bg-gray-600 rounded-full h-2">
                            <div className="bg-green-400 h-2 rounded-full" style={{ width: '10%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center bg-gray-700 rounded-lg px-4 py-2">
                    <span className="font-medium text-yellow-400">Medium</span>
                    <div className="flex items-center gap-2">
                        <span className="text-gray-300">20 / 100</span>
                        <div className="w-24 bg-gray-600 rounded-full h-2">
                            <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '20%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center bg-gray-700 rounded-lg px-4 py-2">
                    <span className="font-medium text-red-400">Hard</span>
                    <div className="flex items-center gap-2">
                        <span className="text-gray-300">30 / 100</span>
                        <div className="w-24 bg-gray-600 rounded-full h-2">
                            <div className="bg-red-400 h-2 rounded-full" style={{ width: '30%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default LeetStats
