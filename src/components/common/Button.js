import React from "react";
const prefix = "button";
const Button = ({ content, onClick, ...props }) => {
  return (
    <button className={prefix} onClick={onClick} {...props}>
      {content}
    </button>
  );
};

export default Button;
