// Resume.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Resume = () => { 
  const navigate = useNavigate();
  return (
    <section >
      <h1 style={{  color: "#1e1e1e"}}>My Resume</h1>
      <p style={{  color: "#1e1e1e"}}>Here’s a quick overview of my education, work, projects, and skills.</p>
        <button className="btn secondary" onClick={() => navigate("/Projects")}>View Projects</button>
    </section>
  );
};

export default Resume;
