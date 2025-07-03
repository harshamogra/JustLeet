import React from 'react'

function WeekPlan() {
  return (
    <div>
        <div className="flex ml-10 mt-12 shadow-xl shadow-gray-900">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2">Weekly Plan</h2>
            <span className="text-lg mb-4 text-gray-400">Plan your week effectively</span>
            <span>Display the text user entered in the form</span>
            <textarea className="w-full h-26 p-2 bg-gray-700 text-white rounded-lg mb-4 resize-none" placeholder="Enter your weekly plan here..."></textarea>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200">Save Plan</button>
            </div>
        </div>
    </div>
  )
}

export default WeekPlan
