import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SimpleForm from "./components/Form";
import ShowHideComponent from "./components/ShowHiden";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <SimpleForm />
    <ShowHideComponent />
  </React.StrictMode>
);

reportWebVitals();
