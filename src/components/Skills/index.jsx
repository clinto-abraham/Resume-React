import React from "react";
import { elements } from '../../Utils/Elements';

export function MySkills({ CreateSkillCards }) {
  return <div className="skills">
    <h2>My Skills.</h2>
    {elements.map(CreateSkillCards)}
    <br />
    <hr />
  </div>;
}
