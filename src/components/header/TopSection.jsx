import React from 'react'
import { MdCall } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa6";

function TopSection() {
  return (
    <div className='bg-gray-50 py-3'>
      <div className='flex items-center justify-between w-10/12 mx-auto'>
        <div className='flex items-center gap-4'>
          <FaXTwitter size={22} className='text-[#ee4023] hover:text-black cursor-pointer' />
          <FaFacebookF size={22} className='text-[#ee4023] hover:text-sky-500 cursor-pointer' />
          <AiOutlineInstagram size={25} className='text-[#ee4023] hover:text-sky-500 cursor-pointer' />
          <IoLogoYoutube size={25} className='text-[#ee4023] hover:text-sky-500 cursor-pointer' />
        </div>

        <img className="w-[160px]" src="https://w7.pngwing.com/pngs/650/450/png-transparent-prothom-alo-%E0%A6%96%E0%A7%87%E0%A6%B2%E0%A6%BE-dhaka-bengali-sport-others-text-sport-logo.png" alt="" />
        {/* {Logo} */}
        <Link to="/subscribe" >
          <button className="btn cursor-pointer text-base tracking-wide font-semibold rounded-lg border-none bg-[#ee4023] hover:bg-sky-500 text-white hover:animate-ping hover:scale-40"> <FaBell />
            SUBSCRIBE
          </button>
        </Link>
        <Link to="/contactUs">
          <div className='lg:flex items-center gap-6'>
            <div className='flex items-center gap-2 cursor-pointer'>
              <MdCall size={20} className='text-[#ee4023]' />
              <h6 className='text-[17px] text-black hover:text-[#ee4023]'>(+88) 01556 440078</h6>
            </div>

            <div className='flex items-center gap-2 cursor-pointer'>
              <MdOutlineMail size={20} className='text-[#ee4023]' />
              <h6 className='text-[17px] text-black hover:text-[#ee4023]'>contact@prothomalo.org</h6>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default TopSection