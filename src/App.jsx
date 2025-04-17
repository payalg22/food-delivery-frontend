import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Login,
  Register,
  Home,
  Profile,
  Product,
  Address,
  NotFound,
} from "./pages/index.js";
import Footer from "./components/footer/Footer";
import Scroll from "./pages/Scroll.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";
import Payment from "./pages/payment/Payment.jsx";
import Success from "./pages/success/Success.jsx";
import { useDispatch } from "react-redux";
import { useContext, useEffect } from "react";
import AppContext from "./context/AppContext.jsx";
import cartActions from "./redux/cartSlice.js";
import addressActions from "./redux/addressSlice.js";
import { getCart } from "./services/cart.js";

function App() {
  const { userInfo } = useContext(AppContext);
  const dispatch = useDispatch();

  //Set cart, address and other info
  useEffect(() => {
    if (userInfo) {
      getCart().then((res) => {
        if (res?.status === 200) {
          const cart = res.data;
          cart.items = res.data.items.map((cartItem) => {
            return { ...cartItem.item, quantity: cartItem.quantity };
          });
          dispatch(cartActions.itemsInCart(cart));
        }
      });
      if (userInfo?.address) {
        dispatch(addressActions.setAddresses(userInfo.address));
      }
    }
  }, [userInfo]);

  return (
    <div className="container">
      <div className="main">
        <BrowserRouter>
          <Scroll />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/address" element={<Address />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/success" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
