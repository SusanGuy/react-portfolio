import React from "react";
import Typewriter from "./Typewriter";
import Scrollchor from "react-scrollchor";

const Hero = () => {
  return (
    <div className="hero-container">
      <Typewriter className="hero-title" text="Susan Subedi" />
      <div className="hero-description">
        Currently studying at The University of Mississippi, I'm looking for
        internships, which would allow me to first refine my technical skills
        and my educational qualities.
        <br />
        Check out my <Scrollchor to="#projects">side-projects</Scrollchor>{" "}
        below.
      </div>
    </div>
  );
};

export default React.memo(Hero);
