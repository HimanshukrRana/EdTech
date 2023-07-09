import { Icon } from "@iconify/react";
import React from "react";

const advantages = [
  {
    id: 1,
    title: "Freshers",
  },
  {
    id: 2,
    title: "Novices",
  },
  {
    id: 3,
    title: "Developers",
  },
  {
    id: 4,
    title: "IT Industry Professionals",
  },
  {
    id: 5,
    title: "Professionals in a tech-adjacent role",
  },
  {
    id: 6,
    title: "Professionals from any industry",
  },
];

const btn = [
  {
    id: 1,
    title: "Immersive Learning",
  },
  {
    id: 2,
    title: "Learn by Doing",
  },
  {
    id: 3,
    title: "Cloud Labs",
  },
  {
    id: 4,
    title: "Outcome-Focused",
  },
  {
    id: 5,
    title: "On-Demand Learning",
  },
];

export default function Advantages() {
  return (
    <div className="p-6 sm:px-[50px]">
      <div className=" container m-auto">
        <div className="py-6 ">
          <h2 className="title">Who Should Attend the Online Bootcamp</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:max-w-[70%] py-7 text-gray-500">
            {advantages.map((data) => (
              <div className="flex gap-2 items-center" key={data.id}>
                <div className="text-blue-500 border-2 border-blue-500 rounded-[50%] px-[0.5px]">
                  <Icon icon="charm:tick" />
                </div>
                <p>{data.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-6 lg:max-w-[70%]">
          <h2 className="title">Our Course Advantages</h2>
          <p className="font-medium">
            The most effective project-based immersive learning experience
          </p>

          <div className="flex flex-wrap gap-4 py-6">
            {btn.map((data) => (
              <button
                className="bg-btn-ad p-2 px-3 rounded-md bg-gray-200"
                key={data.id}
              >
                {data.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
