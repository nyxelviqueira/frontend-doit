import { Auth } from "../auth/Auth";
import { TypeServices } from "../typeServices/TypeServices";
import { ServiceFinder } from "../serviceFinder/ServiceFinder";
import "./header.css";
import icon from "../../../src/assets/icon.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <nav className="cont-nav">
        <img src={icon} alt="Icono" className="logo" />

        <Link to={"/"}>
          <h1 className="title">DoIt!</h1>
        </Link>

        {/* <TypeServices /> */}

        <Auth />
      </nav>
    </header>
  );
};
