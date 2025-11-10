import React from "react";
import "./AboutUs.css";
import aboutImage from "../assets/about-us.jpg";
import teamImage from "../assets/team.jpg";
import visionImage from "../assets/vision.jpg";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <img src={aboutImage} alt="About Ministry of Recruiters" className="hero-image" />
        <div className="hero-text fade-up">
          <h1>Ministry of Recruiters</h1>
          <p>Empowering Global Talent — Building Careers with Integrity & Excellence</p>
        </div>
      </section>

      {/* About Cards */}
      <section className="about-section fade-up-delay">
        <h2>About Ministry of Recruiters</h2>
        <div className="about-cards">
          <div className="about-card">
            <img src={teamImage} alt="Our Story" />
            <div className="card-content">
              <h3>Who We Are</h3>
              <p>
                Founded in <strong>2011</strong>, Ministry of Recruiters (MOR) is a leading
                professional recruiting and staffing firm based in Singapore — connecting top talent
                across Asia and beyond.
              </p>
            </div>
          </div>

          <div className="about-card">
            <img src={visionImage} alt="Our Expertise" />
            <div className="card-content">
              <h3>Our Expertise</h3>
              <p>
                From <strong>Construction</strong> to <strong>Healthcare</strong>, <strong>Oil & Gas</strong> to
                <strong>F&B</strong>, we deliver qualified candidates from Singapore, Malaysia, India,
                and several global regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="vision fade-up">
        <div className="vision-overlay"></div>
        <div className="vision-text">
          <h2>Our Vision</h2>
          <p>
            We serve two clients — our employers and our job seekers. Our goal is to build long-term
            trust and create opportunities that benefit both. At MOR, excellence and transparency
            define every partnership.
          </p>
        </div>
      </section>

      {/* Sectors */}
      <section className="sectors fade-up-delay">
        <h2>Our Recruitment Sectors</h2>
        <div className="sector-grid">
          {[
            "Construction",
            "Manufacturing",
            "Marine",
            "Oil & Gas",
            "Healthcare",
            "Hospitality",
            "Retail & F&B",
            "Process & Service",
          ].map((sector, i) => (
            <div key={i} className="sector-card">
              <span>{sector}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
