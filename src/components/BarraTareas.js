import React from "react";
import { Button } from "./common";
import { AiOutlineFolder } from "react-icons/ai";
import { SiWindows95 } from "react-icons/si";
import icon from "./assets/windows-icon.png";
const prefix = "barra-tareas";

const BarraTareas = ({ folderData }) => {
  return (
    <div className={prefix}>
      <div className={`${prefix}__content`}>
        <Button
          leftIcon={<img src={icon} alt={"windows icon"} />}
          content="Start"
          onClick={() => alert("start")}
        />
        {folderData?.title ? (
          <div className={`${prefix}__folder-open`}>
            <AiOutlineFolder />
            <span>{folderData.title}</span>
          </div>
        ) : null}{" "}
      </div>
    </div>
  );
};

export default BarraTareas;
