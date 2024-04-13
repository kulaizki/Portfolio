import "./Skills.css";
import InfoCard from "./InfoCard";

function Skills() {
  return (
    <div className="Skills">
      <div className="Skills__header">
        <img src="/yellow-diamond.png" alt="" />
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
          img="/Portfolio/src/assets/izk-landing-page.png"
          title="Web Development"
          description="I have extensive experience in front-end web development, specializing in creating engaging user interfaces. With a keen eye for design, I take pleasure in crafting visually appealing experiences for users."
          link="https://github.com/kulaizki?tab=repositories"
        />
        <InfoCard
          img="src/assets/harmonic-chart.png"
          title="Trading / Investments"
          description="As an enthusiastic and determined learner, I dedicate myself to studying and actively practicing trading and investments, nurturing my profound interest in the dynamic and ever-evolving finance industry."
          link="https://www.tradingview.com/u/kulaizkii/"
        />
        <InfoCard
          img="src/assets/encrusted-lock.png"
          title="Competitive Programming"
          description="I have a passion for problem-solving, which led me to pursue competitive programming as a hobby. I'm proud to share that I recently achieved a significant milestone by qualifying for the UP-ACM Algolympics 2023 Finals."
          link="https://github.com/kulaizki/Codeforces"
        />
        <InfoCard
          img="src/assets/c-programming.png"
          title="C programming"
          description="Given the widespread prevalence of the C programming language at my university, I naturally developed a keen interest in it and have gained substantial expertise through extensive hands-on experience."
          link="https://github.com/kulaizki/BSCS2"
        />
      </div>
    </div>
  );
}

export default Skills;
