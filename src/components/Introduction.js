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
          <br /> I'm{" "}
          <span className={classes.nameColor}>Everson Shinohara.</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in
          justo vitae <br />
          elit pretium fringilla. In sem sem, laoreet sit amet porttitor elit
          pretium fringilla.
        </p>
        <Link to="/">
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
