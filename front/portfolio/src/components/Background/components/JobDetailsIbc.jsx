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
          {
            sentences.work_experience_items[3]?.descriptions.details.map((item, index) => {
              return <p key={index}>{item}</p>;
            })
          }
        </div>
      </div>
    </div>
  );
}
