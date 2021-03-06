import classes from "./ProjectCards.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import clipfy from "../../images/clipfy.jpg";
import decastrothi from "../../images/decastrothi.jpeg";
import letmeask from "../../images/letmeask.jpeg";
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
          link={"https://github.com/eveshino/thiagohidaka"}
          title={"Decastrothi"}
          p={"Photography website with vanilla Javascript"}
        />
        <ProjCard
          ProjImg={letmeask}
          ProjName={"letmeask"}
          link={"https://github.com/eveshino/Letmeask"}
          title={"LetMeAsk"}
          p={"Application that i made to implemente firebase features."}
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
