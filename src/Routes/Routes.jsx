import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage/Homepage";
import Books from "../pages/Book/Books";
import ErrorUi from "../pages/ErrorUi/ErrorUi";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Homepage/>
      },
      {
        path: "/books",
        element: <Books/>
      }
    ],
    errorElement: <ErrorUi/>
  },
]);