import SliderJob from "./sliderJob";

export default function JobDetails({title, slides, descriptions}) {
    return (
        <div>
            <h2 className="section__title">{title}</h2>

            <div className="container-title-slider">
                <SliderJob slides={slides} type="web" />
            </div>

            <div className="content__conteiner" >
                <div className="content">
                    {descriptions.map((d, index) => {
                        return (
                            <p key={index}>{d}</p>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}