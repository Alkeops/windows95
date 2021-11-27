import React from "react";
const prefix = "button";
const Button = ({ leftIcon, content, onClick, ...props }) => {
  return (
    <button className={prefix} onClick={onClick} {...props}>
      {leftIcon}
      {content}
    </button>
  );
};

export default Button;
