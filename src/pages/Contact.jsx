import "../styles/contact.css"; 
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => (
  <section className="contact-container">
    <div className="contact-card">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-info">
        <FaEnvelope className="contact-icon" />
        <span>Email: </span>  
        <a className="contact-link" href="mailto:mahimulislam@gmail.com">
          mahimulislam@gmail.com
        </a>
      </div>

      <div className="contact-info">
        <FaPhone className="contact-icon" />
        <span>Phone: </span>  
        <a className="contact-link" href="tel:+14709098452">
          470-909-8452
        </a>
      </div>

      <div className="contact-info">
        <FaLinkedin className="contact-icon" />
        <span>LinkedIn: </span>  
        <a className="contact-link" href="https://linkedin.com/in/mahimulislam" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/mahimulislam
        </a>
      </div>

      <div className="contact-info">
        <FaGithub className="contact-icon" />
        <span>GitHub: </span>  
        <a className="contact-link" href="https://github.com/mahimulislam" target="_blank" rel="noopener noreferrer">
          github.com/mahimulislam
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
