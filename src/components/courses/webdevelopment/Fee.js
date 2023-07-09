import React from "react";
import Moneyback from "../Moneyback";

import { Icon } from "@iconify/react";

export default function Fee({ discountprice, price, monthlyprice }) {
  return (
    <div className="p-6 sm:px-[50px] py-6 bg-[#F5F6FE]" id="fee">
      <div className="container m-auto ">
        <div className="flex flex-col md:flex-row items-center gap-6 p-4">
          <h2 className="title">Course Fee and Training Options</h2>
          <Moneyback />
        </div>

        <div className="py-4 p-4 flex flex-col gap-4 lg:max-w-[70%]">
          <div className="flex flex-col md:flex-row gap-3">
            <h2 className="font-bold">Online Course</h2>

            <span>(Learn the latest Technology On Your Own Schedule)</span>
          </div>

          <hr className="border border-gray-200 w-full" />

          <div className="flex flex-col md:flex-row gap-2  py-2 text-gray-500 ">
            <div className="flex gap-2 items-center">
              <Icon icon="charm:tick" />
              <p className="text-[12px] text-[#333] ">
                490+ Hours of Self-Paced Learning
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <Icon icon="charm:tick" />
              <p className="text-[12px] text-[#333]">
                200+ Guided Hands-On Exercises
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <Icon icon="charm:tick" />
              <p className="text-[12px] text-[#333]">4 Capstone Projects</p>
            </div>
            <div className="flex gap-2 items-center">
              <Icon icon="charm:tick" />
              <p className="text-[12px] text-[#333] ">
                17 Hands-On Assignments
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl flex flex-col md:flex-row md:gap-[4.5rem] gap-6 lg:max-w-[70%]">
          <div>
            <p className="text-gray-400">Pay upfront and save!</p>

            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-3">
              <h2 className="font-semibold">INR {discountprice}</h2>
              <p className="text-[.9rem] text-gray-400 line-through">
                INR {price}
              </p>
            </div>
          </div>

          <hr className="border border-gray-200 w-[25\30px] md:w-0 md:h-[70px]" />

          <div>
            <p className="text-gray-400">Easy monthly payments as low as</p>

            <h2 className="font-semibold">INR {monthlyprice}/month</h2>
          </div>

          <div className="md:pl-4 flex   items-center">
            <button className="border border-gray-500 p-2 text-[12px] rounded-lg hover:bg-black hover:text-white">
              DOWNLOAD NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
