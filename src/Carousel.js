import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import imagesList from "./carousel.json";
import vectorLeft from "./images/vectorLeft.svg";
import vectorRight from "./images/vectorRight.svg";
import "./style/main.css";

export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={1000}
        naturalSlideHeight={125}
        totalSlides={imagesList.length}
      >
        <ButtonBack>
          <img src={vectorLeft} alt="vectorLeft" />
        </ButtonBack>
        <Slider>
          {imagesList.map((element, index) => {
            return (
              <Slide key={index} index={index + 1}>
                <Image src={element.url} />
              </Slide>
            );
          })}
        </Slider>

        <ButtonNext>
          {" "}
          <img src={vectorRight} alt="vectorRight" />
        </ButtonNext>
      </CarouselProvider>
    );
  }
}
