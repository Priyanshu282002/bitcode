import React, { useEffect } from 'react'
import logo from "../assets/logo.png"
import { NavLink, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';


const Navbar = ({isLoggedIn,setIsLoggedIn}) => {
    const navigate=useNavigate();
    function logoutHandler(){
        setIsLoggedIn(false);
        localStorage.removeItem("Token");
        localStorage.removeItem("User");
        localStorage.removeItem("UserInfo");
        navigate("/login");
        toast.success("Logged Out Successfully!")
    }

  return (
    <div>
        <div className='flex justify-between px-10 py-4 items-center border-b-2 h-[10vh]'>
            <div className='flex gap-10 flex-wrap items-center text-xl'>
                <NavLink to="/">
                    <img src={logo} alt='logo' className='sm:h-6 h-8 w-25 cursor-pointer hover:scale-110 transition-all duration-300'/>
                </NavLink>
                
                <NavLink to="/courses">
                    <button className=' hover:bg-slate-800 hover:text-white transition-all duration-300 px-2 py-1 rounded-lg sm:hidden'>Courses</button>
                </NavLink>
                <NavLink to={`${localStorage.getItem("Token")!=null?"/practice":"/login"}`}>
                    <button className='hover:bg-slate-800 hover:text-white transition-all duration-300 px-2 py-1 rounded-lg sm:hidden' >Practice</button>
                </NavLink>
                
            </div>

            <div className='flex gap-6 flex-wrap sm:hidden'>
                {localStorage.getItem("Token")!=null?(<NavLink to="/login">
                    <button className=' bg-green-500 text-white px-3 py-1 rounded-lg hover:scale-125 transition-all duration-300 font-semibold' onClick={logoutHandler}>Log Out</button>
                </NavLink>) : (<NavLink to="/login">
                    <button className=' bg-green-500 text-white px-3 py-1 rounded-lg hover:scale-125 transition-all duration-300 font-semibold'>Log In</button>
                </NavLink>)}

                {localStorage.getItem("Token")!= null ? (<NavLink to="/signup">
                    <button className=' bg-green-500 text-white px-3 py-1 rounded-lg hover:scale-125 transition-all duration-300 font-semibold hidden'>Sign Up</button>
                </NavLink>):(<NavLink to="/signup">
                    <button className=' bg-green-500 text-white px-3 py-1 rounded-lg hover:scale-125 transition-all duration-300 font-semibold '>Sign Up</button>
                </NavLink>)
                }
                
                
                
            </div>
            
            
        </div>
        
    </div>
  )
}

export default Navbar