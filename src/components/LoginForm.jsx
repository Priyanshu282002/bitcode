import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useState } from 'react';
import axios from 'axios';
import { UserState } from "../recoil/User";
import { useRecoilState } from 'recoil';


const LoginForm = ({setIsLoggedIn}) => {
    const navigate=useNavigate();
    const [formData,setFormData]=useState({email:"",password:""});
    const [User,setUser]=useRecoilState(UserState)

    function changeHandler(event){
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }
    const submitHandler = async(event) => {
        event.preventDefault();
        
        const login=await axios.post("https://bit-code-backend.vercel.app/api/v1/Auth/LogIn",{
          Email: formData.email,
          Password: formData.password,
        })
        if(login.data.success===false)toast.error(login.data.message)
            else{
                toast.success(login.data.message)
                setIsLoggedIn(true);
                if(login.data.User.Token!=null){
                    localStorage.setItem("Token",login.data.User.Token)
                    localStorage.setItem("User",login.data.User.FirstName+" "+login.data.User.LastName);
                    setUser(localStorage.getItem("User"));
                    navigate("/")
                  }else{
                    navigate("/signup")
                  }
        } 
        // if(login.data.message!=="User already exists")navigate("/")
        
      
    };

    // function submitHandler(event){
    //     event.preventDefault();
    //     setIsLoggedIn(true);
    //     toast.success("Logged In");
    //     console.log("Printing Form Data");
    //     console.log(formData);
    //     navigate("/");
    // }

    const[showPassword, setShowPassword]=useState(false);
  return (
    <form onSubmit={submitHandler} className='flex flex-col w-4/5 gap-y-2 sm:w-full'>
        <label className='w-full'>
            <p className='text-white mb-1 leading-[1.375rem]'>Email Address<sup className=' text-red-600'>*</sup></p>

            <input type='email' required value={formData.email} onChange={changeHandler} placeholder='Enter Email address' name='email' className='w-full rounded-[0.5rem] p-[12px] border-b-4 border-green-500'/>
        </label>

        <label className='w-full relative'>
            <p className='text-white mb-1 leading-[1.375rem]'>Password<sup className=' text-red-600'>*</sup></p>

            <input type={showPassword ? ("text") : ("password")} required value={formData.password} onChange={changeHandler} placeholder='Enter Password' name='password' className='w-full rounded-[0.5rem]  p-[12px] border-b-4 border-green-500'/>

            <span onClick={()=> setShowPassword((prev)=> !prev)} className='absolute right-3 bottom-11 cursor-pointer'>
                {showPassword? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to="#">
                <p className='mt-1 text-white max-w-max ml-auto hover:text-green-600 transition-all duration-300'>
                    Forgot Password? 
                </p>
            </Link>
        </label>

        <button className='w-full bg-green-600 rounded-[8px] font-medium text-white px-[12px] py-[8px] mt-7 hover:bg-white transition-all duration-300 hover:text-green-600'>
            Log in
        </button>

    </form>
  )
}

export default LoginForm