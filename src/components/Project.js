import classes from "./Project.module.css";
import self from "../images/self.png";
import ProjectCards from "./cards/ProjectCards";

function Project() {
  return (
    <div className={classes.main}>
      <div className={classes.title}>
        <h1>Some projects that I'm working on.</h1>
      </div>
      <div className={classes.circle}>
        <img className={classes.self} src={self} alt="self" />
      </div>
      <ProjectCards />
    </div>
  );
}
export default Project;
