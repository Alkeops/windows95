import React from "react";
import Icons from "./Icons";
const prefix = "icons-container";
const IconsContainer = ({ array }) => {
  return (
    <div className={prefix} draggable={false}>
      {array.map((icon) => (
        <Icons {...icon} key={icon.id} />
      ))}
    </div>
  );
};

export default IconsContainer;
