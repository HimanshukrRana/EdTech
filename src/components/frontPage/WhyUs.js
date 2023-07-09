import Image from "next/image";
import React from "react";

export default function WhyUs() {
  return (
    <div className="md:px-[50px] py-6 ">
      <div className="container mx-auto">
        <div className="flex  flex-col-reverse lg:flex-row-reverse gap-12">
          <div className="p-4 md:p-0 lg:w-[60%]">
            <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
              Why Choose Us
            </p>
            <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
              Enhance your skills and expertise by choosing from a comprehensive
              range of courses available in different categories.
            </h4>
            <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
              Build a simply and powered collaborative course for all the
              students. Track, share, measure, you have a fully control,
              it&#x27;s never be simply and efficient.
            </p>
            <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
              <li className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                    Affordable Prices
                  </span>
                </div>
              </li>
              <li className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <p className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                    Latest Syllabus
                  </p>
                </div>
              </li>
              <li className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                    Industry level
                  </span>
                </div>
              </li>
              <li className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                    Personal Assistant
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="">
            <div className=" space-y-4">
              <div className="flex justify-center space-x-4 ">
                <Image
                  className="w-32 rounded-lg shadow-lg md:w-56"
                  width={200}
                  height={230}
                  src="/images/w1.jpeg"
                  alt="1"
                />
                <Image
                  className="w-40 rounded-lg shadow-lg md:w-64"
                  width={260}
                  height={260}
                  src="/images/w3.jpeg"
                  alt="2"
                />
              </div>
              <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                <Image
                  className="w-24 rounded-lg shadow-lg md:w-40"
                  width={170}
                  height={200}
                  src="/images/w2.jpeg"
                  alt="3"
                />
                <Image
                  className="w-32 rounded-lg shadow-lg md:w-56"
                  width={200}
                  height={200}
                  src="/images/img3.jpg"
                  alt="4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
