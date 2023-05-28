import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
    {/* <img
      width={190}
      src="https://miro.medium.com/v2/resize:fit:1400/1*W1XvC3BuLOP2FnMyQg_26g.png"
    /> */}
  </React.StrictMode>
);
