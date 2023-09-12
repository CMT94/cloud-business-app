import React from "react";

const Button = (props) => {
  const { children, type = "outline" | "solid", customClass } = props;

  return (
    <button
      className={
        type === "solid"
          ? `text-white bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 px-8 py-3 hover:transition duration-300 ease-in-out ${
              customClass ? customClass : ""
            }`
          : `bg-transparent text-indigo-600 px-8 py-3 mb-4 hover:bg-indigo-700 hover:text-white hover:transition duration-300 ease-in-out ${
              customClass ? customClass : ""
            }`
      }
    >
      {children}
    </button>
  );
};

export default Button;
