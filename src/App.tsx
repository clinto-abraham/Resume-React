import React from 'react';
import { Routes, Route } from "react-router-dom";
import TopNavbar from "./Components/Top_Navbar/index";
import { Home } from './Pages/Home';
import HireMe from './Pages/HireMe';
import WebsiteRequirement from './Pages/WebsiteRequirement';
import Scrollbar from './Components/Scroll_bar/index';
import Footer from './Components/Footer/index';
import Project from './Pages/Project';
import './sass/main.scss';

function App() {
  return (
    <>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hire-me" element={<HireMe />} />
        <Route path="/website-requirement" element={<WebsiteRequirement />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
      <Scrollbar />
      <Footer />
    </>

  );
}

export default App;