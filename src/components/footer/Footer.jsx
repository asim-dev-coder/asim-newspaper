import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";


function Footer() {
    return (
        <div className='py-3 bg-[#f9f9fb]'>
            <div className='w-11/12 mx-auto'>
                <div className='flex items-center justify-between'>
                    <div>
                        <p class="font-[500] text-base text-black">মোবাইল অ্যাপস ডাউনলোড করুন</p>
                        <div class="flex gap-[8px]">
                            <div class="rounded-xl flex items-center gap-[6px] w-[136px] h-14 bg-gray-200 hover:bg-red-200 mt-2 py-2 pl-3">
                            <FaApple className='text-lg' />
                                <div>
                                    <p class="font-[400] text-[11px] text-gray-700">Download on the</p>
                                    <p class="font-[500] text-sm text-gray-900">App Store</p>
                                </div>
                            </div>
                            <div class="rounded-xl flex items-center gap-[6px] w-[136px] h-14 bg-gray-200 hover:bg-red-200 mt-2 py-2 pl-3">
                            <BiLogoPlayStore className='text-lg' />
                                <div>
                                    <p class="font-[400] text-[11px] text-gray-700">Download on the</p>
                                    <p class="font-[500] text-sm text-gray-900">Google play</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div><p className='mb-2'>অনুসরণ করুন
                    </p>
                        <div className='flex items-center gap-4'>
                            <FaXTwitter size={22} className='text-[#ee4023] hover:text-black cursor-pointer' />
                            <FaFacebookF size={22} className='text-[#ee4023] hover:text-sky-500 cursor-pointer' />
                            <AiOutlineInstagram size={25} className='text-[#ee4023] hover:text-sky-500 cursor-pointer' />
                            <IoLogoYoutube size={25} className='text-[#ee4023] hover:text-sky-500 cursor-pointer' />
                        </div></div>
                    <img className='w-[180px]' src="https://w7.pngwing.com/pngs/650/450/png-transparent-prothom-alo-%E0%A6%96%E0%A7%87%E0%A6%B2%E0%A6%BE-dhaka-bengali-sport-others-text-sport-logo.png" alt="" /> 
                    {/* {Logo} */}
                    <div><h1 className='text-base text-gray-600'>যোগাযোগ করুন
                    </h1>
                        <h2 className='text-base text-[#ee4023] font-semibold'>+88 01556 440078</h2></div>
                    <div className='text-base my-3'>
                        <h2>ঠিকানা: ২৫ কারওয়ান বাজার, ঢাকা
                        </h2>
                        <h2 className='font-semibold hover:text-green-500'>prothomalo.com</h2>
                    </div>
                </div>
            </div>
            <hr className='w-11/12 mx-auto text-gray-200 text-2xl mt-5' />
            <div className='w-11/12 mx-auto mt-3'>
                <div className='flex items-center gap-3 justify-center text-sm text-gray-600'>
                    <h1 className='hover:text-sky-500'>প্রথম আলো</h1>
                    <GoDotFill className='text-gray-400' />
                    <h1 className='hover:text-sky-500'>বিজ্ঞাপন</h1>
                    <GoDotFill className='text-gray-400' />
                    <h1 className='hover:text-sky-500'>সার্কুলেশন</h1>
                    <GoDotFill className='text-gray-400' />
                    <h1 className='hover:text-sky-500'>শর্তাবলি ও নীতিমালা</h1>
                    <GoDotFill className='text-gray-400' />
                    <h1 className='hover:text-sky-500'>গোপনীয়তা নীতি</h1>
                    <GoDotFill className='text-gray-400' />
                    <h1 className='hover:text-sky-500'>যোগাযোগ</h1>
                    <GoDotFill className='text-gray-400' />
                    <h1 className='hover:text-sky-500'>নিউজলেটার</h1>
                </div>
                <hr className='w-11/12 mx-auto text-gray-200 text-2xl mt-3' />
                <div>
                    <h1 className='text-xs text-gray-500 mt-3 text-center'>স্বত্ব © ১৯৯৮ - ২০২৫ প্রথম আলো<span className='text-black'> | </span>সম্পাদক ও প্রকাশক: মতিউর রহমান<span className='text-black'> | </span>Made by <span className='text-green-500'>Assim</span></h1>
                </div>
            </div>
        </div>
    )
}

export default Footer