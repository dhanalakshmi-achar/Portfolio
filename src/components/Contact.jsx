// Contact.jsx
import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"; // install react-icons if not already
import "../Contact.css";
 import connect from "../images/connect.png"; 
const Contact = () => {
  return (
    <section className="page contact">
      

      <h1 style={{  color: "#000000"}}>Contact</h1>
      <p>Let’s connect!</p>
      <ul className="contact-list">
       
        <li>
          <FaGithub className="icon" />
          <a href="https://github.com/dhanalakshmi-achar" target="_blank" rel="noopener noreferrer">
            github.com/dhanalakshmi
          </a>
        </li>
        <li>
          <FaLinkedin className="icon" />
          <a href="https://www.linkedin.com/in/dhanalakshmi-achar-473763365?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/dhanalakshmi
          </a>
        </li>
      </ul>
      <section className="page contact">
  <img src={connect} 
    alt="Contact Banner" 
    className="contact-img" 
  />
  
</section>
    </section>
    
  );
};

export default Contact;


// import React from "react";

// const Contact = () => {
//   return (
//     // Contact.jsx
// <section className="page contact">
//       <h2>Contact</h2>
//       <p>Email: akshara@example.com</p>
//       <p>GitHub: github.com/akshara</p>
//       <p>LinkedIn: linkedin.com/in/akshara</p>
//     </section>
//   );
// };

// export default Contact;
