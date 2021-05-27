import classes from "./About.module.css";
import myself from "../../images/myself.jpeg";
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
      </div>
      <div>
        <img className={classes.myself} src={myself} alt="myself" />
      </div>
    </div>
  );
}
export default About;
