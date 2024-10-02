import { createBrowserRouter } from "react-router-dom";
import MyLayout from "./layout/MyLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MyLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "project",
        element: <Projects/>
      },
      {
        path: "contact",
        element: <Contact/>
      }
    ],
  },
]);
