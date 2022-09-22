import React from "react";
import { MySkills } from "../Components/Skills";
import { MiddleContainer } from "../Components/Middle-Container";
import { Contact } from "../Components/Contact";
import { FootBar } from "../Components/Footer/IconsCards";
import TopContainer from "../Components/Top-Container";
import { CreateSkillCards } from "../Components/Skills/CreateSkillCards";
import { CreateIconsCards } from "../Components/Footer/CreateIconsCards";


export function Home() {
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
