import classes from "./Project.module.css";
import self from "../images/self.png";

function Project() {
  return (
    <div className={classes.main}>
      <div className={classes.title}>
        <h1>Some projects that I'm working on.</h1>
      </div>
      <div className={classes.circle}>
        <img className={classes.self} src={self} alt="self" />
      </div>
    </div>
  );
}
export default Project;
