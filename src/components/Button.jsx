import React from "react";

const Button = ({ text }) => {
  return (
    <div>
      <button className="bg-green-600 text-white dark:bg-indigo-950 p-2">
        {text}
      </button>
    </div>
  );
};

export default Button;
