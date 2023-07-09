import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <section className="p-4 md:px-[50px] py-12">
      <div className="container mx-auto ">
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <Image
            src="/images/add3.jpg"
            alt="service"
            className="h-auto w-auto dark:bg-gray-500 aspect-video"
            width={450}
            height={120}
          />
          <div className="flex flex-col justify-center flex-1 p-6 ">
            <span className="text-xs uppercase dark:text-gray-400">
              About Us
            </span>
            <h3 className="text-3xl font-bold">Our Organization Mission</h3>
            <p className="my-6 text-gray-500">
              Our mission is to contribute to student&apos;s development in a
              way that solves the problems of unemployability in India, by
              providing them with an efficient and self placed course . We aim
              to provide students with exclusive skills and opportunities to
              gain exposure and experience. We also aim to provide companies
              with skilled resources for optimal results and young professionals
              with a chance to showcase their skills and knowledge.
            </p>
          </div>
        </div>
        <div className="flex flex-col pt-8 overflow-hidden gap-6 rounded-md shadow-sm lg:flex-row">
          <Image
            src="/images/add2.jpg"
            alt="service"
            className="h-auto w-auto dark:bg-gray-500 aspect-video"
            width={450}
            height={120}
          />
          <div className="flex flex-col justify-center flex-1 p-6 ">
            <span className="text-xs uppercase dark:text-gray-400">
              About Us
            </span>
            <h3 className="text-3xl font-bold">Our Vision</h3>
            <p className="my-6 text-gray-500">
              Our vision is to revolutionize the current teaching methods to
              make education more fun and personal. We aim to provide students
              with a personalised experience where they are taught based on
              their learning style and not by the rudimentary standards. We seek
              to empower young professionals with the knowledge and be a part of
              their journey to success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
