import React, { useEffect, useState } from 'react'
import { FaPaypal } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { Link } from 'react-router-dom';


function SubscribePage({ categorieName }) {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    fetch("/subscribe.json")
      .then(res => res.json())
      .then(data => setCourses(data)
      )
  }, [])

  const filterByCategory = categorieName ? courses.filter(course => course.category === categorieName) : courses;
  return (
    <div className='w-10/12 mx-auto py-10 mb-33'>
      <h1 className='text-3xl font-semibold text-center mb-8'>স্বাগতম, সাব্স্ক্রাইব করুন</h1>
      <div className='grid grid-cols-3'>
        {
          filterByCategory.map((course, index) => (
            <div>
              <div className="w-[340px] bg-gradient-to-l from-gray-50 via-orange-50 to-sky-50 shadow-md rounded-lg overflow-hidden" key={index}>
                <div className="p-4">
                  {/* <h3 className="text-2xl font-bold">${courses.price.current}</h3> */}
                  <div className='flex items-baseline justify-between'>
                    <button className="w-[95px] mb-4 bg-rose-300 text-black py-2 rounded-lg hover:bg-rose-400 cursor-pointer font-semibold">
                      {course.package}
                    </button>
                    <h1 className='font-semibold text-lg'>{course.fee}</h1>
                  </div>
                  <div className='flex items-center justify-between'>
                    {/*<Link to={`/subscriptionconfirmation/${course.id}`}>*/}<button className='btn w-[155px] rounded-xl px-2 outline-none  bg-white border-gray-400 text-gray-600 text-sm hover:text-white hover:bg-rose-500 hover:border-none'>ফি পরিশোধ করুন
                    </button>{/*</Link>*/}
                    <FaPaypal size={38} className='text-blue-600 py-2 hover:text-rose-500 cursor-pointer' />
                    <FaGooglePay className='text-green-600 py-2 hover:text-rose-500 cursor-pointer' size={46} />
                    <FaApplePay className='py-2 hover:text-rose-500 cursor-pointer' size={46} />
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SubscribePage


