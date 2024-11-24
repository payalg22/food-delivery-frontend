import { createContext, useEffect, useState } from "react";
import { getAssets } from "../services/assets";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [assets, setAssets] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAssets().then((data) => {
      setAssets(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        assets,
        setAssets,
        isLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
