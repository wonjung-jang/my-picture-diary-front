import { Navigate, Outlet, useLocation } from "react-router-dom";

const NOT_LOGIN_SECTION = ["/", "/signup"];

export function AuthGuard() {
  const token = localStorage.getItem("myPictureDiaryAccessToken");
  const location = useLocation();
  const { pathname } = location;

  const isPublicRoute = NOT_LOGIN_SECTION.includes(pathname);
  const isAuthenticated = Boolean(token);

  if (isPublicRoute && isAuthenticated) {
    return <Navigate to={"/main"} state={{ from: location }} />;
  }

  if (!isPublicRoute && !isAuthenticated) {
    return <Navigate to={"/"} state={{ from: location }} />;
  }

  return <Outlet />;
}
