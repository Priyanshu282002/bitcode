import React from 'react'
import Card from './Card';

const Cards = ({courses,category }) => {
  let allCourses=[];
  //returns you a list of courses received from the api response
  const getCourses = () =>{
    if(category==="All"){
        Object.values(courses).forEach( (courseCategory) => {
            courseCategory.forEach((course) =>{
                allCourses.push(course);
            })
        })
        return allCourses;
    }
    else
    {
        //sirf specific category ka data pass hoga
        return courses[category];
    }   
  }


  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        getCourses().map((course)=> {
          return (<Card key={course.id} course={course}/>);
        })
      }
    </div>
  )
}

export default Cards