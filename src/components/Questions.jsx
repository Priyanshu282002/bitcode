import React from 'react'
import Question from './Question'

const Questions = ({QuestionList,clicked,tag}) => {
  
  const questions=QuestionList[tag];
  
  return (
    <div>
      {
        clicked?(<div>{
          questions.map((question)=>{
          return(<Question key={question._id} question={question}/>)
        })}
        </div>):(<div className='hidden'>{
          questions.map((question)=>{
          return(<Question key={question._id} question={question}/>)
        })}
        </div>)
        
      }
      
    </div>
  )
}

export default Questions