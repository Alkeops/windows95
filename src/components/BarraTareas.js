import React from "react";
import { Button } from "./common";
import { AiOutlineFolder } from "react-icons/ai";
import icon from "./assets/windows-icon.png";
import { useApiContext } from "../context/Api/Api.context";
import {useAppContext} from "../context/App/App.context";
const prefix = "barra-tareas";

const BarraTareas = () => {
  const { window } = useApiContext();
  const { folderSelected } = useAppContext();
  return (
    <div className={prefix}>
      <div className={`${prefix}__content`}>
        <Button
          leftIcon={<img src={icon} alt={"windows icon"} />}
          content="Start"
          onClick={() => alert("start")}
        />
        {folderSelected ? (
          <div className={`${prefix}__folder-open`}>
            <AiOutlineFolder />
            <span>{window.data.title}</span>
          </div>
        ) : null}{" "}
      </div>
    </div>
  );
};

export default BarraTareas;
