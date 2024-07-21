import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Analytics from "./Analytics";
import Cards from "./Cards";
import Front from "./Front";
import Newsletter from "./Newsletter";
import WebDevelopmentRoadmap from "./Roadmap/WebDevelopmentRoadmap";
import MachineLearningRoadmap from "./Roadmap/MachineLearningRoadmap";
import AppDevelopment from "./Roadmap/AppDevelopment";
function HomePage() {
  return (
    
  <>
        <Front />
        <Analytics />
        <Routes>
          <Route exact path="/" element={<Cards />} />
          <Route path="/webdevelopment" element={<WebDevelopmentRoadmap />} />
          <Route path="/machinelearning" element={<MachineLearningRoadmap />} />
          <Route path="/appdevelopment" element={<AppDevelopment />} />
          <Route path="/cards" component={<Cards />} />   
        </Routes>
        <Newsletter />
       
        </>
  );
}

export default HomePage;
