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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in
          justo vitae <br />
          elit pretium fringilla. In sem sem, laoreet sit amet porttitor elit
          pretium fringilla.
          <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer in justo vitae <br />
          elit pretium fringilla. In sem sem, laoreet sit amet porttitor elit
          pretium fringilla.
          <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer in justo vitae <br />
          elit pretium fringilla. In sem sem, laoreet sit amet porttitor elit
          pretium fringilla.
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
