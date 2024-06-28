import React from "react";
import { useLanguage } from "../../Language/Language";
import SliderJob from "./sliderJob";
import { sliderInteligenio } from "../../../assets/imagenes-trabajo/imagenes";

export default function JobDetailsinte() {
  const { sentences } = useLanguage();

  return (
    <div>
      <h2 className="section__title">Inteligenio</h2>
      <div className="container-title-slider">
        <SliderJob slides={sliderInteligenio} type="web" />
      </div>

      <div className="content_conteiner">
        <div className="content">
          <p>{sentences.inte_see_more_1}</p>

          <p>{sentences.inte_see_more_2}</p>

          <p>{sentences.inte_see_more_3}</p>
        </div>
      </div>
    </div>
  );
}
