import React from 'react';
import './App.css';
import TopContainer from './components/Top-Container';
import { MiddleContainer }  from './components/Middle-Container';
import { SkillCards } from './components/Skill-Cards';
import { elements } from './Elements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';


function App() {
  return (
    <div className="App">   
        <TopContainer />
        <MiddleContainer />

        <div className="skills">
            <h2>My Skills.</h2>
            <SkillCards
              a={elements[0].divClass}
              b={elements[0].image.class}
              c={elements[0].image.src}
              d={elements[0].image.altName}
              skill={elements[0].skillName}
              description={elements[0].skillDescription}
            />

            <SkillCards
              a={elements[1].divClass}
              b={elements[1].image.class}
              c={elements[1].image.src}
              d={elements[1].image.altName}
              skill={elements[1].skillName}
              description={elements[1].skillDescription}
            />

            <SkillCards
              a={elements[2].divClass}
              b={elements[2].image.class}
              c={elements[2].image.src}
              d={elements[2].image.altName}
              skill={elements[2].skillName}
              description={elements[2].skillDescription}
            />

            <SkillCards
              a={elements[3].divClass}
              b={elements[3].image.class}
              c={elements[3].image.src}
              d={elements[3].image.altName}
              skill={elements[3].skillName}
              description={elements[3].skillDescription}
            />
            <br/>
            <hr/>    
        </div>

        <Contact />
        <Footer
          x1={elements[4].anchor.class}
          x2={elements[4].anchor.href}
          i1={elements[4].image.src}
          i2={elements[4].image.alt}
          a={elements[4].anchorName}
        />
        <Footer
          x1={elements[5].anchor.class}
          x2={elements[5].anchor.href}
          i1={elements[5].image.src}
          i2={elements[5].image.alt}
          a={elements[5].anchorName}
        />
        <Footer
          x1={elements[6].anchor.class}
          x2={elements[6].anchor.href}
          i1={elements[6].image.src}
          i2={elements[6].image.alt}
          a={elements[6].anchorName}
        />
        <p className="copyright">Copyright © The Top Of Cliff Developers - All Rights Reserved.</p>
        <p className="copyright">© 2020 - {new Date().getFullYear()} Clinto Ayamkudiyil.</p>
    </div>
  );
}

export default App;
