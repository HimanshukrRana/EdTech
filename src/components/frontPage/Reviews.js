import Image from "next/image";
import React from "react";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Harshraj Kumar",
      job: "Junior Backend Developer",
      desc: "Thanks to the courses, I went from having no money to pay for a course to having a great job as a Full Stack Developer. I'm forever grateful! and its  recommended    ",
    },
    {
      id: 2,
      name: "Tanisq Sharma",
      job: "Senior FullStack Developer",
      desc: "This courses changed the course of my career. The Full Stack Development course was interesting and well-prepared, with great soft skill training . Highly recommended!      ",
    },
    {
      id: 3,
      name: "Pratham Kumar",
      job: "Junior Frontend Developer",
      desc: "My experience if frontend course was really good. They had well-structured programs that helped me increase my knowledge through great projects and assignments.",
    },
    {
      id: 4,
      name: "Aniket Sharma",
      job: "Senior Frontend Developer",
      desc: "They provide industry-relevant courses which is really useful to get a job and structured syllabus that helped me increase my knowledge through great projects and assignments.",
    },
  ];

  function firstletter(items) {
    return (
      <>
        <div className="rounded-full bg-btn inline-flex items-center p-4 h-[40px]">
          <span className="">{items}</span>
        </div>
      </>
    );
  }

  return (
    <div className="md:px-[50px]">
      <div className="container m-auto">
        <div className="px-7">
          <h2 className="title">Our Students Reviews</h2>
        </div>
        <div className="flex justify-center md:justify-start gap-4">
          {reviews.map((data) => (
            <div
              className="bg-white dark:bg-gray-800 w-70 shadow-lg  rounded-xl p-4"
              key={data.id}
            >
              <p className="text-gray-600 dark:text-white">
                <span className="text-lg font-bold text-indigo-500">“</span>
                {data.desc}
                <span className="text-lg font-bold text-indigo-500">”</span>
              </p>
              <div className="flex items-center mt-4">
                {firstletter(data?.name?.charAt(0)?.toUpperCase())}
                <div className="flex flex-col justify-between ml-2">
                  <span className="text-sm font-semibold text-indigo-500">
                    {data.name}
                  </span>
                  <span className="flex items-center text-xs dark:text-gray-400">
                    {data.job}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
