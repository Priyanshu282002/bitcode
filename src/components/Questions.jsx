import React, { useEffect,useState } from 'react'
import Question from './Question'
import axios from "axios";
import { useRecoilState } from "recoil";
import { DoneList } from "../recoil/DoneList";

const Questions = ({QuestionList,clicked,tag}) => {
  
  const questions=QuestionList[tag];

  const [id,setId]=useState(null);
    
  const [questionsDone,setQuestionsDone] = useRecoilState(DoneList);

  
  useEffect(()=>{
      const Done = async () =>{
          const QuestionData = await axios.get(
              "https://bit-code-backend.vercel.app/api/v1/Wishlist/GetDoneList",
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("Token")}`,
                },
              }
          );
          // console.log(QuestionData.data.User[0].DoneList);
          setQuestionsDone(QuestionData.data.User[0].DoneList);
      }
      Done();
  },[id]);
  
  return (
    <div>
      {
        clicked?(<div>{
          questions.map((question)=>{
          return(<Question key={question._id} question={question} questionsDone={questionsDone} setId={setId}/>)
        })}
        </div>):(<div className='hidden'>{
          questions.map((question)=>{
          return(<Question key={question._id} question={question} questionsDone={questionsDone} setId={setId}/>)
        })}
        </div>)
        
      }
      
    </div>
  )
}

export default Questions