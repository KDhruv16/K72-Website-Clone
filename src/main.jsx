import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Stairs from "./components/Stairs.jsx";
import Context from "./context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <StrictMode> */}
      <Stairs>
        <Context>
          <App />
        </Context>
      </Stairs>
    {/* </StrictMode> */}
  </BrowserRouter>
);
