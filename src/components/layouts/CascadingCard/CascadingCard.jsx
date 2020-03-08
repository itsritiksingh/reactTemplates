import React from "react";
import "./CascadingCard.css";
export const CascadingCard = ({ content }) => {
  return (
    <div className="CascadingCard">
      <img src={require(content.image)} alt="" />
      <h2>{content.mainHeading}</h2>
      <h3>{content.subHeading}</h3>
      <p>{content.text}</p>
    </div>
  );
};
