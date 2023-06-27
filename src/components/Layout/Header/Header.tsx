import { PublicRoutes } from "../../../@types";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  };

  return (
    <header>
      <h2>To-do List</h2>
      <div>
        <span>{user?.displayName}</span>
        <span>{user?.email}</span>
        <img
          src={user?.photoURL !== null ? user?.photoURL : ""}
          alt="profileURL"
        />
      </div>
      <button onClick={logout}>Logout</button>
    </header>
  );
}

export default Header;
