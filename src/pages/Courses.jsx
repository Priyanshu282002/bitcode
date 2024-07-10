import React from 'react'
import {apiUrl,filterData} from '../data'
import Spinner from '../components/Spinner'
import FilterCourses from '../components/FilterCourses'
import Cards from '../components/Cards'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'


const Courses = () => {
  const [courses, setCourses]=useState(null);
  const [loading,setLoading] = useState(true);
  const [category,setCategory]=useState(filterData[0].title);
  useEffect(()=>{
    const fetchData=async() => {
      setLoading(true);
      try{
        const res=await fetch(apiUrl);
        const output=await res.json();
        //save data into a variable
        setCourses(output.data);
      }
      catch{
        toast.error("Something went wrong");
      }
      setLoading(false);
    }
    fetchData();
  },[]);

  
  return (
    <div className='min-h-screen bg-[#282828] flex flex-col'>
    <div>
      <FilterCourses filterData={filterData} category={category} setCategory={setCategory}/>
    </div>
      

      <div className="">
          {
            loading ? (<Spinner/>):(<Cards courses={courses} category={category}/>)
          }
      </div>
    </div>
  )
}

export default Courses