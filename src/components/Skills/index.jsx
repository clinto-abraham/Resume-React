import React from "react";
import { elements } from '../../Utils/Elements';

export function MySkills({ CreateSkillCards }) {
  return <div className="skills">
    <h4>My Skills.</h4>
    {elements.map(CreateSkillCards)}
    <br />
    <hr />
  </div>;
}
