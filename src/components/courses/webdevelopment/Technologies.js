import React from "react";

import { Icon } from "@iconify/react";

export default function Technologies({ technology }) {
  return (
    <div className="p-6 md:px-[50px]">
      <div className="container m-auto">
        <div className="lg:max-w-[70%]">
          <h5 className="text-[1.5rem] font-bold">
            Technologies You Will Master Hands-On
          </h5>
          <div className="flex flex-wrap gap-8 py-8">
            {technology.map(
              (item) => (
                <div key={item.id}>
                  <Icon icon={item.icon} height={40} width={40} />
                </div>
              )

              // <Image
              //   src={`${item.img}.png`}
              //   alt="lang"
              //   width={40}
              //   height={40}
              //   key={item.id}
              // />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
