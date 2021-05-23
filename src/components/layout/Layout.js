import classes from "./Layout.module.css";
import Navigation from "./Navigation";
function Layout(props) {
  return (
    <>
      <Navigation />
      <main className={classes.main}>{props.children}</main>
    </>
  );
}

export default Layout;
