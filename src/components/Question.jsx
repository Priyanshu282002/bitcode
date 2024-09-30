import React, { useState } from 'react'
import { FaVideo } from "react-icons/fa";
import axios from "axios";
import toast from 'react-hot-toast';

const Question = ({question,questionsDone,setId}) => {

    const [selectedIds, setSelectedIds] = useState(() => {
        return questionsDone.map(question => question._id);
      });

    const setDone = async(id)=>{
            const done=await axios.post("https://bit-code-backend.vercel.app/api/v1/WishList/AddToDoneList",{

                Id:id

            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("Token")}`,
                },
                
            }
        )
        toast.success(done.data.message)
    }

    const setNotDone = async(id)=>{
        const notDone =await axios.post("https://bit-code-backend.vercel.app/api/v1/WishList/RemoveFromDoneList",{
            Id:id
        },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("Token")}`,
                },
            }
        )
        toast.success(notDone.data.message)

    }


    function clickHandler(event){
        let updatedSelectedIds = [...selectedIds];
        setId(event.target.value)

        if (updatedSelectedIds.includes(event.target.value)) {
          updatedSelectedIds = updatedSelectedIds.filter((selectedId) => selectedId !== event.target.value);
          setNotDone(event.target.value);
        } else {
          updatedSelectedIds.push(event.target.value);
          setDone(event.target.value);
        }
    
        setSelectedIds(updatedSelectedIds); 
    }
    
    // console.log(questionsDone)

  return (
    <div className={`flex gap-5 border border-white px-10 py-2 rounded-md mt-1 justify-between ${selectedIds.includes(question._id)?" bg-emerald-800":"bg-black" } `}>
        <input type='checkbox'  onChange={clickHandler} checked={selectedIds.includes(question._id)} value={question._id} className="check"/>

        <div className='flex justify-between w-[70%]'>
            <a href={question.QuestionLink} target='_blank' rel='noreferrer' className='' id={question.QuestionName}>
                {
                    question.QuestionName    
                }
            </a>
            <div className={`${question.Difficulty==="Easy"?"text-green-600":`${question.Difficulty==="Medium"?"text-yellow-400 ":"text-red-700 "}`} min-w-16 text-center`}>
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
