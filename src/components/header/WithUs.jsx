import React from "react";
import { MdLocationPin } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

function WithUs() {
  return (
    <div className="py-10">
      <div className="w-10/12 mx-auto">
        <div>
          <h1 className="text-2xl font-semibold">
            যোগাযোগ করুন
          </h1>
        </div>

        <div className="flex justify-between">
          <div>
            <div className="mt-6">
              <div className="flex items-center gap-4">
                <MdLocationPin className="text-red-500" size={40} />
                <h1 className="text-xl">ঠিকানা</h1>
              </div>
              <h1 className="text-2xl font-semibold mt-5">
                25 Karwan Bazar, Dhaka
              </h1>
              <hr className="w-[600px] text-gray-200 mt-6" />
            </div>
            <div className="mt-5">
              <div className="flex items-center gap-4">
                <MdLocalPhone className="text-red-500" size={40} />
                <h1 className="text-xl">ফোন</h1>
              </div>
              <h1 className="text-2xl text-gray-600 mt-5">
                Mobile:{" "}
                <span className="font-semibold text-black">
                  (+88) - 0155 - 6440078
                </span>
              </h1>
              <h1 className="text-2xl text-gray-600 mt-5">
                Hotline:{" "}
                <span className="font-semibold text-black">420 - 420</span>
              </h1>
              <hr className="w-[600px] text-gray-200 mt-6" />
            </div>
            <div className="mt-5">
              <div className="flex items-center gap-4">
                <MdOutlineEmail className="text-red-500" size={40} />
                <h1 className="text-xl">মেইল</h1>
              </div>
              <h1 className="text-2xl font-semibold mt-5">
                contact@prothomalo.org
              </h1>
              <h1 className="text-2xl font-semibold mt-3">support@prothomalo.com</h1>
              <hr className="w-[600px] text-gray-200 mt-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithUs;