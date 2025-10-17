import React from "react";
const ArrowSVG = (props) => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      fill="#ffffff"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <path
          d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
          fill="#ffffff"
        />
      </g>
    </svg>
  );
};

export default ArrowSVG;
