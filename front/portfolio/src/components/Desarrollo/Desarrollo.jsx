import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../Language/Language";
import { FaLaptopCode, FaRegBuilding } from "react-icons/fa";
import "./Desarrollo.css";

function Education() {
  const [toggleState, setToggleState] = useState(1);
  const { sentences } = useLanguage();

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification__education section" id="desarrollo">
      {/* TITLE AND SUBTITLE */}
      <h2 className="section__title">{sentences.background} </h2>
      <span className="section__subtitle">
        {sentences.background_subtitle}{" "}
      </span>

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
            <p className="ml-2">{sentences.work_experience} </p>
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
            <p> {sentences.education} </p>
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
            <p>{sentences.skill}</p>
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
                <h3 className="qualification__title">
                  {sentences.work_ibc_position}
                </h3>
                <div className="company_name">
                  <FaRegBuilding className="icon_office" />
                  <p className="text-job">IBC Institute - Ceoline</p>
                </div>
                <div className="flex items-center">
                  <i className="uil uil-calendar-alt"></i>
                  <p className="text-range-date">{sentences.work_ibc_date} </p>
                </div>
                <br />

                <div>
                  <p>
                    {sentences.work_ibc_description} <br />
                    {sentences.work_ibc_description_2}
                  </p>
                </div>

                <br />

                <Link
                  to="/experience/ibc-institute"
                  className="button  button--flex"
                >
                  {sentences.see_more}
                </Link>
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
                  {sentences.work_inte_position}
                </h3>

                <div className="company_name">
                  <FaRegBuilding className="icon_office" />
                  <p className="text-job">Inteligenio - Ceoline</p>
                </div>

                <div className="qualification__calender">
                  <div className="flex items-center">
                    <i className="uil uil-calendar-alt"></i>
                    <p>{sentences.work_inte_date}</p>
                  </div>
                </div>

                <br />

                <div>
                  <p>
                    {sentences.work_inte_description} <br />
                    {sentences.work_inte_description_2}
                  </p>
                </div>

                <br />

                <Link
                  to="/experience/inteligenio"
                  className="button  button--flex"
                >
                  {sentences.see_more}
                </Link>
              </div>
            </div>

            {/* 3 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {sentences.work_1_position}{" "}
                </h3>

                <div className="company_name">
                  <FaRegBuilding className="icon_office" />
                  <p className="text-job">OhrangeSoft</p>
                </div>

                <div className="qualification__calender">
                  <div className="flex items-center  ">
                    <i className="uil uil-calendar-alt"></i>
                    <p>{sentences.work_1_date} </p>
                  </div>
                </div>

                <br />

                <div>
                  <p>{sentences.work_1_description}</p>
                </div>

                <br />
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
