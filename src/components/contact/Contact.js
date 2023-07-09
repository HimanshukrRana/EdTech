/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

import Form from "./Form";

export default function Contact() {
  return (
    <div className="pt-8" id="contact">
      <div className="layout">
        <div className=" rounded-xl bg-[#F0F2FE] py-8">
          <div className="p-8 text-left md:text-center">
            <h3 className="text-[3rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
              Want to Upgrade Your Skill
            </h3>
            <p>We provide beginner friendly courses </p>
          </div>
          <div className="flex  justify-center gap-8  p-6 ">
            <div className="">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
