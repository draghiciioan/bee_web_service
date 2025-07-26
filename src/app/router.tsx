/* eslint-disable react-refresh/only-export-components */
import { useRoutes, type RouteObject } from "react-router-dom";
import { PublicLayout } from "@/app/layouts/PublicLayout";
import { DashboardLayout } from "@/app/layouts/DashboardLayout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import DashboardHome from "@/pages/DashboardHome";

// Rutele de bază vizibile imediat
export const routes: RouteObject[] = [
  {
    element: <PublicLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [{ index: true, element: <DashboardHome /> }],
  },
];

// Permite adăugarea de rute noi la runtime
export const addRoutes = (newRoutes: RouteObject[]): void => {
  routes.push(...newRoutes);
};

// Componență care generează routerul aplicației
export const AppRouter = (): JSX.Element | null => {
  return useRoutes(routes);
};
