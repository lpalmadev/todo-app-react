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
    <header className="bg-[#181827] w-full mb-0 top-0 h-16 flex items-center justify-center text-gray-500">
      <h5 className="text-white text-2xl">Todo List</h5>
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
