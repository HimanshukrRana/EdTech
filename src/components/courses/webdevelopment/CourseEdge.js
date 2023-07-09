import React from "react";

const data = [
  {
    id: 1,
    title: "Build a Professional-Grade Portfolio",
    desc: "Leverage newly acquired Front-End development skills and showcase your portfolio to potential employers. ",
  },
  {
    id: 2,
    title: "Software Development Lifecycle (SDLC)",
    desc: "Learn how to manage end-to-end SDLC using both traditional and agile methodologies. ",
  },
  {
    id: 3,
    title: "Brilliant Track Record",
    desc: "Working in a Linux (*nix) environment, key commands, workflows, and techniques.  ",
  },
  {
    id: 4,
    title: "Version Control and Code Management",
    desc: "Master version controlling and managing code and assets using Git & GitHub. ",
  },
  {
    id: 5,
    title: "HTML5 and CSS3",
    desc: "Learn all about building responsive websites using HTML5 and CSS3. Discuss key HTML5 APIs and their use cases. ",
  },
  {
    id: 6,
    title: "JavaScript (ECMAScript 2020 and above)",
    desc: "Start with the basics; go on to work with loops, arrays and objects - level up with functions and more. ",
  },
];

export default function CourseEdge() {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold">Course Edge</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
          {data.map((topic) => (
            <div className="flex items-center gap-6" key={topic.id}>
              <div className="text-blue-500 border-2 border-blue-500 rounded-[50%] px-[7px]">
                {topic.id}
              </div>
              <div>
                <h5 className="font-medium">{topic.title}</h5>
                <p className="w-[80%] text-gray-500">{topic.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
