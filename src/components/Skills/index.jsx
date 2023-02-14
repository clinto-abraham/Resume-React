
import { elements } from '../../Utils/Elements';

const SkillCards = (props) => (
    <div className={props.a}>
        <img className={props.b} src={props.c} alt={props.d} />
        <h3>{props.skill}</h3>
        <p>{props.description} </p>
    </div>
);

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

export function MySkills({ CreateSkillCards }) {
    return <div className="skills">
        <h2>My Skills.</h2>
        {elements.map(CreateSkillCards)}
        <br />
        <hr />
    </div>;
}
