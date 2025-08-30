import SideTDL from '@/assets/layouts/SideTDL'
import ToDoList from '@/assets/layouts/toDoList'
import React, { useState } from 'react'

const Home = () => {
  
  const [openSide, setOpenSide] = useState(false)

  const ToggleSide = () => {
    setOpenSide(!openSide)
  }

  return (
  <>
  <div className="flex h-screen relative overflow-hidden">
    <div onClick={ToggleSide} className={`absolute transition-transform ${ openSide ? ' md:-translate-x-48 -translate-x-64 duration-300' : ''}`}>
      <SideTDL />
    </div>
        <div className='flex-1 ml-2 bg-gray-200 overflow-y-auto scrollbar-custom h-full'>
          <ToDoList />
        </div>
      </div>
  </>
  )
}

export default Home