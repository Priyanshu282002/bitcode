import React from 'react'
import { FaVideo } from "react-icons/fa";

const Question = ({question}) => {

  return (
    <div className='flex gap-5 border border-white px-10 py-2 rounded-md mt-1 justify-between '>
        <input type='checkbox'/>

        <div className='flex justify-between w-[70%]'>
            <a href={question.QuestionLink} target='_blank' rel='noreferrer' className=''>
                {
                    question.QuestionName    
                }
            </a>
            <div className={`${question.Difficulty==="Easy"?"text-green-600":`${question.Difficulty==="Medium"?"text-yellow-400 ":"text-red-700 "}`} `}>
                {
                    question.Difficulty
                }
            </div>
        </div>

            
        
        <a href={question.VideoLink} target='_blank' rel='noreferrer' className='relative top-1'>
            <FaVideo/>
        </a>
    </div>
  )
}

export default Question