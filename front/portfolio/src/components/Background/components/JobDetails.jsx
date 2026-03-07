import SliderJob from "./sliderJob";

export default function JobDetails({title, slides, typeImage, descriptions }) {
    return (
        <div>
            <h2 className="section__title">{title}</h2>

            <div className="container-title-slider">
                <SliderJob slides={slides} type={typeImage} />
            </div>

            <div className="content_conteiner" >
                <div className="content">
                    {descriptions?.map((d, index) => {
                        return <p key={index}>{d}</p>
                    })}
                </div>
            </div>
        </div>
    )
}