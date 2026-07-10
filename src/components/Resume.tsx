import React from "react";

const Resume = () => {
  return (
    <div className="bg-slate-200 dark:bg-gray-900 py-10 md:py-20" id="resume">
      <div className="container mx-auto px-4 md:px-8 flex flex-col justify-center items-center gap-5 md:gap-10">
        {/* Our heading goes here */}
        <h1 className="text-2xl md:text-4xl text-center dark:text-white">
          Check out my Resume
        </h1>
        <a
          href="https://drive.google.com/file/d/1DkSMy1th_XIxxv_YRL0tzuCmWtBbGy-y/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-orange-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full hover:scale-110 transition-transform duration-200">
            My Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
