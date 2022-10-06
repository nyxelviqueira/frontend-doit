import { Auth } from "../auth/Auth";
import "./header.css";
import icon from "../../../src/assets/icon.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav className="cont-nav">
        <img src={icon} alt="Icono" className="logo" />

        <Link to={"/"}>
          <h1 className="title">DoIt!</h1>
        </Link>

        <Link to={`/services`}>
          <li className="explore-services">Explore all services</li>
        </Link>

        <Auth />
      </nav>
    </header>
  );
};
