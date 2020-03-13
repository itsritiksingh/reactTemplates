import React from "react";
import "./Typography.css";
export const Typography = ({ style, className, children,align }) => {
  // classname can of type display-1 , display-2 , display-3, display-4 , h1 ,h2, h3 ,h4 ,h5 ,h6 ,p,small
  // eslint-disable-next-line react/jsx-no-duplicate-props
  return <div className="Typography" style={{...style,...{textAlign: align}}} className={className}>{children}</div>;
};
