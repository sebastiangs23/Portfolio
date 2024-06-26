import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./sliderJob.css";

export default function SliderJob({ slides, type }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={type == "web" ? "slider_web" : "slider_mobile"}>
      <FaArrowAltCircleLeft className="left-arrow" onClick={previousSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {slides.map((s, index) => {
        return (
          <div
            key={index}
          >
            {index === current && (
              <img
                src={s.image}
                className={type == "web" ? "image" : "screenshot-image"}
                // className="image"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};
