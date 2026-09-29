import DashboardLayout from "@/layout/DashboardLayout";
import DjLayout from "@/layout/DjLayout";
import Dj from "@/pages/admin/Dj";
import Home from "@/pages/admin/Home";
import Setting from "@/pages/admin/Setting";
import Subscription from "@/pages/admin/Subscription";
import User from "@/pages/admin/User";
import Venues from "@/pages/admin/Venues";
import Analytics from "@/pages/dj/Analytics";
import Availability from "@/pages/dj/Availability";
import Booking from "@/pages/dj/Booking";
import DjHome from "@/pages/dj/DjHome";
import LiveStatus from "@/pages/dj/LiveStatus";
import Profile from "@/pages/dj/Profile";
import ForgotPassword from "@/pages/ForgotPassword";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProtectedRoute from "./ProtectedRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "dashboard",
            element: <DashboardLayout />,
            children: [
              { index: true, element: <Home /> },
              { path: "venues", element: <Venues /> },
              { path: "user", element: <User /> },
              { path: "dj", element: <Dj /> },
              { path: "subscription", element: <Subscription /> },
              { path: "settings", element: <Setting /> },
            ],
          },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "dj",
            element: <DjLayout />,
            children: [
              { index: true, element: <DjHome /> },
              { path: "live-status", element: <LiveStatus /> },
              { path: "booking", element: <Booking /> },
              { path: "availability", element: <Availability /> },
              { path: "analytics", element: <Analytics /> },
              { path: "profile", element: <Profile /> },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <Login />,
      },
    ],
  },
]);
export default routes;
