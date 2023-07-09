import React, { useState } from "react";
import { frontendfaq } from "../../../../utils/faq";
import MyFaq from "./MyFaq";

export default function Faqs({ faq }) {
  const [faqdata, setFaqdata] = useState(faq);

  return (
    <div className="p-6 sm:px-[50px] py-6 bg-gray-100">
      <div className="container m-auto">
        <h2 className="mb-6  title">Frequently asked questions</h2>

        <div
          id="accordionFlushExample"
          className="sm:max-w-[70%] transition-all duration-300"
        >
          {faqdata.map((data) => {
            const { id } = data;
            return <MyFaq key={id} {...data} />;
          })}
        </div>
      </div>
    </div>
  );
}
