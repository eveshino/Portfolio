import classes from "./ProjectCards.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import clipfy from "../../images/clipfy.jpg";
import decastrothi from "../../images/decastrothi.jpeg";
import thepath from "../../images/thepath.jpeg";
import ProjCard from "./ProjCard";

function ProjectCards() {
  return (
    <div className={classes.project}>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
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
            items: 1,
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
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <ProjCard
          ProjImg={decastrothi}
          ProjName={"decastrothi"}
          link={"http://www.decastrothi.com/"}
          title={"Decastrothi"}
          p={"Photography website with vanilla Javascript"}
        />
        <ProjCard
          ProjImg={thepath}
          ProjName={"thepath"}
          link={"https://thepath0.herokuapp.com/"}
          title={"The Path"}
          p={"Application that I'm using to mark my developer path"}
        />
        <ProjCard
          ProjImg={clipfy}
          ProjName={"Clipfy"}
          link={"https://youtu.be/WJXVjqmIv1M"}
          title={"Clipfy"}
          p={"New project,Creating a Link tree with NFC tag"}
        />
      </Carousel>
    </div>
  );
}
export default ProjectCards;
