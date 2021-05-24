import classes from "./About.module.css";
import myself from "../../images/myself.jpeg";
function About() {
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <h1 className={classes.text}>Header content</h1>
      </div>
      <div>
        <img className={classes.myself} src={myself} alt="myself" />
      </div>
    </div>
  );
}
export default About;
