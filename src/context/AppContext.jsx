import { createContext, useEffect, useState } from "react";
import { getAssets } from "../services/assets";
import { getUser } from "../services/user";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [assets, setAssets] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState();
  const [cart, setCart] = useState();

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

  useEffect(() => {
    if (cart?.items) {
      const total = cart.items.reduce((acc, curr) => {
        return acc + curr.item.price * curr.quantity;
      }, 0);
      setCart({ ...cart, total });
    }
  }, [cart?.items]);

  return (
    <AppContext.Provider
      value={{
        assets,
        setAssets,
        isLoading,
        userInfo,
        setUserInfo,
        cart,
        setCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
export { AppProvider };
