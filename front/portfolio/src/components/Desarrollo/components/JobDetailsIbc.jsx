import React from "react";
import { useLanguage } from "../../Language/Language";
import SliderJob from "./sliderJob";
import { sliderIbc } from "../../../assets/imagenes-trabajo/imagenes";

export default function JobDetailsIbc() {
  const { sentences } = useLanguage();

  return (
    <div className="container-job-details">
      <h2 className="section__title">IBC - Institute</h2>
      <div className="container-title-slider">
        <SliderJob slides={sliderIbc} type="web" />
      </div>

      <div className="content_conteiner">
        <div className="content">
          <p>
            {sentences.ibc_see_more_1}
            <a
              href="https://tracktest.eu/"
              target="_blank"
              className="redirect-link"
            >
              TrackTest
            </a>
            {sentences.ibc_see_more_2}
          </p>

          <p>{sentences.ibc_see_more_3}</p>
          <p>{sentences.ibc_see_more_4}</p>
        </div>
      </div>
    </div>
  );
}
