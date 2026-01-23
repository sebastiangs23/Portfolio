import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/*______________
|   LANDING   */
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Desarrollo from "./components/Desarrollo/Desarrollo";
import Proyectos from "./components/Proyectos/Proyectos";
import Tecnologies from "./components/Tecnologies/Tecnologies";

/*__________________
|   JOB DETAILS   */
import JobDetailsInte from "./components/Desarrollo/components/JobDetailsInte";
import JobDetailsIbc from "./components/Desarrollo/components/JobDetailsIbc";
import JobDetailsDazlabs from "./components/Desarrollo/components/JobDetailsDazlabs";
import JobDetailsInlearning from "./components/Desarrollo/components/JobDetailsInlearning";
import JobDetailsEpamNeoris from "./components/Desarrollo/components/JobDetailsNeoris";

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
                  <Desarrollo />
                  <Proyectos />
                  <Tecnologies />
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
