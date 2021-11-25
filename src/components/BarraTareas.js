import React from "react";
import { Button } from "./common";

const prefix = "barra-tareas";

const BarraTareas = () => {
  return (
    <div className={prefix}>
      <Button content="Start" onClick={() => alert("start")} />
    </div>
  );
};

export default BarraTareas;
