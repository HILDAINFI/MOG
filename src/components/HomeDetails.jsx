import React, { useState, useEffect } from "react";
import "./HomeDetails.css";

const images = [
  "https://res.cloudinary.com/adaface/image/upload/v1688968194/recruitment-agency.jpg",
  "https://www.sutrahr.com/wp-content/uploads/2021/07/Specialized-Team-min-1.jpg",
  "https://cdn4.vectorstock.com/i/1000x1000/59/28/hiring-process-concept-icon-vector-41565928.jpg",
  "https://en.pimg.jp/096/247/096/1/96247096.jpg",
  "https://photos.peopleimages.com/picture/202209/2506857-man-at-hiring-company-smile-for-interview-with-manager-or-boss-to-join-team-of-workers.-young-professional-male-in-group-of-people-for-job-recruitment-at-business-or-office-for-growth-in-career-fit_400_400.jpg"
];

const HomeDetails = () => {
  const [current, setCurrent] = useState(0);

  // Automatic slider every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-details-container">
      <div className="slider">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={index === current ? "slide active" : "slide"}
          />
        ))}
      </div>

      <div className="description">
        <h2>Our Vision</h2>
        <p>
          Ministry of Recruiters (MOR) vision is simple as follows: We believe we
          have two clients – "our customers and our job seekers." Our success and
          reputation is built around each other. We know our relationship with both
          is mutually beneficial and we continually strive to satisfy everybody at
          the highest possible level.
        </p>
      </div>
    </div>
  );
};

export default HomeDetails;
