import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { WiTime3 } from "react-icons/wi";
import { CiSquarePlus } from "react-icons/ci";
import { RiWhatsappFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

function SportsDetails() {
  const { id } = useParams()
  const [courses, setCourses] = useState([])
  console.log(courses);




  useEffect(() => {
    fetch("/sports.json")
      .then(res => res.json())
      .then(data => {
        const findData = data.find(item => item.id == id)
        setCourses(findData);

      }
      )
  }, [id])

  if (!courses) return <div className="flex justify-center items-center">
    <span className="loading loading-ring loading-xl  py-16">
      please wait..
    </span>
  </div>


  return (
    <div className='py-7'>
      <div className='w-11/12 mx-auto'>
        <h1 className='text-3xl text-center font-bold'>বিস্তারিত...
        </h1>
      </div>
      <div>
        <div className='mt-7'>
          <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h2 className="text-2xl/9 font-medium">{courses.title}</h2>
              <p className="text-gray-600 mt-2">{courses.instructor} | {courses.correspondent}</p>
              <p className="text-gray-500 text-sm mt-1">{courses.dateplace}</p>
              <div className="bg-white shadow-md rounded-lg p-6 mt-6">
                <p className="text-gray-900 mt-2">{courses.description}</p>
              </div>
            </div>
            <div>
              <div className="w-[340px] bg-gradient-to-r from-orange-50 via-pink-100 to-purple-50 shadow-md rounded-lg overflow-hidden">
                <img
                  src={courses.image}
                  alt="politics"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  {/* <h3 className="text-2xl font-bold">${courses.price.current}</h3> */}
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'><CiSquarePlus className='text-sky-400' size={25} />
                      <p className="text-gray-600 font-semibold"> {courses.level}</p></div>
                    <div className='flex items-center gap-2'><WiTime3 className='text-sky-500' size={25} />
                      <p className="text-gray-600 font-semibold"> {courses.duration}</p></div>
                  </div>
                  <div className='my-3 flex items-center justify-between'>
                  <button className="w-[115px]  bg-rose-300 text-black py-2 rounded-lg hover:bg-rose-400 cursor-pointer font-semibold">
                    শেয়ার করুন
                  </button>
                  <FaXTwitter size={38} className='text-black py-2 hover:text-rose-500 cursor-pointer' />
                  <FaFacebookF className='text-blue-500 py-2 hover:text-rose-500 cursor-pointer' size={41} />
                  <RiWhatsappFill className='text-green-500 py-2 hover:text-rose-500 cursor-pointer' size={41} />
                  </div>
                  <button className="w-full bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-rose-300 cursor-pointer font-semibold">
                    মন্তব্য যোগ করুন
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SportsDetails