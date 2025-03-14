import { Navigate, Outlet, useLocation } from "react-router-dom";

const NOT_LOGIN_SECTION = ["/", "/signup"];

export function AuthGuard() {
  const token = localStorage.getItem("myPictureDiaryAccessToken");
  const location = useLocation();
  const { pathname } = location;
  if (NOT_LOGIN_SECTION.includes(pathname)) {
    if (token) {
      return <Navigate to={"/main"} state={{ from: location }} />;
    }
    return <Outlet />;
  } else {
    if (!token) {
      return <Navigate to={"/"} state={{ from: location }} />;
    }
    return <Outlet />;
  }
}
