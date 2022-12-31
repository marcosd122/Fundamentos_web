import React from "react";
import "../../styles/professores.scss"

export default function ProfessoresCard({ image, name, degree, description }) {
  return (
    <div className="theacher-card">
      <img className="theacher-card-img" src={image} alt="...." />
      <div className="theacher-details">
        <p className="t-title">{name}</p>
        <p className="t-degree">{degree}</p>
        <p className="t-description">{description}</p>
      </div>
      {/* https://github.com/Remix-Design/remixicon#usage */}
      <div className="theacher-social-icons">
        <i className="ri-twitter-line"></i>
        <i className="ri-facebook-line"></i>
        <i className="ri-instagram-line"></i>
        <i className="ri-linkedin-line"></i>
      </div>
    </div>
  );
}