import React from 'react';
import { Routes, Route } from "react-router-dom";
import TopNavbar from "./Components/TopNavbar";
import { Home } from './Pages/Home';
import HireMe from './Pages/HireMe';
import WebsiteRequirement from './Pages/WebsiteRequirement';

import './sass/main.scss';
import Scrollbar from './Components/Scrollbar';

function App() {
  return (
    <>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hire-me" element={<HireMe />} />
        <Route path="/website-requirement" element={<WebsiteRequirement />} />
      </Routes>
      <Scrollbar />
    </>

  );
}

export default App;