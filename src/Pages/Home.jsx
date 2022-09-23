import React from "react";
import { MySkills } from "../Components/Skills";
import MiddleContainer from "../Components/Mid_Container";
import { Contact } from "../Components/Contact";
import TopContainer from "../Components/Top_Container";
import { CreateSkillCards } from "../Components/Skills/CreateSkillCards";


export function Home() {
  return (
    <div className="App">
      <TopContainer />
      <MiddleContainer />
      <MySkills CreateSkillCards={CreateSkillCards} />
      <Contact />
    </div>
  );
}
