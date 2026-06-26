import React from "react";
import "../Project.css";
import i1 from "../images/i1.png";
import i2 from "../images/i2.png";
import Category from "../images/Category.jpg";
import i4 from "../images/i4.png";
import i3 from "../images/i3.png";
import i5 from "../images/i5.png"; 
import i7 from "../images/i7.png";
import i8 from "../images/i8.png";
export default function Projects() {
  return (
    <section className="page projects">
      
      <h1 style={{color:"#ae78ff"}}className="section-title">Top Projects</h1>
      <br/>
<br/>
      <div className="project-list">

       {/* Strands Pitch Deck */}
        <div className="project-card">
           <img   src={i7} alt="img" className="about-image" />
       
          <div className="project-details">
            <h3>Strands Pitch Deck                                                                                                                          (React)</h3>
            <p>Luxury haircare pitch deck and video presentation.</p>
          </div>
        </div>

        {/* Dream Makeup Website */}
        <div className="project-card">
          <img   src={Category} alt="img" className="abou-image" />
          <div className="project-details">
            <h3>Dream Makeup Website (React + Supabase)</h3>
            <p>CRUD functionality with pink aesthetic branding.</p>
          </div>
        </div>
    
   {/* Musofy */}
        <div className="project-card">
          <img   src={i8} alt="img" className="abot-image" /> 
          <div className="project-details">
            <h3>Musofy (HTML)</h3>
            <p>Music app with latest updates on favorite singers and artists.</p>
          </div>
        </div>
         

        {/* Buffer Makeup + Skincare */}
        <div className="project-card">
          <img   src={i1} alt="img" className="abut-image" /> 
          <div className="project-details">
            <h3>Buffer Makeup + Skincare Webpage</h3>
            <p>Aesthetic Figma design showcasing skincare products.</p>
          </div>
        </div>
 
        {/* Fitness App */}
        <div className="project-card">
          <img   src={i5} alt="img" className="aout-image" /> 
          <div className="project-details">
            <h3>Fitness App</h3>
            <p>Modern Figma UI for workouts and health tracking.</p>
          </div>
        </div>
 
        {/* Educational Website */}
        <div className="project-card">
          <img   src={i2} alt="img" className="bout-image" /> 
          <div className="project-details">
            <h3>Educational Website</h3>
            <p>Structured learning platform designed in Figma.</p>
          </div>
        </div>
 
        {/* Food Delivery App */}
        <div className="project-card">
          <img   src={i4} alt="img" className="abo-image" /> 
          <div className="project-details">
            <h3>Food Delivery App</h3>
            <p>Sleek ordering flow with cart and checkout.</p>
          </div>
        </div>
 
        {/* Instagram Layout */}
        <div className="project-card">
           <img   src={i3} alt="img" className="aut-image" /> 
          <div className="project-details">
            <h3>Car Game</h3>
            <p>Car game in Figma.</p>
          </div>
        </div>
 
      </div>
    </section>
  );
}



// import React from "react";

// const Projects = () => {
//   return (
    
//     <section className="page projects">
//       <h2>Projects</h2>
      
//       <div className="project-list">
//         <div className="project-card">
//           <h3>Dream Makeup Website</h3>
//           <p>React + Supabase CRUD functionality with pink aesthetic branding.</p>
//         </div>
//         <div className="project-card">
//           <h3>Strands Pitch Deck</h3>
//           <p>Luxury haircare pitch deck and video presentation.</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
