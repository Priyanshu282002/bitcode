import React from 'react'
import { apiUrl,filterData } from '../data1'
import Filter from '../components/Filter'
import { useState, useEffect} from 'react'
import toast from 'react-hot-toast'
import Spinner from '../components/Spinner'
import Tags from '../components/Tags'


const Practice = () => {
  const [sheets, setSheets]=useState(null);
  const [loading,setLoading] = useState(true);
  const [category,setCategory]=useState(filterData[0].title);

  
  return (
    <div className='min-h-[90vh] bg-[#282828] flex flex-col px-10'>
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}/>
      </div>
      
      <div>
        
        <Tags sheets={sheets} category={category}/>
        
      </div>

    </div>
  )
}

export default Practice