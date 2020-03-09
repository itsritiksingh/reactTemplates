import React from "react";
import "./CascadingCard.css";
export const CascadingCard = ({ content }) => {
  return (
    <div className="CascadingCard">
      <img src={content.image} alt=""  className={`card-img ${content.imgSize}`}/>
      <div className="card-content">
        <h2 style={{color: `${content.mainHeadingColor}`}}>{content.mainHeading}</h2>
        <h3 style={{color: `${content.subHeadingColor}`}}>{content.subHeading}</h3>
        <p style={{color: `${content.textColor}`}}>{content.text}</p>
      </div>
    </div>
  );
};
