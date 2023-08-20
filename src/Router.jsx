import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import App2 from "./components/notprojects/NotProjects";
import App3 from "./components/notprojects/App3";
import Clock from "./components/notprojects/Clock";
import ClassInput from "./components/notprojects/ClassInput";
import ErrorPage from "./components/notprojects/ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
    },
    {
      path: "/react-projects",
      element: <App />,
    },
    {
      path: "/react-projects/notprojects/",
      element: <App2 />,
      children: [
        { index: true, element: <Clock /> },
        { path: "clock", element: <Clock /> },
        { path: "classinput", element: <ClassInput /> },
      ],
    },
    {
      path: "/react-projects/ds/:name",
      element: <App3 />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
