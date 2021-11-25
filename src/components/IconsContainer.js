import React, { useEffect, useState } from "react";
import Icons from "./Icons";
const prefix = "icons-container";
const IconsContainer = ({ array = [], data, setData, setDesktop }) => {
  const [internalData, setInternalData] = useState([]);
  const [idSelected, setIdSelected] = useState("");
  useEffect(() => {
    let newData = array.map((id) => data.find((item) => item.id === id));
    console.log(array);
    setInternalData(newData);
  }, [array]);
  return (
    <div className={prefix} draggable={false}>
      {internalData.map((icon) => (
        <Icons
          {...icon}
          key={icon.id}
          data={data}
          setData={setData}
          idSelected={idSelected}
          setIdSelected={setIdSelected}
          setDesktop={setDesktop}
        />
      ))}
    </div>
  );
};

export default IconsContainer;
