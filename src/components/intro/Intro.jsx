import "./Intro.css";

function Intro() {
  return (
    <div className="Intro">
      <div className="Intro__text">
        <h2>
          <span className="Intro__underline__animation__1">Hello World!</span>
        </h2>
        <h1>
          I am{" "}
          <span className="Intro__underline__animation__2">Fitz Angelo</span>
        </h1>
        <p>
          A curious and enthusiastic student who aspires to become a{" "}
          <span className="Intro__underline__animation__3">
            software engineer
          </span>
          .
        </p>
      </div>
      <div className="Intro__img">
        <img src="./fitz-speaker.jpg" alt="" />
      </div>
    </div>
  );
}

export default Intro;
