import SliderJob from "./sliderJob";
import { sliderNeoris } from "../../../assets/work-images/images";

export default function JobDetailsNeoris() {
  return (
    <div className="container-job-details">
      <h2 className="section__title">EPAM Neoris</h2>

      <div className="container-title-slider">
        <SliderJob slides={sliderNeoris} />
      </div>
    </div>
  );
}