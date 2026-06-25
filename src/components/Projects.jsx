import React from "react";
import "../Project.css"; // make sure to link the CSS
   import { FaPaintBrush, FaLaptopCode, FaMusic, FaPenNib } from "react-icons/fa";
const Projects = () => {
  return (


<section className="page projects">
  <h2 style={{  color: "#1e1e1e"}}>Projects</h2>
  <div className="project-list">
    <div className="project-card">
      <FaPaintBrush className="project-icon" />
      <h3>Strands Pitch Deck</h3>
      <p>Luxury haircare pitch deck and video presentation.</p>
    </div>

    <div className="project-card">
      <FaLaptopCode className="project-icon" />
      <h3>Dream Makeup Website</h3>
      <p>React + Supabase CRUD functionality with pink aesthetic branding.</p>
    </div>

    <div className="project-card">
      <FaMusic className="project-icon" />
      <h3>Musofy</h3>
      <p>Music app with latest updates on favorite singers and artists.</p>
    </div>

    <div className="project-card">
      <FaPenNib className="project-icon" />
      <h3>Blog Website</h3>
      <p>Blogs on latest news and tech information.</p>
    </div>
  </div>
</section>


  );
};

export default Projects;


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
