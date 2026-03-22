import { technologiesArray } from "../../assets/images";
import { useLanguage } from "../Language/Language";
import "./technologies.css";

export default function technologies() {
  const { sentences } = useLanguage();

  return (
    <div className="container-technologies" id="technologies">
      <h2 className="section__title">{sentences.technologies} </h2>
      <div className="flex-container">
        {/* FRONT */}
        <div className="seccion">
          <h3 className="subtitulo">Front-end</h3>
          {technologiesArray.client.map((tech, index) => (
            <div className="solo" key={index}>
              <img src={tech.image} loading="lazy" className={tech.className} />
            </div>
          ))}
        </div>

        {/* SERVER */}
        <div className="seccion">
          <h3 className="subtitulo">Back-end</h3>
          {technologiesArray?.backend.map((tech, index) => (
            <div className="solo" key={index}>
              <img src={tech.image} loading="lazy" className={tech.class} />
            </div>
          ))}
        </div>

        {/* DATABASE */}
        <div className="seccion">
          <h3 className="subtitulo">{sentences.database} </h3>

          {technologiesArray?.dataBase.map((tech, index) => (
            <div className="solo" key={index}>
              <img src={tech.image} loading="lazy" className={tech.class} />
            </div>
          ))}
        </div>

        {/* ORM */}
        <div className="seccion">
          <h3 className="subtitulo">ORM</h3>
          {technologiesArray?.orm.map((tech, index) => (
            <div className="solo" key={index}>
              <img src={tech.image} loading="lazy" className={tech.class} />
            </div>
          ))}
        </div>

        {/* CLOUD, HOSTING & VERSION CONTROL */}
        <div className="seccion">
          <h3 className="subtitulo">Cloud, hosting & Version Control</h3>
          {technologiesArray?.cloud.map((tech, index) => (
            <div className="solo" key={index}>
              <img src={tech.image} loading="lazy" className={tech.class} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
