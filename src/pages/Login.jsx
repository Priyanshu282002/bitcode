import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/LoginImg.png'

const Login = ({setIsLoggedIn}) => {
  return (
    <div className='h-full bg-[#282828]'>
      <Template 
        title="Welcome Back"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2='Education to future-proof your carreer.'
        image={loginImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Login