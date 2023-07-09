import Image from "next/image";
import React from "react";
import { frontendtopic } from "../../../utils/topics";

export default function Topics({ topics }) {
  return (
    <div className="p-6 sm:px-[50px]  ">
      <div className="container m-auto">
        <div className="lg:max-w-[70%]">
          <h2 className="title">What You’ll Learn in the Course</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-4 ">
            {topics.map((topic) => (
              <div className="flex items-center gap-6" key={topic.id}>
                <div className="text-blue-500 border-2 border-blue-500 rounded-[50%] px-[7px]">
                  {topic.id}
                </div>
                <div>
                  <h5 className="font-medium">{topic.title}</h5>
                  <p className=" text-gray-500">{topic.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
