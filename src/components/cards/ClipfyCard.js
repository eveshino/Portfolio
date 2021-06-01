import classes from "./ClipfyCard.module.css";
import logo from "../../images/linkpic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGithubSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

function ClipfyCard() {
  return (
    <div className={classes.main}>
      <div className={classes.card}>
        <img className={classes.picture} src={logo} alt="myself" />
        <h1 className={classes.name}>Shino</h1>
        <div className={classes.links}>
          <button className={classes.link}>
            <a
              href="https://www.facebook.com/Eveshino"
              target="_blank"
              rel="facebook noreferrer"
            >
              <FontAwesomeIcon
                className={classes.icon}
                icon={faFacebookSquare}
              />
              Facebook
            </a>
          </button>
          <button className={classes.link}>
            <a
              href="https://www.instagram.com/eve_shino/"
              target="_blank"
              rel="instagram  noreferrer"
            >
              <FontAwesomeIcon
                className={classes.icon}
                icon={faInstagramSquare}
              />
              Instagram
            </a>
          </button>
          <button className={classes.link}>
            <a
              href="https://github.com/eveshino"
              target="_blank"
              rel="github noreferrer"
            >
              <FontAwesomeIcon className={classes.icon} icon={faGithubSquare} />
              Github
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClipfyCard;
