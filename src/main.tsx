import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Work from "./pages/Work.tsx";
import Qualifications from "./pages/Qualifications.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contact.tsx";
import Jurgens from "./pages/Jurgens.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "work",
    element: <Work />,
  },
  {
    path: "qualifications",
    element: <Qualifications />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "Jurgens",
    element: <Jurgens />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
