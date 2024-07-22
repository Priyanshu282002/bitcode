import React from 'react'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='min-h-[90vh] bg-[#282828] flex justify-center items-center'>
      <div className='flex  px-10 w-full sm:flex-col sm:py-10 sm:px-10'>
        <div className='flex flex-col gap-10 w-1/2 sm:w-full sm:mb-10'>
          <h1 className=' text-6xl font-bold text-white'>Follow the Path to Success with BitCode</h1>
          <p className='text-white font-semibold'>Elevate your programming skills, solve challenges, and unlock the world of coding possibilities.</p>
          <div className='flex gap-6'>
            <NavLink to="/courses">
              <button id='courses' className=' bg-green-500 text-white rounded-full px-3 py-3 hover:text-green-500 hover:bg-white outline outline-green-600 transition-all duration-300 text-md font-semibold'>View Courses</button>
            </NavLink>
            <NavLink to={`${localStorage.getItem("Token")!=null?"/practice":"/login"}`}>
            <button className=' bg-green-500 text-white rounded-full px-3 py-3 hover:text-green-500 hover:bg-white outline outline-green-600 transition-all duration-300 text-md font-semibold'>Do Practice</button>
            </NavLink>
          </div>
        </div>
        <div className=' grid grid-cols-2 w-1/2 text-center gap-y-10 gap-x-5 text-white sm:w-full'>
            <div className='btn flex justify-center items-center font-bold'>Learn DSA</div>
            <div className='btn flex justify-center items-center font-bold'>Web Development</div>
            <div className='btn flex justify-center items-center font-bold'>Computer Networks</div>
            <div className='btn flex justify-center items-center font-bold'>DBMS</div>
            <div className='btn flex justify-center items-center font-bold'>Operating System</div>
            <div className='btn flex justify-center items-center font-bold'>Practice DSA</div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
