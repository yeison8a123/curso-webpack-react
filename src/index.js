import React from "react";
import ReactDom from "react-dom/client";
import App from "./components/App";
import './styles/global.scss';

const root = ReactDom.createRoot(document.getElementById("app"));
root.render(<App />);



//import React from "react";
//import { createRoot } from "react-dom/cliente";
//import App from "./components/App";
//
//createRoot(document.getElementById('app')).render(<App />);