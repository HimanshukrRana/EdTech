import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className={`sm:px-[50px]  `}>
      <div className=" container m-auto">
        <div className=" flex justify-between gap-8  ">
          <div className={`lg:w-[50%] py-10 md:py-16 px-4`}>
            <h2 className=" text-[16px] font-semibold ">Buy Our Courses</h2>
            <h2 className="text-[30px] md:text-[36px]  font-bold mt-[16px]">
              Start Building
              <br />
              <span className="text-[#ee426a]">Your Skills and Portfolio</span>
              <br />
              To Get Hired as a Software Developer
            </h2>
            <div className="py-10">
              <p className="font-bold">
                Land lucrative offers with an average salary of ₹ 6 Lakhs per
                year
              </p>
            </div>
            <div className="pt-4">
              <Link
                href="#courses"
                className="p-4 px-8 font-bold  bg-btn rounded-lg"
              >
                Buy Course
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <Image
              src="/images/hero.jpeg"
              alt="frontend"
              height={470}
              width={570}
              className="h-auto w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
