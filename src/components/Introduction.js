import classes from "./Introduction.module.css";
import { Link } from "react-router-dom";
import ReactLogo from "../images/22.svg";
import React from "react";

function Introduction() {
  return (
    <div className={classes.introduction}>
      <div className={classes.nameIntro}>
        <h1>
          Hello,
          <br /> I'm
          <span className={classes.nameColor}> Everson Shinohara</span>
        </h1>
        <p>Front End Web developer and Web designer based in Japan.</p>
        <Link to="/contact">
          <button className={classes.button}>Get in touch!</button>
        </Link>
      </div>
      <div>
        <img className={classes.svg} src={ReactLogo} alt="guy working" />
      </div>
    </div>
  );
}
export default Introduction;
