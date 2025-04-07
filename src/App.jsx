import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Login, Register, Home, Profile, Product, Address, NotFound } from "./pages/index.js";
import Footer from "./components/footer/Footer";
import Scroll from "./pages/Scroll.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";

function App() {
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
