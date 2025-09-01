import { Sidebar } from 'lucide-react'
import React from 'react'

const SideTDL = ({ToggleSide}) => {
  return (
     <div className=" w-64 bg-gray-800 text-white p-4 relative "
      style={{ height: 'calc(100vh - 4rem)' }}>
        <h2 className="text-xl font-bold mb-6">Menu</h2>
       <div className='absolute top-5 right-5 cursor-pointer' onClick={ToggleSide} title='toggle sidebar'>
        <Sidebar />
       </div>
      <div onClick={ToggleSide} className='md:hidden block absolute top-60 -right-11 cursor-pointer rotate-90 bg-gray-800 px-2 text-sm rounded-l-md rounded-r-md' title='toggle sidebar'>
        <p>Click here</p>
      </div>
        <ul className="space-y-4">
          <li className="hover:text-gray-300 cursor-pointer">Dashboard</li>
          <li className="hover:text-gray-300 cursor-pointer">Tasks</li>
          <li className="hover:text-gray-300 cursor-pointer">Settings</li>
        </ul>
        <div>

        </div>
      </div>
  )
}

export default SideTDL