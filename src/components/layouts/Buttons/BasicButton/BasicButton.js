import React from "react";
import './BasicButoon.css'

export function BasicButton({ value, type, text }) {
  return (
    <>
      <button className={`${value} ${type}`}>{text}</button>
    </>
  );
}
