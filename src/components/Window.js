import React, { useRef, useLayoutEffect, useEffect } from "react";
import { useApiContext } from "../context/Api/Api.context";
import { useAppContext } from "../context/App/App.context";
import { Button } from "./common";
import IconsContainer from "./IconsContainer";
const prefix = "window";
const Window = () => {
  const windowRef = useRef(null);
  const { folderSelected, selectFolder } = useAppContext();
  const { window, searchWindow } = useApiContext();
  useLayoutEffect(() => {
    if (windowRef.current) {
      windowRef.current.focus();
    }
  });
  useEffect(() => {
    if (folderSelected) {
      searchWindow(folderSelected);
    }
  }, [folderSelected]);
  if (!folderSelected) return false;
  return (
    <div className={prefix}>
      <div
        className={`${prefix}__window`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Escape") selectFolder(null);
        }}
        ref={windowRef}
      >
        <div className={`${prefix}__window-header`}>
          <span className={`${prefix}__title`}>{window.data.title}</span>
          <Button
            content="x"
            onClick={() => selectFolder(null)}
            style={{
              height: 15,
              width: 15,
              padding: 0,
              fontSize: 12,
              fontWeight: "600",
            }}
          ></Button>
        </div>
        <IconsContainer array={window?.content} />
      </div>
    </div>
  );
};

export default Window;
