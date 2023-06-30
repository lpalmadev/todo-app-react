import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "../../@types";
import { Layout } from "../../components";
import { About } from "./About";
import { Todo } from "./Todo";

const Private = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
        <Route path={PrivateRoutes.HOME} element={<Todo />} />
        <Route path={PrivateRoutes.ABOUT} element={<About />} />
      </Routes>
    </Layout>
  );
};
export default Private;
