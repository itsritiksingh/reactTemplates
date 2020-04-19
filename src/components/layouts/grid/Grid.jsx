import React from "react";
import "./Grid.css";
// export const Grid = ({ className, children, style ,padding }) => {
//   return (
//     <div className={className } style={{padding,...style}}>
//       {children}
//     </div>
//   );
// };

export const Row = ({children,className}) => {
  return (
  <div className={`row ${className? className : ''}`}>{children}</div>
  )
}

export const Column = ({children,className}) => {
  return (
  <div className={`column ${className? className : ''}`}>{children}</div>
  )
}
