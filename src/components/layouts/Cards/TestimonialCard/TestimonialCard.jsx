import React from "react";
import "./TestimonialCard.css";

export function TestimonialCard({ options }) {
  return (
    <>
      <div className="test-container">
        <div className="test-header"></div>
        <div className="test-body">
          <img src={options.src} alt={options.alt} className="test-avatar" />
          <h1>{options.name}</h1>
          <p>{options.text}</p>
        </div>
      </div>
    </>
  );
}
