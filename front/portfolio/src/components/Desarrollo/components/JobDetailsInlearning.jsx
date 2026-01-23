import SliderJob from "./sliderJob";
import { sliderInlearning } from "../../../assets/imagenes-trabajo/imagenes";

export default function JobDetailsInlearning() {
  return (
    <div>
      <h2 className="section__title">Inlearning</h2>
      <div className="container-title-slider">
        <SliderJob slides={sliderInlearning} type="web" />
      </div>
    </div>
  );
}
