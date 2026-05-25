import { useEffect } from "react";
import SliderJob from "./sliderJob";
import ScrollHintModal from "./ScrollHintModal";

export default function JobDetails({title, slides, typeSlider, descriptions }) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>

            <ScrollHintModal />
            <h2 className="section__title">{title}</h2>

            <div className="flex align-center justify-center md:pt-5 pt-2 md:px-28 px-4 md:text-base text-sm" >
                <div>
                    {descriptions?.map((d, index) => {
                        return <p key={index}>{d}</p>
                    })}
                </div>
            </div>
            
            <div>
                <SliderJob slides={slides} type={typeSlider} />
            </div>
        </div>
    )
}