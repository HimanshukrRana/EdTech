import React, { useState } from "react";

const MyFaq = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="rounded-none border transition-all duration-300 border-t-0 border-l-0 border-r-0 border-neutral-200 bg-white">
      <div
        className="mb-0 transition duration-1000 delay-500"
        id="flush-headingOne"
      >
        <button
          className="group    flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base   "
          type="button"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {question}
          <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out ">
            {showAnswer ? "-" : "+"}
          </span>
        </button>
        {showAnswer && (
          <div className="flush-collapseOne transition-all duration-300">
            <div className="py-2 px-5 text-neutral-500 transition-all duration-300 dark:text-neutral-300">
              {answer}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyFaq;
