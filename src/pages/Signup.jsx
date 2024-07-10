import React from 'react'
import Template from '../components/Template'
import signupImg from '../assets/LoginImg.png'

const Signup = ({setIsLoggedIn}) => {
  return (
    <div className='h-fit bg-[#282828]'>
      <Template 
        title="Join the millions learning with BitCode for free"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2='Education to future-proof your carreer.'
        image={signupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Signup