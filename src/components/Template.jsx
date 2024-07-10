import React from 'react'
import {FcGoogle} from "react-icons/fc";
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
    <div className='flex min-h-[90vh] justify-center items-center scroll-smooth '>
        <div className='flex px-20 w-full items-center py-20'>
            <div className='flex flex-col gap-5 w-1/2'>
                <h1 className='text-5xl font-bold text-white'>{title}</h1>
                <p className='text-white font-semibold italic'>
                    <span className=''>{desc1}</span><br/>
                    <span className=''>{desc2}</span>
                </p>

                {formtype === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            

                <div className='flex w-4/5 items-center'>
                    <div className='h-[1px] bg-white w-full'></div>
                    <p className='text-white font-medium leading-[1.375rem]'>OR</p>
                    <div className='h-[1px] bg-white w-full'></div>
                </div>

                <button className='w-4/5 flex justify-center items-center rounded-[8px] font-medium text-white border border-richblack-700 px-[12px] py-[8px] gap-x-2'>
                    <FcGoogle/>
                    Sign in with Google
                </button>
            </div>
            <div className='w-1/2 h-full'>
                <img src={image} alt="LoginImage" loading='lazy' />
            </div> 
        </div>
        
    </div>
  )
}

export default Template