import Link from "next/link";
import React from "react";
import {
  Programming,
  WebDevleopment,
  allcourses,
} from "../../../utils/allcourses";

const course = [
  {
    id: 1,
    href: "/web-development/backend",
    title: "Backend Development Course",
  },
  {
    id: 2,
    href: "/web-development/fullstack",
    title: "FullStack Development Course",
  },
];

export default function Courses() {
  return (
    <div className="p-6 sm:px-[50px] py-6">
      <div className="container m-auto">
        <div>
          <h2 className="title">Related Courses</h2>
          <div className=" flex flex-wrap  text-center py-4 gap-4">
            {course.map((data) => (
              <div
                className="border border-gray-400 text-center p-2 px-4  rounded-full"
                key={data.id}
              >
                <Link href={data.href}>
                  <p className="text-gray-500 text-[1rem]">{data.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <h2 className="title">Trending Courses</h2>
          <div className=" flex flex-wrap  text-center py-4 gap-4">
            {/* {Programming.map((data) => (
              <div
                className="border border-gray-400 text-center p-2 px-4   rounded-full"
                key={data.id}
              >
                <Link href={data.href}>
                  <p className="text-gray-500 text-[1rem]">{data.course}</p>
                </Link>
              </div>
            ))} */}
            {WebDevleopment.map((data) => (
              <div
                className="border border-gray-400 text-center p-2  px-4  rounded-full"
                key={data.id}
              >
                <Link href={data.href}>
                  <p className="text-gray-500 text-[1rem]">{data.course}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="">
        <h2 className="font-bold text-[2rem]">Trending Courses</h2>
        <div className=" flex flex-wrap  text-center py-4 gap-4">
          {WebDevleopment.map((data) => (
            <div
              className="border border-gray-400 text-center p-4  rounded-full"
              key={data.id}
            >
              <Link href={data.href}>
                <h3>{data.course}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div> */}
      </div>
    </div>
  );
}
