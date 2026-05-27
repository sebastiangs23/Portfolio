import { useEffect } from "react";
import SliderJob from "./sliderJob";
import ScrollHintModal from "./ScrollHintModal";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

export default function JobDetails({
  title,
  slides,
  typeSlider,
  descriptions,
  url,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ScrollHintModal />

      <div className="group flex flex-col content-center justify-center items-center gap-2 sm:flex-row sm:items-center sm:gap-4">
        <h2 className="section__title">{title}</h2>

        {/* CONDITIONAL RENDER FOR ULR */}
        {url && (
          <a
            className="flex cursor-pointer items-center gap-2 text-sm text-black transition-colors group-hover:text-gray-500 sm:text-base"
            target="_blank"
            href={url}
          >
            <span>Click to Redirect</span>

            <BsArrowUpRightCircleFill
              className="
        text-lg transition-all duration-300 ease-in-out
        group-hover:rotate-45 group-hover:scale-110 group-hover:gray-500
        sm:text-xl md:text-2xl
      "
            />
          </a>
        )}
      </div>

      <div className="flex align-center justify-center md:pt-5 pt-2 md:px-28 px-4 md:text-base text-sm">
        <div>
          {descriptions?.map((d, index) => {
            return <p key={index}>{d}</p>;
          })}
        </div>
      </div>

      <div>
        <SliderJob slides={slides} type={typeSlider} />
      </div>
    </div>
  );
}
