import SliderJob from "./sliderJob";

export default function JobDetails({title, slides, typeSlider, descriptions }) {
    return (
        <div>
            <h2 className="section__title">{title}</h2>

            <div className="flex align-center justify-center md:py-5 py-2 md:px-28 px-4 md:text-base text-sm" >
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