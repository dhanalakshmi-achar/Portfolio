import React from "react";
import { Link } from "react-router-dom";  // import Link
import "../Navbar.css";
import { FaLightbulb, FaCamera, FaLaptopCode, FaBook, FaBriefcase, FaRocket } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="tabs">
        <Link to="/" className="tab home">home</Link>
        <Link to="/about" className="tab about">about</Link>
        <Link to="/contact" className="tab contact">contact</Link>
       <Link to="/projects" className="tab projects">projects</Link>
      </div>
      <div className="brand"> </div>
    </nav>
  );
};

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// import "../Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/projects">Projects</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


// import React from "react";
// import "../Navbar.css";
// import { FaLightbulb, FaCamera, FaLaptopCode, FaBook, FaBriefcase, FaRocket } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="tabs">
//         <div className="tab projects">projects</div>
//         <div className="tab about">about</div>
//         <div className="tab contact">contact</div>
//         <div className="tab home">home</div>
//       </div>
//       <div className="brand"></div>
//     </nav>
//   );
// };

// export default Navbar;
