import React from "react";
import "./Typography.css";
export const Typography = ({ style, size, className, children }) => {
  return <div className="Typography" style={{...style}} classNam={className}>{children}</div>;
};
