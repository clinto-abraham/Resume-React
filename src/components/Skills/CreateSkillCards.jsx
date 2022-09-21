import { SkillCards } from './Skill-Cards';
export function CreateSkillCards(element) {
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
  );
}
