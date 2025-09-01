import SideTDL from '@/assets/layouts/SideTDL'
import ToDoList from '@/assets/layouts/toDoList'
import React, { useState } from 'react'

const Home = () => {
  
  const [openSide, setOpenSide] = useState(true)

  const ToggleSide = () => {
    setOpenSide(!openSide)
  }

  return (
  <>
  <div className="flex h-screen relative overflow-hidden mx-auto max-w-screen-2xl">
    <div className={`absolute transition-transform duration-700 ${ openSide ? ' md:-translate-x-48 -translate-x-64' : ''}`}>
      <SideTDL ToggleSide={ToggleSide}/>
    </div>
        <div className='flex-1 bg-gray-200'>
          <ToDoList />
        </div>
      </div>
  </>
  )
}

export default Home