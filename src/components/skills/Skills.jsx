import "./Skills.css";
import InfoCard from "./InfoCard";

function Skills() {
  return (
    <div className="Skills">
      <div className="Skills__header">
        <img src="./public/yellow-diamond.png" alt="" />
        <h1>Skills and Experience</h1>
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
        <InfoCard
          img="./src/assets/invokerBG.jpg"
          title="Competitive Programming"
          description="Lorem ipsum asdsad sadsad"
          link="https://github.com/kulaizki/Codeforces"
        />
        <InfoCard
          img="./src/assets/invokerBG.jpg"
          title="Competitive Programming"
          description="Lorem ipsum asdsad sadsad"
          link=""
        />
        <InfoCard
          img="./src/assets/invokerBG.jpg"
          title="Competitive Programming"
          description="Lorem ipsum asdsad sadsad"
          link=""
        />
        <InfoCard
          img="./src/assets/invokerBG.jpg"
          title="Competitive Programming"
          description="Lorem ipsum asdsad sadsad"
          link=""
        />
      </div>
    </div>
  );
}

export default Skills;
