import React from 'react'
import {filterData} from '../data1'
import Filter from '../components/Filter'
import { useState, useEffect} from 'react'
import Spinner from '../components/Spinner'
import Tags from '../components/Tags'
import axios from "axios";
import { useRecoilState } from "recoil";
import { QuestionData } from "../recoil/Question";


const Practice = () => {
  const [sheets, setSheets]=useState(null);
  const [loading,setLoading] = useState(true);
  const [category,setCategory]=useState(filterData[0].api);
  const [Question, setQuestion] = useRecoilState(QuestionData);

  useEffect(()=>{
    setLoading(true);
    const AllQuestion = async () => {
      const QuestionData = await axios.get(
        `https://bit-code-backend-one.vercel.app/api/v1/Practice/${category}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      setQuestion(QuestionData.data.groupedQuestions);
      setLoading(false);
    };
    AllQuestion();
  },[category]);

  
  return (
    <div className='min-h-[90vh] bg-[#282828] flex flex-col px-10'>
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}/>
      </div>
      
      <div>
        {
          loading ? (<Spinner/>):(<Tags sheets={sheets} category={category}/>)
        }
      </div>

    </div>
  )
}

export default Practice