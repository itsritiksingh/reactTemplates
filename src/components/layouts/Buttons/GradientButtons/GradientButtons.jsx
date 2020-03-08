import React from "react";
import "./GradientButtons.css";

export function GradientButtons({ value, color, style }) {
 
  return (
    <>
      <button className={`gradient ${color}`} style={style}>{value}</button>
    </>
  );
}
