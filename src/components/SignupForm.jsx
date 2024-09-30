import React from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
import { useState} from 'react';
import axios from 'axios';

const SignupForm = ({setIsLoggedIn}) => {

    // const API_URL='http://localhost:3000/api/v1/Auth/SignUp'
    const navigate=useNavigate();
    const [formData,setFormData]=useState({firstName:"",lastName:"",email:"", password:"",confirmPassword:""});

    const [showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);

    // useEffect(()=>{
    //     const fetchData=async() => {
          
    //       try{
    //         const res=await fetch(API_URL);
    //         const output=await res.json();
    //         //save data into a variable
    //         console.log(output)
    //       }
    //       catch{
    //         toast.error("Something went wrong");
    //       }
          
    //     }
    //     fetchData();
    //   },[]);
    const submitHandler = async(event) => {
        event.preventDefault();
        const signupdata=await axios.post("https://bit-code-backend.vercel.app/api/v1/Auth/SignUp",{
          FirstName:formData.firstName,
          LastName:formData.lastName,
          Email: formData.email,
          Password: formData.password,
          ConfirmPassword:formData.confirmPassword
        })
        if(signupdata.data.success===false)toast.error(signupdata.data.message)
            else toast.success(signupdata.data.message)
        if(signupdata.data.message!=="User already exists")navigate("/login")
    };

    function changeHandler(event){ 
        setFormData((prevData)=>(
            {
            
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    // function submitHandler(event){
    //     event.preventDefault();
    //     if(formData.password != formData.confirmPassword)
    //     {
    //         toast.error("Passwords do not match");
    //     }
    //     else
    //     {
    //         toast.success("Account Created! Please Login");
    //         navigate("/login");
            
    //         const finalData={
    //             ...formData,
    //         }

    //         console.log(finalData);
            
    //     } 
    // }


    
  return (
    
    <form onSubmit={submitHandler} className='flex flex-col w-4/5 gap-y-2 sm:w-full'>
        {/* first name and last name */}
        <div className='flex gap-x-2 w-full sm:flex-col sm:gap-y-2'>
            <label className='w-1/2 sm:w-full' >
                <p className='text-white mb-1 leading-[1.375rem]'>First Name<sup className=' text-red-600'>*</sup></p>
                <input required type='text' name='firstName' onChange={changeHandler} placeholder='Enter First Name' value={formData.firstName} className='w-full rounded-[0.5rem] p-[12px] border-b-4 border-green-500'/>
            </label>

            <label className='w-1/2 sm:w-full'>
                <p className='text-white mb-1 leading-[1.375rem]'>Last Name<sup className=' text-red-600'>*</sup></p>
                <input required type='text' name='lastName' onChange={changeHandler} placeholder='Enter Last Name' value={formData.lastName} className='w-full rounded-[0.5rem] p-[12px] border-b-4 border-green-500'/>
            </label>
        </div>

        {/* email */}
        <label className='w-full'>
                <p className='text-white mb-1 leading-[1.375rem]'>Email Address<sup className=' text-red-600'>*</sup></p>
                <input required type='email' name='email' onChange={changeHandler} placeholder='Enter Email Address' value={formData.email} className='w-full rounded-[0.5rem] p-[12px] border-b-4 border-green-500'/>
        </label>

        {/* createPassword and Confirm Password */}
        <div className='flex gap-x-2 mt-2 sm:flex-col sm:gap-y-2'>
            <label className='w-1/2 relative sm:w-full'>
                <p className='text-white mb-1 leading-[1.375rem]'>Create Password<sup className=' text-red-600'>*</sup></p>
                <input required type={showPassword? ("text"): ("password")} name='password' onChange={changeHandler} placeholder='Enter Password' value={formData.password} className='w-full rounded-[0.5rem]  p-[12px] border-b-4 border-green-500'/>

                <span className='absolute right-3 bottom-4 cursor-pointer' onClick={()=> setShowPassword((prev)=> !prev)}>{showPassword? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
            </label>

            <label className='w-1/2 relative sm:w-full'>
                <p className='text-white mb-1 leading-[1.375rem]'>Confirm Password<sup className=' text-red-600'>*</sup></p>

                <input required type={showConfirmPassword? ("text"): ("password")} name='confirmPassword' onChange={changeHandler} placeholder='Confirm Password' value={formData.confirmPassword} className='w-full rounded-[0.5rem]  p-[12px] border-b-4 border-green-500'/>

                <span className=' absolute right-3 bottom-4 cursor-pointer' onClick={()=> setShowConfirmPassword((prev)=> !prev)}>{showConfirmPassword? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
            </label>  
        </div>

        <button className='w-full bg-green-600 rounded-[8px] font-medium text-white px-[12px] py-[8px] mt-7 hover:bg-white transition-all duration-300 hover:text-green-600' id='signup'>
            Create Account
        </button>
    </form>
    
  )
}

export default SignupForm
