import React from "react";
import { MySkills } from "../Components/Skills";
import { MiddleContainer } from "../Components/Mid-Container";
import { Contact } from "../Components/Contact";
import TopContainer from "../Components/Top-Container";
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
