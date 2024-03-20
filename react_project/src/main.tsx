import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./view/Home/index";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* <App /> */}
  </React.StrictMode>
);
