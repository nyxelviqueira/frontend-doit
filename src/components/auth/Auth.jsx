import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { NewServiceButton } from "../newServiceButton/NewServiceButton";
import "./auth.css";

export const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <ul className="logged">
      <NewServiceButton />
      <li className="buttonsHeader">
        <button className="logout" onClick={() => logout()}>
          <Link to={"/login"} className="link">
            Logout
          </Link>
        </button>
      </li>
      <li className="headerUsername">
        <Link className="link" to={`/users`}>
          {user.user.username}
        </Link>
      </li>
    </ul>
  ) : (
    <ul className="auth">
      <li>
        <Link to={"/register"} className="link">
          Register
        </Link>
      </li>
      <li>
        <Link to={"/login"} className="link">
          Login
        </Link>
      </li>
    </ul>
  );
};
