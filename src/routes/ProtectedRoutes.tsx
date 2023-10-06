import { ReactNode } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { Splash } from "../pages";

type Props = {
  children?: ReactNode;
  redirectPath?: string;
};

const ProtectedRoutes = (props: Props) => {
  const { children, redirectPath = "/login" } = props;
  const auth = false,
    isLoading = false;

  const location = useLocation();

  if (isLoading) return <Splash />;

  if (!auth) {
    return <Navigate to={redirectPath} state={{ prev: location.pathname }} />;
  }

  return children ? children : <Outlet state={{ prev: location.pathname }} />;
};

export default ProtectedRoutes;
