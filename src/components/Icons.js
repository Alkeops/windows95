import React, { useState } from "react";
import cn from "classnames";
import folderClose from "./assets/folder-close.png";
import folderOpen from "./assets/folder-open.png";
import fileDoc from "./assets/file-doc.png";
import recycleBin from "./assets/recycle_bin_empty-4.png";
import recycleBinFull from "./assets/recycle_bin_full-2.png";
import img from "./assets/color_profile-0.png";
import { useApiContext } from "../context/Api/Api.context";
import { useAppContext } from "../context/App/App.context";

const prefix = "icons";

const Icons = ({
  type = "recycle",
  title,
  id,
  ...props
}) => {
  const [active, setActive] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const { updateData } = useApiContext();
  const { selectFile, selectFolder, fileSelected } = useAppContext();
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
        selectFile(id);
        setActive(true);
        //onDragStart se detona en el momento en que se empieza a arrastar el elemento.
      }}
      onKeyDown={(e) => {
        //onKeyDown se detona en el momento en que se presiona una tecla, de cualquier tipo
        //onKeyPress se detona cuando se presiona una tecla, pero solo si la tecla es de "caracter"
        //onKeyUp se detona cuando se suelta una tecla
        //console.log(e)
        if (e.key === "Enter" && type.includes("folder")) selectFolder(id);
      }}
      onDoubleClick={
        type.includes("folder") ? () => selectFolder(id) : null
        //onDoubleClick se detona cuando el usuario hace doble click en el elemento
      }
      onDrop={
        //onDrop se detona cuando estas "arrastrando" un elemento y lo sueltas en el elemento
        type.includes("folder") && fileSelected !== id
          ? () => {
              //actualizar id, fileSelected
              updateData({ id, idChild: fileSelected });
              setActive(false);
              setDragOver(false);
              selectFile(null);
            }
          : null
      }
      onDragOver={
        //onDragOver se detona cuando pasas por encima del elemento con un elemento arrastrado
        type.includes("folder") && fileSelected !== id
          ? (e) => {
              e.preventDefault();
              setDragOver(true);
            }
          : (e) => {
              e.preventDefault();
            }
      }
      onDragLeave={
        //onDragLeave se detona cuando estando encima con un elemento arrastrado, sales de el
        type.includes("folder")
          ? () => {
              setDragOver(false);
            }
          : null
      }
      onDragEnd={() => {
        selectFile(null);
      }}
      /*  onClick={() => setActive(true)} */
      onFocus={
        //onFocus se detona cuando haces "foco" aun elemento
        () => setActive(true)
      }
      onBlur={
        //onBlur se detona cuando se pierde el "foco" del elemento
        () => setActive(false)
      }
      onContextMenu={() => {}}
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
