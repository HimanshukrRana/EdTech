import Link from "next/link";
import React from "react";

export default function Parallax() {
  return (
    <div className="parallax">
      <div className="max-w-screen-xl mx-auto px-4 py-20 gap-12 text-gray-600 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-sm font-bold text-indigo-600 ">
            Build Your Portfolio
          </h1>
          <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            Kickstart Your Dream job With Us
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
              Improve Your Skills
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-black font-bold">
            We have worked with some of the best innovative ideas and brands in
            the world across industries.
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <Link
              href="#courses"
              className="block py-2 px-4 text-white font-medium bg-black hover:bg-white border-2 border-black hover:text-black duration-150  rounded-lg shadow-lg hover:shadow-none"
            >
              Buy Our Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
