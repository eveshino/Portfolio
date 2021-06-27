import classes from "./Project.module.css";
// import self from "../images/self.png";
import ProjectCards from "./cards/ProjectCards";

function Project() {
  return (
    <div className={classes.main}>
      <div>
        <ProjectCards />
      </div>
    </div>
  );
}
export default Project;
