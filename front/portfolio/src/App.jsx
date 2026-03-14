import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLanguage } from "./components/Language/Language";
import MouseDistortion from "./components/MouseDistortion/MouseDistortion";

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

import "./App.css";

import {
  sliderInteligenio,
  sliderIbc,
  sliderInlearning,
  sliderNeoris,
} from "./assets/work-images/images";

function App() {
  const { sentences } = useLanguage();

  const experienceItems = [
    {
      id: "epam-neoris",
      path: "/experience/epam-neoris",
      slider: sliderNeoris,
      sentences:
        sentences.background.work_experience_items[0]?.descriptions.details,
      typeImage: "screenshot",
    },
    {
      id: "inlearning",
      path: "/experience/inlearning",
      slider: sliderInlearning,
      sentences:
        sentences.background.work_experience_items[1]?.descriptions.details,
      typeImage: "web",
    },
    {
      id: "inteligenio",
      path: "/experience/inteligenio",
      slider: sliderInteligenio,
      sentences:
        sentences.background.work_experience_items[4]?.descriptions.details,
      typeImage: "web",
    },
    {
      id: "ibc-institute",
      path: "/experience/ibc-institute",
      slider: sliderIbc,
      sentences:
        sentences.background.work_experience_items[3]?.descriptions.details,
      typeImage: "web",
    },
    {
      id: "dazlabs",
      path: "/experience/dazlabs",
      slider: [],
      typeImage: "web",
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
                      slides={item.slider}
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
}

export default App;
