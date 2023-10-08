import { ReactNode } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { Splash } from "../pages";
import { useAppSelector } from "../rtk/hooks";

type Props = {
  children?: ReactNode;
  redirectPath?: string;
};

const ProtectedRoutes = (props: Props) => {
  const { children, redirectPath = "/login" } = props;
  const { authenticated, loading } = useAppSelector((state) => state.user);

  const location = useLocation();

  if (loading) return <Splash />;

  if (!authenticated) {
    return <Navigate to={redirectPath} state={{ prev: location.pathname }} />;
  }

  if (children) return children;
  return <Outlet state={{ prev: location.pathname }} />;
};

export default ProtectedRoutes;
