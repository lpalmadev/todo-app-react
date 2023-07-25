import { PublicRoutes } from "../../../@types";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks";
import UserInfo from "./components/UserInfo/UserInfo";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  };

  return (
    <header className="bg-black w-full mb-0  top-0 h-16 justify-center">
      <h2>My Todo App</h2>
      {user && (
        <UserInfo
          displayName={user?.displayName}
          email={user?.email}
          photoURL={user?.photoURL}
        />
      )}
      {user && <button onClick={handleLogout}>Logout</button>}
    </header>
  );
};

export default Header;
