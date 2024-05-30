import "./Experience.css";
import InfoCard from "./InfoCard";
import { ExperienceData } from "../../data";

function Experience() {
  return (
    <div className="Experience">
      <div className="Experience__header">
        <img src="./diamond.png" alt="" />
        <h1>Experience</h1>
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
      <div className="Experience__cards">
        {ExperienceData.map((experience) => (
          <InfoCard
            img={experience.img}
            title={experience.title}
            description={experience.description}
            link={experience.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
