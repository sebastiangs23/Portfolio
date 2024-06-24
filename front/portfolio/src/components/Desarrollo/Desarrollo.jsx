import React, { useState } from "react";
import { FaLaptopCode, FaRegBuilding } from "react-icons/fa";
import "./Desarrollo.css";

function Education() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification__education section" id="desarrollo">
      {/* TITLE AND SUBTITLE */}
      <h2 className="section__title">Background </h2>
      <span className="section__subtitle">Mi desarrollo </span>

      <div className="qualification__container container">
        {/* BUTTONS */}
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 3
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <FaLaptopCode />
            <p>Experiencia laboral </p>
          </div>

          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            <p>Educación </p>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(3)}
          >
            <i class="uil uil-smile qualification__icon"></i>
            <p>Aptitudes </p>
          </div>
        </div>

        <div className="qualification__sections">

          {/* JOB EXPERIENCE */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* IBC */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Developer</h3>
                <div className="company_name">
                  <FaRegBuilding className="icon_office" />
                  <p className="text-job">IBC Institute - Ceoline</p>
                </div>
                <div className="flex items-center">
                  <i className="uil uil-calendar-alt"></i>
                  <p className="text-range-date">2023 Noviembre - 2024 Junio</p>
                </div>
                <br />

                <div>
                  <p>
                    -I Developed a service using Azure Speech AI which allows
                    the client to enter into a conversation with the system. All
                    the data is transformed into metrics and statistics, to be
                    rendered in graphs on the administrator dashboard. <br />
                    In addition to migrating the project from React 15 to React
                    18 and applying hexagonal architecture in the front.
                  </p>
                </div>

                <br />

                <p>Click Here</p>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* INTELIGENIO */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Backend Developer & Database Administrator
                </h3>

                <div className="company_name">
                  <FaRegBuilding className="icon_office" />
                  <p className="text-job">Inteligenio - Ceoline</p>
                </div>

                <div className="qualification__calender">
                  <div className="flex items-center">
                    <i className="uil uil-calendar-alt"></i>
                    <p>2023 Marzo - 2024 Junio</p>
                  </div>
                </div>

                <br />

                <div>
                  <p>
                    I worked closely with the QA team, developers, and the
                    product owner to redesign the database architecture,
                    applying business rules, constraints, uniques, and
                    relationships for an Education platform. <br />{" "}
                    Additionally, I developed the administrative roles and
                    permissions, considering performance and optimization.
                  </p>
                </div>

                <br />

                <p>Click Here</p>
              </div>
            </div>

            {/* 3 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full stack Developer</h3>

                <div className="company_name">
                  <FaRegBuilding className="icon_office" />
                  <p className="text-job">OhrangeSoft</p>
                </div>

                <div className="qualification__calender">
                  <div className="flex items-center  ">
                    <i className="uil uil-calendar-alt"></i>
                    <p>2023 Febrero - 2023 Marzo</p>
                  </div>
                </div>

                <br />

                <div>
                  <p>
                    I was in charge of designing the database, setting up the
                    server from scratch , creating the landing page and the home
                    for a clinic.
                  </p>
                </div>

                <br />

                <p>Click here</p>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
          
          {/* EDUCATION */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Desarrollador Full Stack
                </h3>

                <div className="company_name">
                  <FaRegBuilding className="icon_office" />
                  <span className="text-job">Henry</span>
                </div>

                <br />
                <span className="qualification__subtitle">Culminado</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022 Julio - 2022 Diciembre
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Negocios Internacionales
                </h3>

                <div className="company_name">
                  <FaRegBuilding className="icon_office" />
                  <span className="text-job">Zegel Ipae</span>
                </div>

                <br />
                <span className="qualification__subtitle">
                  (1/3) años culminados.
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 Marzo - 2022
                  Marzo
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Administración y Negocios Int.
                </h3>

                <div className="company_name">
                  <FaRegBuilding className="icon_office" />
                  <span className="text-job">
                    Universidad Peruana de Ciencias (UPC)
                  </span>
                </div>

                <br />
                <span className="qualification__subtitle">
                  (2/4) años culminados.
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 Agosto - 2021
                  Febrero
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
          
          {/* SOFT SKILLS */}
          <div
            className={
              toggleState === 3
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  <i class="uil uil-user"></i>
                  Personal
                </h3>
                <ul>
                  <li>Motivación personal</li>
                  <li>Autodidacta</li>
                  <li>Ética profesional</li>
                  <li>Empatia y solidaridad</li>
                  <li>Responsable</li>
                  <li>Resiliencia</li>
                  <li>Análisis de Problemas</li>
                  <li>Aprendizaje continuo</li>
                  
                </ul>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  <i class="uil uil-users-alt"></i>
                  Equipo
                </h3>
                <ul className="pl-5">
                  <li>Team Work Scrum</li>
                  <li>Metodologías ágiles</li>
                  <li>Proponer ídeas</li>
                  <li>Gestión de tiempo</li>
                  <li>Comunicación efectiva</li>
                  <li>Escucha Activa</li>
                  <li>Capacitar</li>
                  <li>Adaptabilidad y flexibilidad</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;
