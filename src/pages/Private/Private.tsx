import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "../../@types";
import { lazy } from "react";

const Todo = lazy(() => import("./Todo/Todo"));

function Private() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
      <Route path={PrivateRoutes.HOME} element={<Todo />} />
    </Routes>
  );
}
export default Private;
