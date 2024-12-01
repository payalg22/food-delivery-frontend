import { createContext, useEffect, useState } from "react";
import { getAssets } from "../services/assets";
import { getUser } from "../services/user";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [assets, setAssets] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const fetchAssets = getAssets().then((data) => {
      setAssets(data);
    });

    const token = localStorage.getItem("token");

    const fetchUser = token
      ? getUser().then((res) => {
          if (res.status === 200) {
            setUserInfo(res.data);
          } else {
            localStorage.removeItem("token");
          }
        })
      : Promise.resolve();

    Promise.all([fetchAssets, fetchUser]).finally(() => {
      setIsLoading(false);
    });
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
export { AppProvider };
