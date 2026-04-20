import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../Language/Language";
import { FaLaptopCode, FaRegBuilding } from "react-icons/fa";
import "./Background.css";

export default function Background() {
  const [toggleState, setToggleState] = useState(1);
  const { sentences } = useLanguage();
  const timelineRefs = useRef([]);

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

  const TimelineItem = ({
    children,
    isLeft,
    index,
    refIndex,
    showEmptyRight = true,
  }) => {
    return (
      <div
        ref={(el) => setTimelineRef(el, refIndex)}
        className="training__core-data-content-each timeline-item"
        style={{ transitionDelay: `${index * 120}ms` }}
      >
        {isLeft ? (
          <div className="timeline-card">{children}</div>
        ) : (
          <div className="timeline-spacer" aria-hidden="true"></div>
        )}

        <div className="timeline-center">
          <span className="training__timeline-rounder"></span>
        </div>

        {!isLeft ? (
          <div className="timeline-card">{children}</div>
        ) : showEmptyRight ? (
          <div className="timeline-spacer" aria-hidden="true"></div>
        ) : null}
      </div>
    );
  };

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
                  >
                    <div>
                      <h3 className="training__core-title">{job.position}</h3>

                      <div className="company_name">
                        <FaRegBuilding className="icon_office" />
                        <p className="text-job">{job.company}</p>
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
              {[
                {
                  title: sentences.background.carrer_henry,
                  place: sentences.background.carrer_place_henry,
                  status: sentences.background.carrer_status_henry,
                  date: sentences.background.carrer_date_henry,
                },
                {
                  title: sentences.background.carrer_zegel,
                  place: sentences.background.carrer_place_zegel,
                  status: sentences.background.carrer_status_zegel,
                  date: sentences.background.carrer_date_zegel,
                },
                {
                  title: sentences.background.carrer_upc,
                  place: sentences.background.carrer_place_upc,
                  status: sentences.background.carrer_status_upc,
                  date: sentences.background.carrer_date_upc,
                },
              ].map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <TimelineItem
                    key={index}
                    isLeft={isLeft}
                    index={index}
                    refIndex={100 + index}
                  >
                    <div>
                      <h3 className="training__core-title">{item.title}</h3>

                      <div className="company_name">
                        <FaRegBuilding className="icon_office" />
                        <span className="text-job">{item.place}</span>
                      </div>

                      <div className="mt-4 training__core-subtitle">
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

          {/* SOFT SKILLS */}
          <div
            className={
              toggleState === 3
                ? "training__core-data-content training__core-data-content-active"
                : "training__core-data-content"
            }
          >
            <div className="timeline-wrapper">
              {[
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
              ].map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <TimelineItem
                    key={index}
                    isLeft={isLeft}
                    index={index}
                    refIndex={200 + index}
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
