import { technologiesArray } from "../../assets/images";
import { useLanguage } from "../Language/Language";
import "./technologies.css";

export default function Technologies() {
  const { sentences } = useLanguage();

  const groups = [
    {
      title: "Front-end",
      items: technologiesArray.client,
    },
    {
      title: "Back-end",
      items: technologiesArray.backend,
    },
    {
      title: sentences.database,
      items: technologiesArray.dataBase,
    },
    {
      title: "ORM",
      items: technologiesArray.orm,
    },
    {
      title: "Cloud & Version Control",
      items: technologiesArray.cloud,
    },
    {
      title: "AI",
      items: technologiesArray.artificialIntelligence,
    },
  ];

  return (
    <section className="technologies" id="technologies">
      <div className="technologies__intro">
        <h2 className="technologies__title">{sentences.technologies}</h2>
      </div>

      <div className="technologies__grid">
        {groups.map((group, groupIndex) => (
          <section className="technologies__group" key={groupIndex}>
            <div className="technologies__group-header">
              <h3 className="technologies__group-title">{group.title}</h3>
              <span className="technologies__group-count">
                {group.items?.length || 0} techs
              </span>
            </div>

            <div className="technologies__logos-grid">
              {group.items?.map((tech, index) => (
                <div className="technologies__logo" key={index}>
                  <img
                    src={tech.image}
                    loading="lazy"
                    alt={tech.name || `${group.title} technology ${index + 1}`}
                    className={tech.className || tech.class || ""}
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}