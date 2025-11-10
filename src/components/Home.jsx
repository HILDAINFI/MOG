import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaEnvelope,
  FaRocket,
} from "react-icons/fa";
import "./Home.css";

const iconsData = [
  { name: "Home", icon: <FaHome />, path: "/home-details" },
  { name: "About", icon: <FaInfoCircle />, path: "/about" },
  { name: "Find Job", icon: <FaBriefcase />, path: "/findjob" },
  { name: "Contact Us", icon: <FaEnvelope />, path: "/contact" },
  { name: "Landing Page", icon: <FaRocket />, path: "/landing" },
];

const ICON_SIZE = 90;

const Home = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [positions, setPositions] = useState([]);

  const computePositions = () => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2.2; // More spacing

    const newPos = iconsData.map((_, i) => {
      const angle = (i / iconsData.length) * 4 * Math.PI - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle) - ICON_SIZE / 2;
      const y = centerY + radius * Math.sin(angle) - ICON_SIZE / 2;
      return { left: x, top: y };
    });

    setPositions(newPos);
  };

  useEffect(() => {
    computePositions();
    const onResize = () => computePositions();
    window.addEventListener("resize", onResize);
    const t = setTimeout(computePositions, 300);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="home-root">
      <div className="home-container" ref={containerRef}>
        <div className="center-content">
          <h1>MINISTRY OF RECRUITERS</h1>
          <p>Connecting talent with opportunity</p>
        </div>

        {iconsData.map((item, index) => {
          const pos = positions[index] || { left: "50%", top: "50%" };
          return (
            <button
              key={item.name}
              className={`icon ${hoveredIcon === item.name ? "active" : ""}`}
              style={{ left: pos.left, top: pos.top }}
              onMouseEnter={() => setHoveredIcon(item.name)}
              onMouseLeave={() => setHoveredIcon(null)}
              onClick={() => navigate(item.path)}
            >
              <span className="icon-inner">{item.icon}</span>
              <span className="icon-label">{item.name}</span>
            </button>
          );
        })}

      
      </div>
    </div>
  );
};

export default Home;
