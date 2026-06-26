// About.jsx
import React from "react";
import "../About.css";
import myImage from "../images/da.jpeg"; 
import eduImage from "../images/coder.png"; 
import workImage from "../images/coder.png"; 
import projectImage from "../images/coder.png"; 

const About = () => {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Supabase", level: 60 },
  ];


  return (
    <section className="page about">
      <h2>About Me</h2>
      <div className="about-intro">
        <img   src={myImage} alt="img" className="about-image" />
        <p>
          Hi, I’m <strong>Dhanalakshmi</strong> — a Cloud Computing & Big Data student,
          passionate about blending technology with beauty and luxury branding.
          I love creating aesthetic UI designs that feel futuristic yet warm.
        </p>
      </div>

      {/* Highlight Cards */}
      <div className="card-grid">
        <div className="about-card">
          <img src={eduImage} alt="Education" className="card-img" />
          <h3> Education</h3>
          <p>Diploma in Cloud Computing & Big Data — <br/>focused on React, Supabase, and Big Data solutions.</p>
        </div>

        <div className="about-card">
          <img src={workImage} alt="Work Experience" className="card-img" />
          <h3> Work Experience</h3>
          <p>Internship at Elite Forums — worked on web development and aesthetic branding projects.</p>
        </div>

        <div className="about-card">
          <img src={projectImage} alt="Projects" className="card-img" />
          <h3> Projects</h3>
          <p>Dream Makeup Website (CRUD + Supabase) <hr/>Strands Pitch Deck for luxury haircare branding.</p>
        </div>
       
      
        <div className="about-card">
          <img src={projectImage} alt="Projects" className="card-img" />
          <h3> Skills</h3>
          <p>React <br/>Supabase<br/> UI/UX Design<br/> Cloud Computing <br/> Content Creation </p>
        </div>
       </div>

      {/* Text Sections */}
    

      <div className="about-section">
        <h2> Achievements</h2>
        <p>AWS Cloud Practitioner<br/>EY AI Skills Passport<br/>15+ Figma projects.</p>
      </div>

      
      
 

     

      {/* Skills Section */}
      <section className="skills">
        <h2>Languages I Know</h2>
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="bar">
              <div
                className="progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
        
    </section>
    
      </section>

      

   
  );
};


export default About;



// import React from "react";
// import "../About.css";
// import myImage from "../images/da.jpeg"; 
// const About = () => {
//   return (
//     <section className="page about">
//       <h2>About Me</h2>
//       <p> 
//         Hi, I’m Dhanalakshmi — a Cloud Computing & Big Data student, passionate
//         about building beauty tech products with React and Supabase. I love
//         aesthetic UI design and creating experiences that feel futuristic yet
//         warm.
//       </p>

//       {/* Education Section */}
//       <div className="about-section">
//         <h3>Education</h3>
//         <div className="about-card">
          
//           <div>
//             <h4>Diploma in Cloud Computing & Big Data</h4>
//             <p>Focused on Supabase, React, and Big Data solutions.</p>
//           </div>
//         </div>
//       </div>

//       {/* Work Section */}
//       <div className="about-section">
//         <h3>💼 Work Experience</h3>
//         <div className="about-card">
//           <img src="/images/company.png" alt="Company" />
//           <div>
//             <h4>Internship at [Company Name]</h4>
//             <p>Worked on web development and aesthetic branding projects.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



// import React from "react";

// const About = () => {
//   return (
//     <section className="page about">
//       <h2>About Me</h2>
//       <p>
//         Hi, I’m Akshara — a Cloud Computing & Big Data diploma student passionate
//         about React, Supabase, and aesthetic UI design.
//       </p>
//       // About.jsx

//     </section>
//   );
// };

// export default About;
