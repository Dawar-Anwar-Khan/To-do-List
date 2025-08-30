import { createBrowserRouter, RouterProvider } from "react-router";

import { createRoot } from "react-dom/client";

import App from "./App.jsx";


import Home from "./assets/components/todos/Home.jsx";
import Error from "./assets/components/todos/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
