import classes from "./About.module.css";
import myself from "../../images/myself.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGithubSquare,
  faLinkedin,
  faInstagramSquare,
  faLine,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <h1 className={classes.text}>About me</h1>
        <p className={classes.textP}>
          I'm Shino, Web developer specialized in front-end.
          <br />
          working with html 5, css 3, javascript, react, adobe XD and adobe
          illustrator.
          <br /> I'm always trying to create an unique,special and responsive
          Website <br />
          to provide the the best User Experience.
          <br />
          <br /> Feel free to contact me or send me an email on any social media{" "}
          <br />
          Languages: Portuguese,Japanese and English.
        </p>
        <div className={classes.icons}>
          <a
            href="https://github.com/eveshino"
            target="_blank"
            rel="github noreferrer"
          >
            <FontAwesomeIcon className={classes.icon} icon={faGithubSquare} />
          </a>
          <a
            href="https://www.linkedin.com/in/everson-shinohara-ab7226206"
            target="_blank"
            rel="linkedin noreferrer"
          >
            <FontAwesomeIcon className={classes.icon} icon={faLinkedin} />
          </a>
          <a
            href="https://www.facebook.com/Eveshino"
            target="_blank"
            rel="facebook noreferrer"
          >
            <FontAwesomeIcon className={classes.icon} icon={faFacebookSquare} />
          </a>
          <a
            href="https://www.instagram.com/eve_shino/"
            target="_blank"
            rel="instagram  noreferrer"
          >
            <FontAwesomeIcon
              className={classes.icon}
              icon={faInstagramSquare}
            />
          </a>
          <a
            href="https://timeline.line.me/user/_db2tRRlb7r7RExu_5fv9KYPR7gCF2l16cBv2fFQ"
            target="_blank"
            rel="Line noreferrer"
          >
            <FontAwesomeIcon className={classes.icon} icon={faLine} />
          </a>
        </div>
      </div>
      <div className={classes.pic}>
        <img className={classes.myself} src={myself} alt="myself" />
      </div>
    </div>
  );
}
export default About;
