import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AppProvider } from "./context/AppContext.jsx";
import { Provider } from "react-redux";
import { deliveryStore } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <Provider store={deliveryStore}>
        <App />
      </Provider>
    </AppProvider>
  </StrictMode>
);
