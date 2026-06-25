// Timeline.jsx
import React from "react";
import "../Timeline.css";

const Timeline = () => {
  const events = [
    { year: "2024", title: "School", desc: "10th at R.V.Nerker Secondary School 🎓" },
    { year: "2027", title: "Bhausaheb Vartak Polytechnic", desc: "Diploma in Cloud Computing & Big Data" },
    { year: "2026", title: "Internship", desc: "Internship at Elite Forums 💼" },
  ];

  return (
    <section className="timeline">
      <h1 style={{ textAlign: "center", color: "#000000" }} className="timeline-title">My Journey</h1>
      <div style={{ textAlign: "left", color: "#232323" }}className="timeline-line">
        {events.map((event, index) => (
          <div  style={{ textAlign: "left", color: "#000000"}} key={index} className="timeline-event">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{event.year} - {event.title}</h3>
              <p>{event.desc}</p>
            </div>
          </div>
        ))}
        
      </div>
      
    </section>
  );
};

export default Timeline;
