import React from "react";
import { Button } from "./common";
import IconsContainer from "./IconsContainer";
const prefix = "window";
const Window = ({ folderData, setFolderSelected, data, setData }) => {

  if (!Object.keys(folderData).length) return false;
  return (
    <div className={prefix}>
      <div className={`${prefix}__window`}>
        <div className={`${prefix}__window-header`}>
          <span className={`${prefix}__title`}>{folderData.title}</span>
          <Button
            content="x"
            onClick={() => setFolderSelected(null)}
            style={{
              height: 15,
              width: 15,
              padding: 0,
              fontSize: 12,
              fontWeight: "600",
            }}
          ></Button>
        </div>
        <IconsContainer
          array={folderData?.content || []}
          data={data}
          setData={setData}
          setFolderSelected={setFolderSelected}
          setDesktop={() => {}}
        />
      </div>
    </div>
  );
};

export default Window;
