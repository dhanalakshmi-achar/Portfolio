// Hero.jsx
import React from "react";
import myImage from "../images/Dhanalakshmi1.jpeg"; 
import girlImage from "../images/coder.png"; 
import Timeline from "../components/Timeline.jsx";
 
import { useNavigate } from "react-router-dom";
import {
  FaLightbulb,
  FaCamera,
  FaLaptopCode,
  FaBook,
  FaBriefcase,
  FaRocket,
  FaFolder
} from "react-icons/fa";
import "../Hero.css";

const Hero = () => { 
  const navigate = useNavigate();
  return (
    <>
    <header className="hero">
      <section className="page home">
        <div className="hero-content">
          {/* Your Image */}
          <div className="hero-image-container">
            <img
              src={myImage} // replace with your actual image path
              alt="Dhanalakshmi"
              className="hero-image"
            />
            <img src={girlImage} alt="Girl" className="floating-icon icon6" />
{/* <img src={myImage} alt="Girl" className="floating-icon icon7" /> */}
            {/* Floating Icons */}
  <FaLightbulb className="floating-icon icon1" />
            <FaCamera className="floating-icon icon2" />
            <FaLaptopCode className="floating-icon icon3" />
            <FaBook className="floating-icon icon4" />
            <FaBriefcase className="floating-icon icon5" /> 
         
                 <FaFolder className="floating-icon icon9" /> 
                   <FaFolder className="floating-icon icon10" /> 
                    <FaLightbulb className="floating-icon icon11" /> 
                    <FaLaptopCode className="floating-icon icon13" />
                    <FaLaptopCode className="floating-icon icon14" />
                     <FaLightbulb className="floating-icon icon12" /> 
          </div>
          

          {/* Text + CTA */}
          <div className="hero-text">
            <h1 className="hero-title">Dhanalakshmi.Achar</h1>
            <p className="hero-tagline">
              Cloud Computing & Big Data | React Developer
            </p>
            <button className="btn primary" onClick={() => navigate("/Resume")}>Download Resume</button>
            <button className="btn secondary" onClick={() => navigate("/Projects")}>View Projects</button>
           
          </div>
          
        </div>
         <div className="img">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
         <h1 style={{textAlign: "left", color: "black" }}>About Me</h1>
            
            <p style={{ textAlign: "left", color: "#000000"}}>Passionate about building aesthetic<br/> web apps with React & Supabase.</p>
   <p style={{ textAlign: "left", color: "#000000"}}> Exploring cloud computing, UI/UX design,<br/> and creating beauty-tech products.</p>
    <Timeline/>
    </div>
      </section>

    </header>
     <br/>

</>
  );

};

export default Hero;


// // Hero.jsx
// import React from "react";
// import { FaLightbulb, FaCamera, FaLaptopCode, FaBook, FaBriefcase, FaRocket } from "react-icons/fa";
 

// const Hero = () => {
//   return (
    
//     <header className="hero">
//         <section className="page home"> 
//       <h1>Akshara</h1>
//       <p>Welcome to my portfolio!</p>
//       <div className="icons">
//         <FaLightbulb className="icon" />
//         <FaCamera className="icon" />
//         <FaLaptopCode className="icon" />
//         <FaBook className="icon" />
//         <FaBriefcase className="icon" />
//         <FaRocket className="icon" />
//       </div>
// </section>
//     </header>
//   );
// };

// export default Hero;
