import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import { AuthGuard } from "./guards";
import { PrivateRoutes, PublicRoutes } from "./@types";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Private } from "./pages/Private"; 
import { Layout } from "./components";

function App() {
  return (
    //className="bg-slate-300 h-screen flex text-white"
    <div className="bg-zinc-50 flex flex-col h-screen">
      <AuthProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route
                path="/"
                element={<Navigate to={PrivateRoutes.PRIVATE} />}
              />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route path={PublicRoutes.REGISTER} element={<Register />} />
              <Route element={<AuthGuard privateValidation={true} />}>
                <Route
                  path={`${PrivateRoutes.PRIVATE}/*`}
                  element={<Private />}
                />
              </Route>
            </Routes>
          </Layout>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
