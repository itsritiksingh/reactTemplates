import React from "react";
import './BasicButoon.css'

export function BasicButton({  type, value,style }) {
  return (
    <>
      <button className={`basic ${type}`} style={style}>{value}</button>
    </>
  );
}
