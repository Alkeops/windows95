import React from "react";
import { Button } from "./common";

const prefix = "barra-tareas";

const BarraTareas = ({ folderData }) => {
  return (
    <div className={prefix}>
      <div className={`${prefix}__content`}>
        <Button content="Start" onClick={() => alert("start")} />
        {folderData?.title ? <span className={`${prefix}__folder-open`}>{folderData.title}</span> : null}{" "}
      </div>
    </div>
  );
};

export default BarraTareas;
