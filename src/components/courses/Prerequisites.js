import Image from "next/image";
import React from "react";

export default function Prerequisites() {
  return (
    <div className=" py-10 sm:px-[50px] ">
      <div className="container flex mx-auto bg-black gap-8 p-4 md:p-0">
        <Image
          src="/images/prerequisites.svg"
          alt=""
          height={203}
          width={166}
          className="hidden md:block"
        />
        <div className="text-white pt-4 lg:max-w-[70%]">
          <h2 className="font-bold text-[36px]">Prerequisites</h2>
          <ul className="py-6 ">
            <li>
              There are no prerequisites to attend this Bootcamp, as it is
              beginner friendly.{" "}
            </li>
            <li>
              The right aptitude, logical thinking, and drive for curiosity are
              all you need. Leave the rest to us!{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
