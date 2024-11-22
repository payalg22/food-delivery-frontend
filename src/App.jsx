import "./App.css";
import Footer from "./components/footer/Footer";
import Login from "./pages/UserAuthentication/Login";

function App() {
  return (
    <div className="container">
      <div className="main">
        <Login />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
