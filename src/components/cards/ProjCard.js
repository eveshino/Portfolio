import React from "react";
import classes from "./ProjCard.module.css";

function ProjCard(props) {
  return (
    <div className={classes.carousel}>
      <div className={classes.card}>
        <div>
          <a href={props.link} target="_blank" rel="noreferrer">
            {props.title}
          </a>
          <p>{props.p}</p>
        </div>
        <a href={props.link} target="_blank" rel="noreferrer">
          <img src={props.ProjImg} alt={props.ProjName}></img>
        </a>
      </div>
    </div>
  );
}
export default ProjCard;
