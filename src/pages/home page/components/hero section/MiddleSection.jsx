import React, { useEffect, useState } from 'react'
import { WiTime3 } from "react-icons/wi";
import { Link } from 'react-router-dom';

function MiddleSection({ categorieName }) {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    fetch("/trade.json")
      .then(res => res.json())
      .then(data => setCourses(data)
      )
  }, [])

  const filterByCategory = categorieName ? courses.filter(course => course.category === categorieName) : courses;
  return (
    <div className='w-2/4'>
      <div className='grid gap-y-4'>
        {
          filterByCategory.map((course, index) => (
            <div className=' scroll-auto' key={index}>
              <div className='mb-2'><img className='rounded-xl' src={course.image} alt={course.title} /></div><div>
                <h1 className='text-base/6 font-semibold'>{course.title}</h1>
                <div className='flex items-center gap-3 mt-2'>
                <div className='flex items-center gap-1'>
                  <WiTime3 className='text-sky-400' size={25} />
                  <h5 className='text-sm text-gray-500 my-3'>{course.duration}</h5>
                </div>
                <Link to={`/tradedetails/${course.id}`}><button className='btn rounded-xl px-2 outline-none  bg-white border-gray-400 text-gray-600 text-sm hover:text-white hover:bg-rose-500 hover:border-none'>বিস্তারিত পড়ুন
                </button></Link>
                </div>
              </div>
              <hr className='text-gray-300 mt-5' />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MiddleSection;