import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero({
  subTitle,
  title1,
  title2,
  title3,
  description,
  imageUrl,
  bgcolor,
  textcolor,
}) {
  return (
    <div className={`sm:px-[50px] ${bgcolor} `}>
      <div className=" container m-auto">
        <div className=" flex justify-between gap-8  ">
          <div className={`lg:w-[50%] py-16 px-4 ${textcolor}`}>
            <h2 className=" text-[16px] font-semibold ">{subTitle}</h2>
            <h2 className="text-[30px] md:text-[36px]  font-bold mt-[16px]">
              {title1}

              <br />
              <span className="text-[#ee426a]">{title2}</span>
              <br />
              {title3}
            </h2>
            <div className="py-10">
              <p className="font-bold">{description}</p>
            </div>
            <div className="pt-4">
              <Link
                href="#fee"
                className="p-4 px-8 font-bold  bg-btn rounded-lg"
              >
                Buy Course
              </Link>
            </div>
          </div>
          <div className=" hidden lg:flex lg:flex-col lg:justify-between pt-6  ">
            <div className=" ribbon text-white flex justify-center gap-4 px-6 ">
              <div className="flex gap-1 items-center">
                <Image src="/images/trn.jpg" alt="" height={20} width={20} />
                <p className="text-sm">Trending</p>
              </div>
              <div className="flex gap-1 items-center">
                <Image
                  src="/images/outcome.jpg"
                  alt=""
                  height={20}
                  width={20}
                />

                <p className="text-sm">Outcome-Focused</p>
              </div>
              <div className="flex gap-1 items-center">
                <Image src="/images/learn.jpg" alt="" height={20} width={20} />

                <p className="text-sm">Immersive Learning</p>
              </div>
            </div>

            <Image
              src={imageUrl}
              alt="frontend"
              height={470}
              width={570}
              className="h-auto w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
