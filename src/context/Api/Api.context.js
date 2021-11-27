import { createContext, useContext, useState, useEffect } from "react";

//Datos del "servidor"
const fakeData = [
  {
    type: "recycle",
    title: "Recycle bin",
    id: "rcp1",
    content: [],
    parent: "desktop",
  },
  { type: "img", title: "Imagen 1", id: "img1", parent: "desktop" },
  { type: "file", title: "Documento 1", id: "doc1", parent: "desktop" },
  {
    type: "folder",
    title: "Carpeta 1",
    id: "car1",
    content: [],
    parent: "desktop",
  },
  { type: "img", title: "Imagen 2", id: "img2", parent: "desktop" },
  { type: "file", title: "Documento 2", id: "doc2", parent: "desktop" },
  {
    type: "folder",
    title: "Carpeta 2",
    id: "car2",
    content: [],
    parent: "desktop",
  },
  { type: "img", title: "Imagen 3", id: "img3", parent: "desktop" },
  { type: "file", title: "Documento 3", id: "doc3", parent: "desktop" },
  {
    type: "folder",
    title: "Carpeta 3",
    id: "car3",
    content: [],
    parent: "desktop",
  },
  { type: "img", title: "Imagen 4", id: "img4", parent: "desktop" },
  { type: "file", title: "Documento 4", id: "doc4", parent: "desktop" },
  {
    type: "folder",
    title: "Carpeta 4",
    id: "car4",
    content: [],
    parent: "desktop",
  },
  { type: "img", title: "Imagen 5", id: "img5", parent: "desktop" },
  { type: "file", title: "Documento 5", id: "doc5", parent: "desktop" },
  {
    type: "folder",
    title: "Carpeta 5",
    id: "car5",
    content: [],
    parent: "desktop",
  },
  { type: "img", title: "Imagen 6", id: "img6", parent: "desktop" },
  { type: "file", title: "Documento 6", id: "doc6", parent: "desktop" },
  {
    type: "folder",
    title: "Carpeta 6",
    id: "car6",
    content: [],
    parent: "desktop",
  },
  {
    type: "desktop",
    id: "desktop",
    content: [
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
    ],
  },
];

const ApiContext = createContext();

export const useApiContext = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  const [data, setData] = useState([...fakeData]);
  const [desktop, setDesktop] = useState([]);
  const [window, setWindow] = useState({ data: {}, content: [] });

  useEffect(() => {
    setDesktop(findAll("desktop"));
    if (window.data.id) searchWindow(window.data.id);
  }, [data]);

  const searchWindow = (id) => {
    setWindow({ data: findOne(id), content: findAll(id) });
  };
  
  const findOne = (id) => data.find((folder) => folder.id === id);

  const findAll = (id) => {
    let array = findOne(id).content;
    return array.map((id) => data.find((item) => item.id === id));
  };

  const removeFromParent = (parent, id) => {
    parent.content = parent.content.filter((item) => item !== id);
    return parent;
  };

  const updateData = ({ id, idChild }) => {
    const element = findOne(id);
    element.content = [...element.content, idChild];
    const child = findOne(idChild);
    const parent = findOne(child.parent);
    const updateParent = removeFromParent(parent, idChild);
    child.parent = id;
    /* let newData = [
      ...data.filter((item) => ![id, idChild].includes(item.id)),
      child,
      element,
    ]; */
    let newData = [
      ...data.map((item) => {
        if (item.id === id) return element;
        if (item.id === idChild) return child;
        if (item.id === updateParent.id) return updateParent;

        return item;
      }),
    ];
    setData(newData);
  };

  const value = {
    data,
    desktop,
    findAll,
    findOne,
    updateData,
    searchWindow,
    window,
  };
  return (
    <ApiContext.Provider value={value} displayName="Api">
      {children}
    </ApiContext.Provider>
  );
};
