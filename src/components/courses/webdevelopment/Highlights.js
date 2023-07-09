import Image from "next/image";
import React from "react";
import Moneyback from "../Moneyback";

export default function Highlights({ highlights }) {
  return (
    <div className="p-6 md:px-[50px]">
      <div className="container m-auto">
        <div className="flex flex-col items-center  md:flex-row gap-6 ">
          <h6 className="title">Highlights</h6>
          <Moneyback />
        </div>
        <div className="lg:max-w-[70%] grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
          {highlights.map((data) => (
            <div className="flex  gap-4" key={data.id}>
              <Image
                src={`/images/highlights/${data.img}`}
                alt="highlights"
                height={40}
                width={50}
                className="h-auto w-auto "
              />
              <p>{data.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
