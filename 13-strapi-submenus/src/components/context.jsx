import { useState, createContext, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    console.log("open SB")
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    console.log("close SB")
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
    return useContext(AppContext)
}