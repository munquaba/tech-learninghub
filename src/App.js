import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import WebDevelopmentRoadmap from "./components/Roadmap/WebDevelopmentRoadmap";
import MachineLearningRoadmap from "./components/Roadmap/MachineLearningRoadmap";
import AppRoadmapDevelopment from "./components/Roadmap/AppDevelopment";
import Navbar from "./components/Navbar";
import Contact from "./additional/Contact";
import Article from "./additional/Articles";
import Login from "./additional/Login";
import SignUp from "./additional/SignUp";
import Cards from "./components/Cards";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Route for the Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Routes for Individual Roadmap Pages */}

        <Route path="/contact" element={<Contact />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/webdevelopment" element={<WebDevelopmentRoadmap />} />
        <Route path="/machinelearning" element={<MachineLearningRoadmap />} />
        <Route path="/appdevelopment" element={<AppRoadmapDevelopment />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </Router>
  );
};

export default App;
