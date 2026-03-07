import React from "react";
import { useLanguage } from "../../Language/Language";
import SliderJob from "./sliderJob";
import { sliderInteligenio } from "../../../assets/work-images/images";

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
          {
            sentences.background.work_experience_items[4]?.descriptions.details.map((item, index) => {
              return <p key={index}>{item}</p>;
            })
          }
        </div>
      </div>
    </div>
  );
}
