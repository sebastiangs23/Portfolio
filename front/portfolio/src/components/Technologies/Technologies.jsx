import { technologiesArray } from "../../assets/images";
import { useLanguage } from "../Language/Language";
import "./technologies.css";

export default function Technologies() {
  const { sentences } = useLanguage();

  return (
    <div className="technologies" id="technologies">
      <h2 className="text-[2rem] font-bold mb-[2rem]">
        {sentences.technologies}
      </h2>

      <div className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-around border-l-2 border-l-[#ccc]">
        {/* FRONT */}
        <section className="technologies__group">
          <h3 className="md:text-3xl text-2xl font-bold mb-[1rem]">
            Front-end
          </h3>
          {technologiesArray.client.map((tech, index) => (
            <div className="technologies__logo" key={index}>
              <img src={tech.image} loading="lazy" className={tech.className} />
            </div>
          ))}
        </section>

        {/* SERVER */}
        <section className="technologies__group">
          <h3 className="md:text-3xl text-2xl font-bold mb-[1rem]">Back-end</h3>
          {technologiesArray?.backend.map((tech, index) => (
            <div className="technologies__logo" key={index}>
              <img src={tech.image} loading="lazy" className={tech.class} />
            </div>
          ))}
        </section>

        {/* DATABASE */}
        <section className="technologies__group">
          <h3 className="md:text-3xl text-2xl font-bold mb-[1rem]">
            {sentences.database}
          </h3>

          {technologiesArray?.dataBase.map((tech, index) => (
            <div className="technologies__logo" key={index}>
              <img src={tech.image} loading="lazy" className={tech.class} />
            </div>
          ))}
        </section>

        {/* ORM */}
        <section className="technologies__group">
          <h3 className="md:text-3xl text-2xl font-bold mb-[1rem]">ORM</h3>
          {technologiesArray?.orm.map((tech, index) => (
            <div className="technologies__logo" key={index}>
              <img src={tech.image} loading="lazy" className={tech.class} />
            </div>
          ))}
        </section>

        {/* CLOUD, HOSTING & VERSION CONTROL */}
        <section className="technologies__group">
          <h3 className="md:text-3xl text-2xl font-bold mb-[1rem]">
            Cloud & Version Control
          </h3>
          {technologiesArray?.cloud.map((tech, index) => (
            <div className="technologies__logo" key={index}>
              <img src={tech.image} loading="lazy" className={tech.class} />
            </div>
          ))}
        </section>

        {/* ARTIFICIAL-INTELLIGENCE */}
        <section className="technologies__group">
          <h3 className="md:text-3xl text-2xl font-bold mb-[1rem]">AI</h3>
          {technologiesArray?.artificialIntelligence.map((tech, index) => (
            <div className="technologies__logo" key={index}>
              <img src={tech.image} loading="lazy" className={tech.class} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
