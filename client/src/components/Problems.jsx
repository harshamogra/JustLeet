import React from 'react'

function Problems() {

return (
    <div className="flex flex-col items-center mt-10">
        <button
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition duration-200 mb-6"
        >
            Add Problem
        </button>
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-96 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4">Problems</h2>
            <ul className="w-full">
                <li className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Problem 1</span>
                    <button className="bg-green-500 text-white px-2 py-1 rounded-lg hover:bg-green-600 transition duration-200">View</button>
                </li>
                <li className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Problem 2</span>
                    <button className="bg-green-500 text-white px-2 py-1 rounded-lg hover:bg-green-600 transition duration-200">View</button>
                </li>
                <li className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Problem 3</span>
                    <button className="bg-green-500 text-white px-2 py-1 rounded-lg hover:bg-green-600 transition duration-200">View</button>
                </li>
            </ul>
        </div>
    </div>
);
}

export default Problems
