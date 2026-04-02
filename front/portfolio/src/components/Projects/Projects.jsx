import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageSlider } from "./ImageSlider";
import {
  SliderData,
  SliderManga,
  SliderChatTutor,
} from "../../assets/project-images/images";
import phone from "../../assets/projects/phone.svg";
import web from "../../assets/projects/web.svg";
import { useLanguage } from "../Language/Language";

export default function Projects() {
  const { sentences } = useLanguage();
  const [type, setType] = useState("web");

  const projects = useMemo(() => {
    return type === "web"
      ? [
          {
            id: 1,
            title: "Trust Exchange",
            description:
              "A modern web experience focused on clarity, usability, and strong visual presentation.",
            slides: SliderData,
            type: "web",
          },
          {
            id: 2,
            title: "E-commerce",
            description:
              "Responsive product browsing flow with a polished layout and cleaner shopping experience.",
            slides: SliderManga,
            type: "web",
          },
        ]
      : [
          {
            id: 3,
            title: "Chat Tutor English AI - Mammoth",
            description:
              "Mobile-first AI tutor interface designed for a simple, friendly, and immersive experience.",
            slides: SliderChatTutor,
            type: "phone",
          },
        ];
  }, [type]);

  return (
    <section
      id="projects"
      className="w-full px-4 py-16 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {sentences?._projects || "Projects"}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70 sm:text-base">
            A selection of web and mobile work with a smoother and more modern
            browsing experience.
          </p>
        </div>

        {/* Toggle */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 p-2 shadow-lg backdrop-blur-md">
            <span
              className={`hidden text-sm font-medium sm:block ${
                type === "web" ? "text-white" : "text-white/45"
              }`}
            >
              WEB
            </span>

            <button
              onClick={() => setType((prev) => (prev === "web" ? "phone" : "web"))}
              className="relative flex h-14 w-[120px] items-center rounded-full bg-white/10 p-1 transition focus:outline-none focus:ring-2 focus:ring-white/60"
              aria-label="Toggle project type"
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`absolute top-1 h-12 w-[56px] rounded-full bg-white shadow-md ${
                  type === "web" ? "left-1" : "left-[60px]"
                }`}
              />

              <div className="relative z-10 flex w-full items-center justify-between px-3">
                <img
                  src={web}
                  alt="web"
                  className={`h-6 w-6 transition ${
                    type === "web" ? "opacity-100" : "opacity-45"
                  }`}
                />
                <img
                  src={phone}
                  alt="phone"
                  className={`h-6 w-6 transition ${
                    type === "phone" ? "opacity-100" : "opacity-45"
                  }`}
                />
              </div>
            </button>

            <span
              className={`hidden text-sm font-medium sm:block ${
                type === "phone" ? "text-white" : "text-white/45"
              }`}
            >
              MOBILE
            </span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={type}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35 }}
            className={`grid gap-8 ${
              type === "web" ? "grid-cols-1 xl:grid-cols-2" : "grid-cols-1"
            }`}
          >
            {projects.map((project) => (
              <article
                key={project.id}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:p-6"
              >
                <div className="mb-5">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold sm:text-2xl">
                      {project.title}
                    </h3>

                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white/75">
                      {project.type === "web" ? "Web" : "Mobile"}
                    </span>
                  </div>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-black/70 sm:text-base">
                    {project.description}
                  </p>
                </div>

                <ImageSlider
                  slides={project.slides}
                  type={project.type}
                  autoPlay
                  interval={3500}
                  title={project.title}
                />
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}