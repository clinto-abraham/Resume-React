import React from 'react';
import './App.css';
import TopContainer from './components/Top-Container';
import { MiddleContainer }  from './components/Middle-Container';
import { SkillCards } from './components/Skill-Cards';
import { elements } from './Elements';
import { icons } from './Icons';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function createSkillCards(element) {
  return (
    <SkillCards
      key={element.id}
      a={element.divClass}
      b={element.image.class}
      c={element.image.src}
      d={element.image.altName}
      skill={element.skillName}
      description={element.skillDescription}
    />
  )
}

function createIconsCards(icon) {
  return (
    <Footer
          key={icon.id}
          x1={icon.anchor.class}
          x2={icon.anchor.href}
          i1={icon.i.src}
          i2={icon.i.alt}
          a={icon.anchorName}
          cssID={icon.cssID}
        />
  )
}

function App() {
  return (
    <div className="App">
        <TopContainer />
        <MiddleContainer />

        <div className="skills">
            <h2>My Skills.</h2>
            {elements.map(createSkillCards)}
            <br/>
            <hr/>
        </div>

        <Contact />
        {icons.map(createIconsCards)}
        <p className="copyright">Copyright © The Top Of Cliff Developers - All Rights Reserved.</p>
        <p className="copyright">© 2020 - {new Date().getFullYear()} Clinto Ayamkudiyil.</p>
    </div>
  );
}

export default App;
