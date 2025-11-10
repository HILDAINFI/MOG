import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaInfoCircle, FaBriefcase, FaEnvelope } from "react-icons/fa";
import "./Home.css";

const iconsData = [
  { name: "Home", icon: <FaHome />, path: "/home-details" },
  { name: "About", icon: <FaInfoCircle />, path: "/about" },
  { name: "Find Job", icon: <FaBriefcase />, path: "/findjob" },
  { name: "Contact Us", icon: <FaEnvelope />, path: "/contact" },
];

const Home = () => {
  const navigate = useNavigate();
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const radius = Math.min(windowSize.width, windowSize.height) / 2.4;

  return (
    <div className="home-container">
      <div className="center-content">
        <h1>MINISTRY OF RECRUITERS</h1>
        <p>Connecting talent with opportunity</p>
      </div>

      {iconsData.map((item, index) => {
        const angle = (index / iconsData.length) * 2 * Math.PI;
        const x = windowSize.width / 2 + radius * Math.cos(angle) - 40;
        const y = windowSize.height / 2 + radius * Math.sin(angle) - 40;

        return (
          <div
            key={index}
            className={`icon ${hoveredIcon === item.name ? "active" : ""}`}
            style={{ left: x, top: y }}
            onMouseEnter={() => setHoveredIcon(item.name)}
            onMouseLeave={() => setHoveredIcon(null)}
            onClick={() => navigate(item.path)}
          >
            {item.icon}
            {hoveredIcon === item.name && <div className="icon-label">{item.name}</div>}
          </div>
        );
      })}

      <footer className="footer">
        © 2025 Ministry of Recruiters PTE LTD | All Rights Reserved
      </footer>
    </div>
  );
};

export default Home;
