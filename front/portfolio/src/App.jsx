import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLanguage } from "./components/Language/Language";
import MouseDistortion from "./components/MouseDistortion/MouseDistortion";
import "./App.css";

/*______________
|   LANDING   */
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Background from "./components/Background/Background";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";

/*__________________
|   JOB DETAILS   */
import JobDetails from "./components/Background/components/JobDetails";

import {
  sliderInteligenio,
  sliderIbc,
  sliderInlearning,
  sliderNeoris,
  sliderFreelance
} from "./assets/work-images/images";

export default function App() {
  const { sentences } = useLanguage();

  const experienceItems = [
    {
      id: "Freelance in UAE",
      path: "/experience/freelance",
      slider: {
        slides: sliderFreelance,
        type: "desktop"
      },
      sentences: sentences.background.work_experience_items[0]?.descriptions.details,
    },
    {
      id: "Epam-Neoris",
      path: "/experience/epam-neoris",
      slider: {
        slides: sliderNeoris,
        type: "mobile"
      },
      sentences:
        sentences.background.work_experience_items[1]?.descriptions.details,
    },
    {
      id: "Inlearning",
      path: "/experience/inlearning",
      slider: {
        slides: sliderInlearning,
        type: "desktop"
      }, 
      sentences:
        sentences.background.work_experience_items[2]?.descriptions.details,
    },
    {
      id: "Dazlabs",
      path: "/experience/dazlabs",
      slider: {
        slides: []
      },
    },
    {
      id: "Inteligenio",
      path: "/experience/inteligenio",
      slider: {
        slides: sliderInteligenio,
        type: "desktop"
      },
      sentences:
      sentences.background.work_experience_items[5]?.descriptions.details,
    },
    {
      id: "Ibc-institute",
      path: "/experience/ibc-institute",
      slider: { 
        slides: sliderIbc,
        type: "desktop" 
      },
      sentences:
        sentences.background.work_experience_items[4]?.descriptions.details,
    },
  ];

  return (
    <Router>
      <MouseDistortion />
      <div>
        <Header />
        <main className="main" data-cursor="hover">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Background />
                  <Projects />
                  <Technologies />
                </>
              }
            />

            {experienceItems?.map((item, index) => {
              return (
                <Route
                  key={index}
                  path={item.path}
                  element={
                    <JobDetails
                      title={item.id}
                      slides={item.slider?.slides}
                      typeSlider={item.slider?.type}
                      descriptions={item.sentences}
                    />
                  }
                />
              );
            })}
          </Routes>
        </main>
      </div>
    </Router>
  );
};