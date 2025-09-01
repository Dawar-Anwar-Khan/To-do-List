import React from 'react'
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div className='max-w-screen-2xl mx-auto md:px-20 px-10 py-4 bg-gray-400 flex justify-between items-center shadow-xl'>
      <h1 className='text-3xl font-bold text-white font-edu'><a href="#">ilesm</a></h1>
      <div title='Sign Up'>
    <CgProfile className='h-6 w-6 invert cursor-pointer'></CgProfile>
      </div>
    </div>
  )
}

export default Header