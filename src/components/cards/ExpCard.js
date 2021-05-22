import React from "react";
import classes from "./ExpCard.module.css";

function ExpCard(props) {
  return (
    <div className={classes.carousel}>
      <div className={classes.card}>
        <img src={props.TechImg} alt={props.TechName}></img>
      </div>
    </div>
  );
}
export default ExpCard;
