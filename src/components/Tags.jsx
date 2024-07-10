import React from 'react'
import { useState,useEffect } from 'react';
import { QuestionData } from '../recoil/Question';
import { useRecoilState } from "recoil";
import Questions from "./Questions"

const Tags = ({sheets}) => {
  const [QuestionList, setQuestionList] = useRecoilState(QuestionData);
  const keys=Object.keys(QuestionList);
  const [tag,setTag]=useState(null);
  const [clicked,setClicked]=useState(false);
  function clickHandler(event){
    setTag(event.target.value);
    setClicked(!clicked)
    if(tag===event.target.value)
      setClicked(!clicked)
  }

  
  
  return (
    <div className='flex flex-col text-white gap-2'>
      {
        keys.map((key)=>{
          return(
            <div key={key}>
              <button value={key} onClick={clickHandler} className='w-full border-2 border-white rounded-md py-2 font-bold'>{key}</button>

              
              {
                tag===key ?(<Questions clicked={clicked} tag={tag} QuestionList={QuestionList}/>):([])
              }
              
            </div>

            

            
            
          
          )
        })
      }
    </div>
  )
}

export default Tags