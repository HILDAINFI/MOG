import React, { useState } from "react";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaDollarSign,
  FaChevronRight,
  FaBuilding,
} from "react-icons/fa";
import "./FindJob.css";

const FindJob = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      title: "Senior UI Developer",
      company: "Tech Innovators Pte Ltd",
      exp: "4–5 Years",
      salary: "S$ 2500 - S$ 4000",
      location: "Queenstown, Singapore",
      image: "https://images.unsplash.com/photo-1581092334681-6c0b2523b4e1?auto=format&fit=crop&w=800&q=80",
      description:
        "Join a dynamic front-end team building cutting-edge web platforms for global clients. Expertise in React and UX required.",
    },
    {
      title: "PHP Developer",
      company: "CloudByte Solutions",
      exp: "3–5 Years",
      salary: "S$ 2200 - S$ 3500",
      location: "Tampines, Singapore",
      image: "https://images.unsplash.com/photo-1584697964154-fdf4fdf5b791?auto=format&fit=crop&w=800&q=80",
      description:
        "Looking for a passionate PHP developer with Laravel experience. Work on SaaS products impacting thousands of users.",
    },
    {
      title: "HR Executive",
      company: "MOR Global",
      exp: "2–4 Years",
      salary: "S$ 2000 - S$ 3000",
      location: "Woodlands, Singapore",
      image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80",
      description:
        "We’re seeking a people-oriented HR Executive to manage onboarding, training, and employee engagement initiatives.",
    },
  ];

  return (
    <div className="findjob-container">
      {/* Header */}
      <header className="findjob-header fade-up">
        <h1>
          <FaBriefcase className="icon" /> Find Your Next Career
        </h1>
        <p>Explore exciting opportunities curated just for you.</p>
      </header>

      {/* Featured Carousel */}
     

      {/* Job Listings */}
      <section className="jobs-section fade-up">
        <h2>Available Positions</h2>
        <div className="job-grid">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="job-card"
              onClick={() => setSelectedJob(job)}
            >
              <div className="job-header">
                <h3>{job.title}</h3>
                <span className="company">{job.company}</span>
              </div>
              <div className="job-details">
                <p><FaBriefcase /> {job.exp}</p>
                <p><FaDollarSign /> {job.salary}</p>
                <p><FaMapMarkerAlt /> {job.location}</p>
              </div>
              <p className="job-desc">{job.description}</p>
              <button className="apply-btn">Apply Now <FaChevronRight /></button>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Job Modal */}
      {selectedJob && (
        <div className="job-modal fade-up">
          <div className="modal-content">
            <h2>{selectedJob.title}</h2>
            <p><FaBuilding /> {selectedJob.company}</p>
            <p><FaBriefcase /> {selectedJob.exp}</p>
            <p><FaDollarSign /> {selectedJob.salary}</p>
            <p><FaMapMarkerAlt /> {selectedJob.location}</p>
            <p>{selectedJob.description}</p>
            <button className="close-btn" onClick={() => setSelectedJob(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindJob;
