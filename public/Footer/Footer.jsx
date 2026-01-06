import React from "react";
import "./Footer.css";
import { Facebook, Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import mylogo from "../Footer/logo.png"

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-left">
        <img 
          src={mylogo}
          alt="brand-logo" 
          className="brand-logo"
        />
        <h2 className="brand-name">Mr. Pranav Khegade</h2>
      </div>

    
      <div className="footer-right">
       
        <div className="social-links">
         
          <a href="https://www.linkedin.com/in/pranav-khegade-684b57348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
            <Linkedin />
          </a>
        <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=m36865i" target="_blank" rel="noreferrer">
            <Instagram/>
          </a>
          <a href="https://github.com/Pranav9978" target="_blank" rel="noreferrer">
            <Github size={32} />
          </a>
          
        </div>
        <div className="contact-info">
          <p>
            <Mail />: khegadepranav@gmail.com
          </p>
          <p className="phone-number"> 
            <Phone />: +91 90214 46842
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
