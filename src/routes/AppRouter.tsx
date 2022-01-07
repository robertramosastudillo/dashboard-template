import { useRoutes, Navigate } from "react-router-dom";
import { DashboardLayout, PublicLayout } from "../components/templates";
import { Dashboard, Home, Login, NotFound, Products, Users } from "../pages";

export const AppRouter = () => {
  const routes = useRoutes([
    {
      path: "",
      element: <PublicLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    {
      path: "dashboard",
      element: <DashboardLayout />,
      children: [
        { path: "", element: <Dashboard /> },
        { path: "users", element: <Users /> },
        { path: "products", element: <Products /> },
      ],
    },

    { path: "*", element: <Navigate to="/404" replace /> },
  ]);

  return routes;
};
