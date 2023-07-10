import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Error404 } from "../../pages/Error/404";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export function Slider() {
  const { id } = useParams();
  const [sliderImages, setSliderImages] = useState(null);
  let [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    import("./../../logement/logement.json").then((data) => {
      const foundSliderImages = data.default.find(
        (logement) => logement.id === id
      );
      setSliderImages(foundSliderImages);
    });
  }, [id]);

  if (!sliderImages) {
    return <Error404 />;
  }

  if (sliderImages.pictures.length <= 1) {
    return (
      <div>
        <div className="slider__content">
          <img
            className="slider__images"
            src={sliderImages.pictures[0]}
            alt={sliderImages.title}
          />
        </div>
      </div>
    );
  }

  const NextImage = () => {
    setCurrentIndex(currentIndex + 1);
  };
  if (currentIndex > sliderImages.pictures.length - 1) {
    currentIndex = 0;
  }

  const PreviousImage = () => {
    setCurrentIndex(currentIndex - 1);
  };
  if (currentIndex < 0) {
    currentIndex = sliderImages.pictures.length - 1;
  }

  return (
    <div className="slider__content">
      <FontAwesomeIcon
        className="slider__images__arrowLeft"
        icon={faChevronLeft}
        onClick={PreviousImage}
      />

      {sliderImages.pictures.map((pic, index) => (
        <img
          className="slider__images"
          src={pic}
          alt={sliderImages.title}
          key={index}
          style={{ display: currentIndex === index ? "block" : "none" }}
        />
      ))}
      <div className="slider__images__count">
        {currentIndex + 1}/{sliderImages.pictures.length}
      </div>
      <FontAwesomeIcon
        className="slider__images__arrowRight"
        icon={faChevronRight}
        onClick={NextImage}
      />
    </div>
  );
}
