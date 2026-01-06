import "./AboutSection.css";
import profileImg from "../assets/Profile.png";
import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={profileImg} alt="Profile" />
      </div>

      <div className="about-content">
        <h2>
          About <span>Me</span>
        </h2>
        <h3>Web Developer!</h3>
        <p>
          Hi, I’m <b>Pranav Khegade</b>, a passionate Web Developer with a
          strong focus on building responsive, user-friendly, and efficient
          applications. I enjoy turning ideas into reality through clean code,
          modern design, and innovative solutions. I work with technologies like
          React, JavaScript, Spring Boot, Java, and MySQL, and I love learning
          new tools that help me grow as a developer. Whether it’s front-end
          design or back-end logic, I enjoy solving problems and creating
          projects that make an impact.
        </p>
          <Link to="/ReadMore" className="btn-about">
          Read More
        </Link>
      </div>
    </section>
  );
}

export default AboutSection;
