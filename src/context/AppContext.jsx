import { createContext, useEffect, useState } from "react";
import { getAssets } from "../services/assets";
import { getUser } from "../services/user";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [assets, setAssets] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    getAssets().then((data) => {
      setAssets(data);
      setIsLoading(false);
    });
    const token = localStorage.getItem("token");
    if (token) {
      getUser().then((res) => {
        if(res.status === 200) {
            setUserInfo(res.data);
        } else {
            localStorage.removeItem("token");
        }
      });
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        assets,
        setAssets,
        isLoading,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
