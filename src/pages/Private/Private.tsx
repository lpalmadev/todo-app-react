import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "../../@types";
import { About } from "./About";
import { Todo } from "./Todo";

const Private = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
      <Route path={PrivateRoutes.HOME} element={<Todo />} />
      <Route path={PrivateRoutes.ABOUT} element={<About />} />
    </Routes>
  );
};
export default Private;
