import React, { useState } from "react";
import cn from "classnames";
import folderClose from "./assets/folder-close.png";
import folderOpen from "./assets/folder-open.png";
import fileDoc from "./assets/file-doc.png";
import recycleBin from "./assets/recycle_bin_empty-4.png";
import recycleBinFull from "./assets/recycle_bin_full-2.png";
import img from "./assets/color_profile-0.png";

const prefix = "icons";

const Icons = ({
  type = "recycle",
  title,
  id,
  data,
  setData,
  idSelected,
  setDesktop,
  setIdSelected,
  setFolderSelected,
  ...props
}) => {
  const [active, setActive] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const classForComponent = cn(prefix, {
    [`${prefix}--active`]: active,
    [`${prefix}--drag-over`]: dragOver,
  });
  const iconsMap = {
    folder: folderClose,
    folderOpen,
    file: fileDoc,
    recycle: recycleBin,
    recycleFull: recycleBinFull,
    img,
  };
  return (
    <div
      className={classForComponent}
      tabIndex={0}
      draggable={!type.includes("recycle")}
      onDragStart={() => {
        setIdSelected(id);
        setActive(true);
      }}
      onDoubleClick={type.includes("folder") ? () => setFolderSelected(id) : null}
      onDrop={
        type.includes("folder") && idSelected !== id
          ? () => {
              const element = data.find((item) => item.id === id);
              element.content = [...element.content, idSelected];
              console.log({ element, idSelected });
              setDesktop((p) => [...p.filter((item) => item !== idSelected)]);
              setData([...data.filter((item) => item.id !== id), element]);
              setActive(false);
              setDragOver(false);
            }
          : null
      }
      onDragOver={
        type.includes("folder") && idSelected !== id
          ? (e) => {
              e.preventDefault();
              setDragOver(true);
            }
          : (e) => {
              e.preventDefault();
            }
      }
      onDragLeave={
        type.includes("folder")
          ? () => {
              setDragOver(false);
            }
          : null
      }
      onClick={() => setActive(true)}
      onBlur={() => setActive(false)}
      {...props}
    >
      <img
        src={dragOver ? iconsMap["folderOpen"] : iconsMap[type]}
        style={{ width: 50 }}
        draggable={false}
        alt={title}
      />
      <span className={`${prefix}__title`} draggable={false}>
        {title}
      </span>
    </div>
  );
};

export default Icons;
