import "./Skills.css";
import InfoCard from "./InfoCard";
import { SkillsData } from "../../data";

function Skills() {
  return (
    <div className="Skills">
      <div className="Skills__header">
        <img src="/diamond.png" alt="" />
        <h1>Skills</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#808080"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
          />
        </svg>
      </div>
      <div className="Skills__cards">
        {SkillsData.map((skill) => (
          <InfoCard
            img={skill.img}
            title={skill.title}
            description={skill.description}
            link={skill.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
