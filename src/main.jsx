import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/home";
import "@fortawesome/fontawesome-free/css/all.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/about";
import Shop from "./pages/Shop";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <main className="font-poppins scroll-smooth border-box">
    <RouterProvider router={router}></RouterProvider>
  </main>
);
