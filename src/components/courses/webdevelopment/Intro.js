import React from "react";

export default function Intro({ title, description }) {
  return (
    <div className="p-6 sm:px-[50px]  ">
      <div className="container  mx-auto">
        <div className=" ">
          <div className="lg:max-w-[70%]">
            <h2 className="title">{title}</h2>
            <p className="text-gray-600 pt-4">
              {description}
              <br />
              Gain a deep understanding of how to build, deploy, secure, and
              scale programs and build expertise across the user interface,
              business logic, and database stacks in our various courses. Learn
              by doing capstone projects that simulate real-world web
              development. With our Courses Online, you’ll dive deeper into
              topics and techniques via independent and group projects, receive
              individualized feedback, designed by top industry experts, hone
              your skills in hackathons spread across the program, and crack
              interviews of your dream company or organization.
              <br />
              This beginner-friendly Web Development Course is offered online in
              blended learning mode, and also in an on-demand self-paced format.
              This is your chance to prepare for the world of work as a Software
              Developer in a product-based company, compile a job-ready project
              portfolio and become a self-sufficient, versatile software
              developer with all the critical skills for a long and healthy
              career in tech.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
