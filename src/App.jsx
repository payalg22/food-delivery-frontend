import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Login, Register, Home } from "./pages/index.js";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="container">
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
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
