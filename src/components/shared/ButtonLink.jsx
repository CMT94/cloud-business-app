import React from "react";

const ButtonLink = (props) => {
  const { children } = props;
  return (
    <button className="border-none bg-transparent text-black mr-4 hover:text-indigo-700">
      {children}
    </button>
  );
};

export default ButtonLink;
