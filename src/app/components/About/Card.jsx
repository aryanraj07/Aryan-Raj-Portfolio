import React from "react";

export const Card = ({ title, src }) => {
  return (
    <div className="rounded-2xl shadow-2xl  p-4 sm:p-6 md:p-8 hover:bg-indigo-100 min-w-[150px] h-[150px] sm:min-w-[200px] md:min-w-[300px] text-wrap hover:p-8 duration-200 hover:min-w-[350px] dark:bg-black dark:hover:bg-gray-900 ">
      <h1 className="text-xl sm:text-2xl md:text-2xl font-bold text-purple-950 hover:underline hover:text-indigo-950 hover:text-3xl duration-200 dark:text-white dark:hover:text-purple-400 break-words justify-center">
        {title}
      </h1>
      <img className="min-w-200" src={src} alt="" />
    </div>
  );
};
