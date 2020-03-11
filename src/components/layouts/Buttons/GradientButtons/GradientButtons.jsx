import React from "react";
import "./GradientButtons.css";

export function GradientButtons({ value, color, style,...rest }) {
 
  return (
    <>
      <button {...rest} className={`gradient ${color}`} style={style}>{value}</button>
    </>
  );
}
