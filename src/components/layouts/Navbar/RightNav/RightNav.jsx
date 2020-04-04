import React, { useEffect } from "react";
import "./RightNav.css";

export const RightNav = ({ children }) => {
  useEffect(() => {
    document
      .querySelector(".rightNav_menu")
      .addEventListener("click", () => {
        var nav = document
          .querySelector("nav._rightNav")
        nav.classList.toggle("active");
        // var menu = document.querySelector(".menu");
        document.querySelector(".rightNav_menu").innerHTML = nav.classList.contains('active') ? '&times;': '&#x2630;';
      //  if(nav.classList.contains('active')){
      //    menu.innerHTML = '&times;';
      //  }
      });
  }, []);
  return (
    <>
      {/* <header className="RightNav"> */}
        <div className="rightNav_menu">&#x2630;</div>
        <nav className="_rightNav">
          <ul>
          {children}
          </ul>
        </nav>
      {/* </header> */}
    </>
  );
};
