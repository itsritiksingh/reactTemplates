import React from "react";
import './BasicButoon.css'

export function BasicButton({  type,children,style,...rest }) {
  return (
    <>
      <button {...rest} className={`basic ${type}`} style={style}>{children}</button>
    </>
  );
}
