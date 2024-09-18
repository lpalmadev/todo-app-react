import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import { AuthGuard } from "./guards";
import { PrivateRoutes, PublicRoutes } from "./@types";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Private } from "./pages/Private";
import PublicRoute from "./utilities/PublicRoute";
import { ThemeProvider } from "./providers/theme-providers";

function App() {
  return (
    <div className="bg-zinc-50 flex flex-col h-screen">
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<Navigate to={PrivateRoutes.PRIVATE} />}
              />
              <Route
                path={PublicRoutes.LOGIN}
                element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                }
              />
              <Route path={PublicRoutes.REGISTER} element={<Register />} />
              <Route element={<AuthGuard privateValidation={true} />}>
                <Route
                  path={`${PrivateRoutes.PRIVATE}/*`}
                  element={<Private />}
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
