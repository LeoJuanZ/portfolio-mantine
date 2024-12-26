import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Home from "../features/pages/Home";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "",
          element: <Navigate to={"home"} replace />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to={"/home"} replace />,
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);
