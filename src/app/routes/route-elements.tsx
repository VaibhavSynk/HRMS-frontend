import { lazy } from "react";
// import Profile from "../container/profile";
import { CommonRouteProps } from "./route-interface.props";
import { RoutePath } from "./route-path";

const Dashboard = lazy(() => import("../container/dashboard"));
const Login = lazy(() => import("../container/auth/login"));
const ForgotPassword = lazy(() => import("../container/auth/forgot-password"));
const Profile = lazy(() => import("../container/profile/index"));


export const RouteElementsList: CommonRouteProps[] = [
    {
      path: RoutePath.dashboard,
      element: <Dashboard />,
      index: true,
      isAuth: true
    },
    {
      path: RoutePath.login,
      element: <Login />,
      index: false,
      isAuth: false
    },
    {
      path: RoutePath.forgotPassword,
      element: <ForgotPassword />,
      index: false,
      isAuth: false
    },
    {
      path: RoutePath.profile,
      element: <Profile />,
      index: true,
      isAuth: true
    }
  ]