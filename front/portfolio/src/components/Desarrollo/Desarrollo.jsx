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
                  {sentences.carrer_henry}
                </h3>

                <div className="company_name">
                  <FaRegBuilding className="icon_office" />
                  <span className="text-job">
                    {sentences.carrer_place_henry}
                  </span>
                </div>

                <br />
                <span className="qualification__subtitle">
                  {sentences.carrer_status_henry}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  {sentences.carrer_date_henry}
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
                  {sentences.carrer_zegel}
                </h3>

                <div className="company_name">
                  <FaRegBuilding className="icon_office" />
                  <span className="text-job">
                    {sentences.carrer_place_zegel}
                  </span>
                </div>

                <br />
                <span className="qualification__subtitle">
                  {sentences.carrer_status_zegel}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  {sentences.carrer_date_zegel}
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {sentences.carrer_upc}
                </h3>

                <div className="company_name">
                  <FaRegBuilding className="icon_office" />
                  <span className="text-job">
                  {sentences.carrer_place_upc}
                  </span>
                </div>

                <br />
                <span className="qualification__subtitle">
                {sentences.carrer_status_upc}
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> {sentences.carrer_date_upc}
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
                  {sentences.skills_personal}
                </h3>
                <ul>
                  <li>{sentences.skills_personal_1}</li>
                  <li>{sentences.skills_personal_2}</li>
                  <li>{sentences.skills_personal_3}</li>
                  <li>{sentences.skills_personal_4}</li>
                  <li>{sentences.skills_personal_5}</li>
                  <li>{sentences.skills_personal_6}</li>
                  <li>{sentences.skills_personal_7}</li>
                  <li>{sentences.skills_personal_8}</li>
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
                  {sentences.skills_team}
                </h3>
                <ul className="pl-5">
                  <li>{sentences.skills_team_1}</li>
                  <li>{sentences.skills_team_2}</li>
                  <li>{sentences.skills_team_3}</li>
                  <li>{sentences.skills_team_4}</li>
                  <li>{sentences.skills_team_5}</li>
                  <li>{sentences.skills_team_6}</li>
                  <li>{sentences.skills_team_7}</li>
                  <li>{sentences.skills_team_8}</li>
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
