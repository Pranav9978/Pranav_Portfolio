import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';
import './HomeSection.css'
import profileImg from "../assets/Profile.png";
function HomeSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h3>Hello, It's Me</h3>
        <h1>Pranav Khegade</h1>
        <h2>
          And I'm a <span className="highlight">Web Developer </span>
        </h2>
        <p style={{ color: 'white' }}>✨ "I’m a Frontend Developer passionate about creating responsive, user-friendly, and modern web applications. I love turning ideas into elegant digital experiences with clean code and design."
        </p>

        <div className="social-links">
          <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=m36865i"><Instagram /></a>
          <a href="https://www.linkedin.com/in/pranav-khegade-684b57348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><Linkedin /></a>
           <a href="https://github.com/Pranav9978" >
            <Github size={28} />
          </a>
        </div>

        <a href="https://drive.google.com/file/d/1vV20NEAECNSh1Fn6tqfXuZYQOujAgsSY/view?usp=drivesdk" className="btn-cv">Download Resume</a>

      </div>

      <div className="hero-img">
        <img src={profileImg} alt="Profile" />
      </div>
    </section>
  );
}

export default HomeSection;
