import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/*______________
|   LANDING   */
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Background from "./components/Background/Background";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";

/*__________________
|   JOB DETAILS   */
import JobDetailsInte from "./components/Background/components/JobDetailsInte";
import JobDetailsIbc from "./components/Background/components/JobDetailsIbc";
import JobDetailsDazlabs from "./components/Background/components/JobDetailsDazlabs";
import JobDetailsInlearning from "./components/Background/components/JobDetailsInlearning";
import JobDetailsEpamNeoris from "./components/Background/components/JobDetailsNeoris";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main className="main">
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
            <Route path="/experience/inteligenio" element={<JobDetailsInte />} />
            <Route path="/experience/ibc-institute" element={<JobDetailsIbc />} />
            <Route path="/experience/dazlabs" element={<JobDetailsDazlabs/> } />
            <Route path="/experience/inlearning" element={<JobDetailsInlearning/> } />
            <Route path="/experience/epam-neoris" element={<JobDetailsEpamNeoris/> } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
