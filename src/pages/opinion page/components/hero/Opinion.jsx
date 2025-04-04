import React, { useEffect, useState } from 'react'
import { WiTime3 } from "react-icons/wi";
import { CiSquarePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';


function Opinion({ categorieName }) {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    fetch("/opinion.json")
      .then(res => res.json())
      .then(data => setCourses(data)
      )
  }, [])

  const filterByCategory = categorieName ? courses.filter(course => course.category === categorieName) : courses;
  return (
    <div className='w-8/10'>

      <div className='grid grid-cols-4 gap-y-66'>
        {
          filterByCategory.map((course, index) => (
            <div className='w-[260px] h-[190px] scroll-auto' key={index}>
              <img className='object-cover rounded-xl w-full h-full' src={course.image} alt={course.title} />
              <div>
                <h1 className='mt-2 text-lg/8 font-semibold'>{course.title}</h1>
                <div className='flex items-center justify-between'>
                  <div>
                    <div className='flex items-center gap-1'>
                      <WiTime3 className='text-sky-400' size={25} />
                      <h5 className='text-sm text-gray-500 my-2'>{course.duration}</h5>
                    </div>
                    <div className='flex items-center gap-1'>
                      <CiSquarePlus className='text-sky-400' size={25} />
                      <h5 className='text-sm text-gray-500'>{course.level}</h5>
                    </div>
                  </div>
                  <Link to={`/opiniondetails/${course.id}`}><button className='btn rounded-xl px-2 outline-none  bg-white border-gray-400 text-gray-600 text-sm mt-4 hover:text-white hover:bg-rose-500 hover:border-none'>বিস্তারিত পড়ুন
                  </button></Link>
                </div>
              </div>
              <hr className='text-gray-300 mt-10' />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Opinion