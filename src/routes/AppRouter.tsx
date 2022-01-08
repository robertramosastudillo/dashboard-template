import { useRoutes, Navigate } from "react-router-dom";
import { DashboardLayout, PublicLayout } from "../components/templates";
import { Categories, Dashboard, Home, Login, NotFound, Products, Users } from "../pages";

export const AppRouter = () => {
  const routes = useRoutes([
    {
      path: "",
      element: <PublicLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "iniciar-sesion", element: <Login /> },
        { path: "404", element: <NotFound /> },
      ],
    },
    {
      path: "app",
      element: <DashboardLayout />,
      children: [
        { path: "", element: <Dashboard /> },
        { path: "usuarios", element: <Users /> },
        { path: "productos", element: <Products /> },
        { path: "categorias", element: <Categories /> },
      ],
    },

    { path: "*", element: <Navigate to="/404" replace /> },
  ]);

  return routes;
};
