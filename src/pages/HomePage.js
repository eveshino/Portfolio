import React from "react";
import About from "../components/aboutme/About";
import Experience from "../components/Experience";
import Home from "../components/Home";
import Introduction from "../components/Introduction";

function HomePage() {
  return (
    <>
      <Home />
      <Introduction />
      <Experience />
      <About />
    </>
  );
}
export default HomePage;
