import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Moneyback() {
  const [popup, setPopup] = React.useState("");

  const renderdiv = () => {
    return (
      <div
        className={`mobile-menu absolute transition-opacity duration-300 bg-white mt-1 w-[280px] md:w-[600px] h-auto p-4 shadow-lg rounded-lg`}
      >
        <h5 className="font-bold">Money-Back Guarantee</h5>
        <div className="text-sm">
          <p>
            Our Course comes with a Money-Back Guarantee. KnowledgeHut provides
            an immersive learning experience where you get to learn, practice
            your code in our integrated cloud labs-based coding environment, and
            get assessed in a seamless learning experience.
          </p>
          <br />
          <p>
            Zero Questions Asked Refund , our courses are carefully curated to
            offer highly effective outcomes. In the unlikely event that a course
            does not meet your expectations and you wish to withdraw within the
            first 7 days, we will proceed with a refund, with absolutely no
            questions asked.
          </p>
        </div>
        <div className="bg-black justify-center p-2 flex items-center">
          <Image
            src="/images/mb.png"
            alt="mback"
            height={200}
            width={300}
            // className="h-auto w-auto"
          />
          {/* <hr className="w-[50px] h-[5px] bg-yellow-600" />
          <p className="text-white text-[10px] border border-yellow-500 rounded-lg inline-flex p-1">
            MONEY BACK
          </p>
          <hr className="w-[50px] h-[5px] bg-yellow-600" /> */}
        </div>
      </div>
    );
  };

  const handleLeave = () => {
    setPopup("");
  };

  const handleHover = () => {
    setPopup(renderdiv());
  };

  return (
    <div className="">
      <div
        className="p-2 rounded-lg inline-flex gap-2 bg-[#e7e9f9] cursor-pointer transition-all delay-200"
        onMouseOver={handleHover}
        onMouseLeave={handleLeave}
      >
        <h4>Money Back Guarantee</h4>
        <button className=" outline-none">
          <Icon icon="emojione-v1:circled-information-source" />
        </button>
      </div>
      {popup}
    </div>
  );
}
