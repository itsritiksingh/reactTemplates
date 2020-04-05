import React from "react";
import "./Header.css";

export const Header = ({ height, children, style, backgroundImage }) => {
  return (
    <header
      style={{
          height: height,
          backgroundImage,
        ...style,
      }}
    >
      {children}
    </header>
  );
};
