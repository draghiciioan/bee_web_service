/* eslint-disable react-refresh/only-export-components */
import { useRoutes, type RouteObject } from "react-router-dom";
import { PublicLayout } from "@/app/layouts/PublicLayout";
import { DashboardLayout } from "@/app/layouts/DashboardLayout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import VerifyEmail from "@/pages/VerifyEmail";
import RequestResetPassword from "@/pages/RequestResetPassword";
import ResetPassword from "@/pages/ResetPassword";
import DashboardHome from "@/pages/DashboardHome";
import RegisterClient from "@/pages/register/RegisterClient";
import RegisterPartner from "@/pages/register/RegisterPartner";
import RegisterCollaborator from "@/pages/register/RegisterCollaborator";
import RegisterCourier from "@/pages/register/RegisterCourier";

export const registerRoutes: RouteObject[] = [
  { path: "/register/client", element: <RegisterClient /> },
  { path: "/register/partner", element: <RegisterPartner /> },
  { path: "/register/collaborator", element: <RegisterCollaborator /> },
  { path: "/register/courier", element: <RegisterCourier /> },
];

// Rutele de bază vizibile imediat
export const routes: RouteObject[] = [
  {
    element: <PublicLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/verify-email", element: <VerifyEmail /> },
      { path: "/password/reset", element: <RequestResetPassword /> },
      { path: "/password/reset/confirm", element: <ResetPassword /> },
      ...registerRoutes,
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
export const AppRouter = () => {
  return useRoutes(routes);
};
