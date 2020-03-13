import React from "react";
import './BasicButoon.css'

export function BasicButton({  type, value,style,...rest }) {
  return (
    <>
      <button {...rest} className={`basic ${type}`} style={style}>{value}</button>
    </>
  );
}
