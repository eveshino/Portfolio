import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
import logo from "../../images/logo.svg";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link to="/">
        <img className={classes.logo} src={logo} alt="logo"></img>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/aboutme">About me</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
