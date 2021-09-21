import classes from "./Home.module.css";

function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.autor}>
        <h1 className={classes.maintext}>Everson Shinohara</h1>
        <h1 className={classes.subtext}>Web Developer.</h1>
      </div>
    </div>
  );
}
export default Home;
