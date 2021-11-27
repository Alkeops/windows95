import BarraTareas from "./components/BarraTareas";
import IconsContainer from "./components/IconsContainer";
import { useState, useEffect } from "react";
import Window from "./components/Window";

const fakeData = [
  { type: "recycle", title: "Recycle bin", id: "rcp1", content: [] },
  { type: "img", title: "Imagen 1", id: "img1" },
  { type: "file", title: "Documento 1", id: "doc1" },
  { type: "folder", title: "Carpeta 1", id: "car1", content: [] },
  { type: "img", title: "Imagen 2", id: "img2" },
  { type: "file", title: "Documento 2", id: "doc2" },
  { type: "folder", title: "Carpeta 2", id: "car2", content: [] },
  { type: "img", title: "Imagen 3", id: "img3" },
  { type: "file", title: "Documento 3", id: "doc3" },
  { type: "folder", title: "Carpeta 3", id: "car3", content: [] },
  { type: "img", title: "Imagen 4", id: "img4" },
  { type: "file", title: "Documento 4", id: "doc4" },
  { type: "folder", title: "Carpeta 4", id: "car4", content: [] },
  { type: "img", title: "Imagen 5", id: "img5" },
  { type: "file", title: "Documento 5", id: "doc5" },
  { type: "folder", title: "Carpeta 5", id: "car5", content: [] },
  { type: "img", title: "Imagen 6", id: "img6" },
  { type: "file", title: "Documento 6", id: "doc6" },
  { type: "folder", title: "Carpeta 6", id: "car6", content: [] },
];

function App() {
  const [desktop, setDesktop] = useState([
    "rcp1",
    "img1",
    "doc1",
    "car1",
    "img2",
    "doc2",
    "car2",
    "img3",
    "doc3",
    "car3",
    "img4",
    "doc4",
    "car4",
    "img5",
    "doc5",
    "car5",
    "img6",
    "doc6",
    "car6",
  ]);
  const [data, setData] = useState(fakeData);
  const [folderSelected, setFolderSelected] = useState(null);
  const [folderData, setFolderData] = useState({});
  useEffect(() => {
    console.log(data);
  }, [data]);
  useEffect(() => {
    if (folderSelected) {
      return setFolderData(data.find((folder) => folder.id === folderSelected));
    }
    setFolderData({});
  }, [folderSelected]);
  return (
    <div className="App">
      <BarraTareas folderData={folderData} />
      <IconsContainer
        array={desktop}
        data={data}
        setData={setData}
        setDesktop={setDesktop}
        setFolderSelected={setFolderSelected}
      />
      <Window
        folderData={folderData}
        setFolderSelected={setFolderSelected}
        data={data}
        setData={setData}
      />
    </div>
  );
}

export default App;
