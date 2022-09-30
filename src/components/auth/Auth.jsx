import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { NewServiceButton } from "../newServiceButton/NewServiceButton";
import '../header/Header';

export const Auth = () => {

    const { user, logout } = useContext(AuthContext);

    return user ?
        (
            <ul className="logged">
                <li className="headerUsername">
                   <Link to={`/users`}>{user.user.username}</Link>
                </li>
                <li className="buttonsHeader">

                    <button className="logout" onClick={() => logout()}>
                        <Link to={"/login"}>Logout</Link>
                    </button>

                    <NewServiceButton />
                </li>
            </ul>
        )
        : (
            <ul className="auth">
                <li>
                    <Link to={"/register"}>Register</Link>
                </li>
                <li>
                    <Link to={"/login"}>Login</Link>
                </li>
            </ul>)
}