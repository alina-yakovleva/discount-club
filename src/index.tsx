import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { LocalizationProvider } from "@mui/lab";
import ruLocale from "date-fns/locale/ru";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
      <App />
    </LocalizationProvider>
  </BrowserRouter>
);
