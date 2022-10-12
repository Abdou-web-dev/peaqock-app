import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./fonts/Sofia-Pro/Sofia-Pro-Black-Az.otf";
import "./fonts/Sofia-Pro/SofiaProBoldAz.otf";
import "./fonts/Sofia-Pro/SofiaProExtraLightAz.otf";
import "./fonts/Sofia-Pro/SofiaProLightAz.otf";
import "./fonts/Sofia-Pro/SofiaProMediumAz.otf";
import "./fonts/Sofia-Pro/SofiaProRegularAz.otf";
import "./fonts/Sofia-Pro/SofiaProSemiBoldAz.otf";
import "./fonts/Sofia-Pro/SofiaProUltraLightAz.otf";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
