import React from "react";
const Hotel = (props) => {
    return (
     <svg
    fill="#0ea5e9"
    viewBox="0 0 24 24"
    id="hotel"
    data-name="Flat Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-color"
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
        id="primary"
        d="M21,20V4a2,2,0,0,0-2-2H5A2,2,0,0,0,3,4V20a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"
        style={{
          fill: "#0ea5e9",
        }}
      />
      <path
        id="secondary"
        d="M10,12H8a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2ZM8,8h2a1,1,0,0,0,0-2H8A1,1,0,0,0,8,8Zm6,0h2a1,1,0,0,0,0-2H14a1,1,0,0,0,0,2Zm0,6H10a1,1,0,0,0-1,1v5h6V15A1,1,0,0,0,14,14Zm2-4H14a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"
        style={{
          fill: "currentcolor",
        }}
      />
    </g>
  </svg>
    );
};

export default Hotel;