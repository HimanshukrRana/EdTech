import Image from "next/image";
import React from "react";

import { Icon } from "@iconify/react";

export default function Reviews({ reviews }) {
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
    <div className="p-6 sm:px-[50px]">
      <div className="container mx-auto">
        <div className="lg:max-w-[70%] py-6">
          <h2 className="title">What Learners Are Saying</h2>

          {reviews.map((data) => (
            <div className="inline-flex gap-4 py-8" key={data.id}>
              {firstletter(data?.name?.charAt(0)?.toUpperCase())}
              <div>
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="font-semibold">{data.name}</h3>
                    <p className="text-sm text-gray-600">{data.job}</p>
                  </div>
                  <div className="flex gap-1">
                    <Icon
                      icon="ic:round-star"
                      color="green"
                      width={25}
                      height={25}
                    />
                    <Icon
                      icon="ic:round-star"
                      color="green"
                      width={25}
                      height={25}
                    />
                    <Icon
                      icon="ic:round-star"
                      color="green"
                      width={25}
                      height={25}
                    />
                    <Icon
                      icon="ic:round-star"
                      color="green"
                      width={25}
                      height={25}
                    />
                    <Icon
                      icon="ic:round-star"
                      color="green"
                      width={25}
                      height={25}
                    />
                  </div>
                </div>
                <div className="text-gray-700 flex flex-col gap-2 py-2 ">
                  <p>{data.desc}</p>
                  <p>{data.purchased}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
