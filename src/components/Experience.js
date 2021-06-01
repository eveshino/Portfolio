import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ExpCard from "./cards/ExpCard";
import classes from "./Experience.module.css";
import html5 from "../images/HTML5.svg";
import css3 from "../images/CSS3.svg";
import js from "../images/JavaScript.svg";
import react from "../images/React.svg";
import github from "../images/github.svg";
import nodejs from "../images/Nodejs.svg";
function Experience() {
  return (
    <>
      <p className={classes.text}>Experience</p>
      <div className={classes.carousel}>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={1}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          customTransition="all 2s linear"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 50,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={0.5}
          swipeable
          transitionDuration={1000}
        >
          <ExpCard TechImg={html5} TechName={"html 5"} />
          <ExpCard TechImg={css3} TechName={"css 3"} />
          <ExpCard TechImg={js} TechName={"javascript"} />
          <ExpCard TechImg={react} TechName={"react"} />
          <ExpCard TechImg={nodejs} TechName={"nodejs"} />
          <ExpCard TechImg={github} TechName={"github"} />
        </Carousel>
      </div>
    </>
  );
}
export default Experience;
