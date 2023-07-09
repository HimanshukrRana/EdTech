import React from "react";

export default function QuestionForm() {
  return (
    <div className=" hidden sticky   lg:rounded-lg  lg:flex lg:flex-col lg:w-1/4 bg-white   shadow-md  top-20  float-right mr-16 mt-16">
      <div className="  ">
        <div className="bg-gray-100 p-4">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Got questions?
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Fill the form below and a Learning Advisor will get back to you
            within 4 working hours.
          </p>
        </div>
        <div className="p-6">
          <div className=" mb-4">
            <input
              type="string"
              placeholder="Name*"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className=" mb-4">
            <input
              type="number"
              placeholder="Phone Number*"
              id="phone"
              name="phone"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out required"
            />
          </div>
          <div className=" mb-4">
            <input
              type="email"
              placeholder="Email*"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out required"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-black border-0 py-1 px-5 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
