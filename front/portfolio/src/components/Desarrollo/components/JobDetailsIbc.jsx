import React from "react";
import SliderJob from "./sliderJob";
import { sliderIbc } from "../../../assets/imagenes-trabajo/imagenes";

export default function JobDetailsIbc() {
  return (
    <div className="container-job-details">
      <h2 className="section__title">IBC - Institute</h2>
      <div className="container-title-slider">
        <SliderJob slides={sliderIbc} type="web" />
      </div>

      <div>
        <p>
          -I Developed a service using Azure Speech AI which allows the client
          to enter into a conversation with the system. All the data is
          transformed into metrics and statistics, to be rendered in graphs on
          the administrator dashboard. <br />
          In addition to migrating the project from React 15 to React 18 and
          applying hexagonal architecture in the front.
        </p>
      </div>
    </div>
  );
}
