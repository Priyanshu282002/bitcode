import React, { useState } from 'react'

const Card = ({course}) => {
  return (
    <a  href={course.link} target='_blank' className=" w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden border-white border-2 hover:scale-105 transition-all duration-300 ">
      <div className="">
        <img src={course.image.url} alt={course.image.alt}></img>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
        <p className="mt-2 text-white">
            {
                course.description.length > 100?(course.description.substr(0,100)) + "...":(course.description)
            }
        </p>
      </div>
    </a>
  )
}

export default Card