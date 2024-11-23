import { createContext, useEffect, useState } from "react";
import { getAssets } from "../services/assets";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [assets, setAssets] = useState();

  useEffect(() => {
    getAssets()
      .then((response) => response.assets)
      .then((data) => {
        setAssets(data);
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        assets,
        setAssets,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
