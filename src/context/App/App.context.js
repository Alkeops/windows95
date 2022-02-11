import { createContext, useContext, useState} from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [fileSelected, setFileSelected] = useState(null);
  const [folderSelected, setFolderSelected] = useState(null);

  const selectFile = (id) => setFileSelected(id);
  const selectFolder = (id) => setFolderSelected(id);
  const value = { fileSelected, folderSelected, selectFile, selectFolder };
  return (
    <AppContext.Provider value={value} displayName="App">
      {children}
    </AppContext.Provider>
  );
};
