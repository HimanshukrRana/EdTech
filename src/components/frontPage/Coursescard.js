import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Coursescard() {
  const data = [
    {
      id: 1,
      href: "/web-development/frontend",
      img: "/images/frontend.jpg",
      course: "Frontend Development",
      desc: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    },
    {
      id: 2,
      href: "/web-development/backend",
      img: "/images/backend.jpg",
      course: "Backend Development",
      desc: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    },
    {
      id: 3,
      href: "/web-development/fullstack",
      img: "/images/front.jpg",
      course: "FullStack Development",
      desc: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    },
  ];

  return (
    <section className=" py-6 md:px-[50px]" id="courses">
      <div className="container  mx-auto">
        <h2 className="font-bold text-[2rem] px-6">Our Courses</h2>

        <div className="flex flex-wrap gap-4 m-4 ">
          {data.map((item) => (
            <div
              className=" border-2 flex flex-col sm:flex-row lg:flex-col lg:w-[28%] border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
              key={item.id}
            >
              <Image
                className="h-auto w-auto object-cover object-center"
                src={item.img}
                alt="blog"
                height={248}
                width={358}
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Web Development
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {item.course}
                </h1>
                <p className="leading-relaxed mb-3">{item.desc}</p>
                <div className="flex items-center flex-wrap ">
                  <Link
                    href={item.href}
                    className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
