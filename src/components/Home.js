import classes from "./Home.module.css";

function Home() {
  return (
    <div className={classes.home}>
      <h1 className={classes.text}>Shino Dev</h1>
      <div className={classes.autor}>
        <h1 className={classes.maintext}>Be better than you were yesterday.</h1>
        <h1 className={classes.subtext}>
          Once you stop learning, you start dying.
        </h1>
        <p className={classes.minitext}>- Albert Eistein -</p>
      </div>
    </div>
  );
}
export default Home;
