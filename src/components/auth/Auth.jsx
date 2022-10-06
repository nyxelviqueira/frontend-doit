import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { NewServiceButton } from "../newServiceButton/NewServiceButton";
/* import "../header/Header"; */
import "./auth.css";

export const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <ul className="logged">
      <li className="li-link">
        <Link to={`/users`}>{user.user.username}</Link>
      </li>

      <li className="li-link buttonsHeader">
        <button className="logout" onClick={() => logout()}>
          <Link to={"/login"}>Logout</Link>
        </button>
        <li className="buttonsHeader">
          <NewServiceButton />
        </li>
      </li>
    </ul>
  ) : (
    <ul className="auth">
      <li className="li-link buttonsHeader">
        <Link to={"/register"}>Register</Link>
      </li>
      <li>
        <Link className="li-link buttonsHeader" to={"/login"}>
          Login
        </Link>
      </li>
    </ul>
  );
};
