import React from 'react';
import TopContainer from './components/Top-Container';
import { CreateSkillCards } from './components/Skills/CreateSkillCards';
import { CreateIconsCards } from './components/Footer/CreateIconsCards';
import { MySkills } from './components/Skills';
import { MiddleContainer } from './components/Middle-Container';
import { Contact } from './components/Contact';
import { FootBar } from './components/Footer/IconsCards';
import './Styles/App.css';

function App() {
  return (
    <div className="App">
      <TopContainer />
      <MiddleContainer />
      <MySkills CreateSkillCards={CreateSkillCards} />
      <Contact />
      <FootBar CreateIconsCards={CreateIconsCards} />
    </div>
  );
}

export default App;