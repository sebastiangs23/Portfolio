import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../Language/Language";
import { FaLaptopCode, FaRegBuilding, FaGraduationCap } from "react-icons/fa";
import TimelineItem from "./components/TimeLineItem.jsx";
import "./Background.css";

export default function Background() {
  const timelineRefs = useRef([]);
  const { sentences } = useLanguage();
  const [toggleState, setToggleState] = useState(1);

  const softSkillsItems = [
    {
      title: sentences.background.skills_personal,
      icon: "uil uil-user",
      items: sentences.background.skills_personal_all || [],
    },
    {
      title: sentences.background.skills_team,
      icon: "uil uil-users-alt",
      items: sentences.background.skills_team_all || [],
    },
  ];

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const setTimelineRef = (el, index) => {
    timelineRefs.current[index] = el;
  };

  useEffect(() => {
    const elements = timelineRefs.current.filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("timeline-item--visible");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    elements.forEach((el) => {
      el.classList.remove("timeline-item--visible");
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [toggleState, sentences]);

  return (
    <section className="training mt-24" id="background">
      <h2 className="training__title text-center">{sentences._background}</h2>

      <span className="training__subtitle block text-center mb-16">
        {sentences.background.background_subtitle}
      </span>

      <div className="training__core container max-w-4xl mx-auto px-4">
        <div className="training__core-tabs flex justify-center gap-2 mb-8 flex-wrap">
          <div
            className={
              toggleState === 1
                ? "training__core-tabs-button training__core-tabs-active"
                : "training__core-tabs-button"
            }
            onClick={() => toggleTab(1)}
          >
            <FaLaptopCode />
            <p className="ml-2">{sentences.background.work_experience}</p>
          </div>

          <div
            className={
              toggleState === 2
                ? "training__core-tabs-button training__core-tabs-active"
                : "training__core-tabs-button"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-graduation-cap training__core-icons"></i>
            <p>{sentences.background.education}</p>
          </div>

          <div
            className={
              toggleState === 3
                ? "training__core-tabs-button training__core-tabs-active"
                : "training__core-tabs-button"
            }
            onClick={() => toggleTab(3)}
          >
            <i className="uil uil-books training__core-icons"></i>
            <p>{sentences.background.certifications}</p>
          </div>

          <div
            className={
              toggleState === 4
                ? "training__core-tabs-button training__core-tabs-active"
                : "training__core-tabs-button"
            }
            onClick={() => toggleTab(4)}
          >
            <i className="uil uil-smile training__core-icons"></i>
            <p>{sentences.background.skill}</p>
          </div>
        </div>

        <div className="training__core-data">
          {/* JOB EXPERIENCE */}
          <div
            className={
              toggleState === 1
                ? "training__core-data-content training__core-data-content-active"
                : "training__core-data-content"
            }
          >
            <div className="timeline-wrapper">
              {sentences.background.work_experience_items?.map((job, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <TimelineItem
                    key={job.id}
                    isLeft={isLeft}
                    index={index}
                    refIndex={index}
                    setTimelineRef={setTimelineRef}
                  >
                    <div>
                      <h3 className="training__core-title">{job.position}</h3>

                      <div className="company_name">
                        <FaRegBuilding className="icon_office" />
                        <p>{job.company}</p>
                      </div>

                      <div className="flex items-center gap-1 mt-2">
                        <i className="uil uil-calendar-alt"></i>
                        <p className="text-range-date">{job.date}</p>
                      </div>

                      <div className="mt-4">
                        <p>
                          {job.descriptions.general?.map((text, i) => (
                            <span key={i}>
                              {text}
                              {i < job.descriptions.general.length - 1 ? (
                                <br />
                              ) : null}
                            </span>
                          ))}
                        </p>
                      </div>

                      {job.route ? (
                        <Link
                          to={job.route}
                          className="button button--flex mt-4 inline-flex"
                        >
                          {sentences.background.see_more}
                        </Link>
                      ) : null}
                    </div>
                  </TimelineItem>
                );
              })}
            </div>
          </div>

          {/* EDUCATION */}
          <div
            className={
              toggleState === 2
                ? "training__core-data-content training__core-data-content-active"
                : "training__core-data-content"
            }
          >
            <div className="timeline-wrapper">
              {sentences.background.educationItems?.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <TimelineItem
                    key={index}
                    isLeft={isLeft}
                    index={index}
                    refIndex={100 + index}
                    setTimelineRef={setTimelineRef}
                  >
                    <div>
                      <h3 className="training__core-title">{item.carrer}</h3>

                      <div className="company_name">
                        <FaRegBuilding className="font-[1rem]" />
                        <span>{item.place}</span>
                      </div>

                      <div className="company_name">
                        <FaGraduationCap className="font-[1.5rem]" />
                        <span>{item.degree}</span>
                      </div>

                      <div className="md:my-2 my-1 training__core-subtitle">
                        {item.status}
                      </div>

                      <div className="training__core-calendar flex items-center gap-1">
                        <i className="uil uil-calendar-alt"></i>
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </TimelineItem>
                );
              })}
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div
            className={
              toggleState === 3
                ? "training__core-data-content training__core-data-content-active"
                : "training__core-data-content"
            }
          >
            <div className="timeline-wrapper">
              {sentences.background.certificationItems?.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <TimelineItem
                    key={index}
                    isLeft={isLeft}
                    index={index}
                    refIndex={200 + index}
                    setTimelineRef={setTimelineRef}
                  >
                    <div>
                      <h3>{item.course}</h3>

                      <div className="company_name">
                        <FaRegBuilding className="font-[1rem]" />
                        <span>{item.issuedBy}</span>
                      </div>

                      <div className="training__core-calendar flex items-center gap-1">
                        <i className="uil uil-calendar-alt"></i>
                        <span>{item.date}</span>
                      </div>

                      <div className="training__core-calendar flex items-center gap-1">
                        <i className="uil uil-link"></i>
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline cursor-pointer">
                          {sentences.background.certificationLink}
                        </a>
                      </div>
                    </div>
                  </TimelineItem>
                );
              })}
            </div>
          </div>

          {/* SOFT SKILLS */}
          <div
            className={
              toggleState === 4
                ? "training__core-data-content training__core-data-content-active"
                : "training__core-data-content"
            }
          >
            <div className="timeline-wrapper">
              {softSkillsItems?.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <TimelineItem
                    key={index}
                    isLeft={isLeft}
                    index={index}
                    refIndex={300 + index}
                    setTimelineRef={setTimelineRef}
                  >
                    <div>
                      <h3 className="training__core-title flex items-center gap-2">
                        <i className={item.icon}></i>
                        {item.title}
                      </h3>

                      <ul className="pl-5 mt-3 list-disc space-y-1">
                        {item.items.map((skill, i) => (
                          <li key={i}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  </TimelineItem>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
